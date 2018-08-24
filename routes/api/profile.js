const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Profile model
const Profile = require("../../models/Profile");

// Load User model
const User = require("../../models/User");

// Load profile validation
const validateProfileInput = require("../../validation/profile");

// @route   get /test
// @desc    test
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Profile Connected" }));

// @route   Get api/profile
// @desc    current user profile
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"])
      .then(profile => {
        if (!profile) {
          errors.profile = "This user does not have a profile";
          return res.status(404).json(errors);
        } else {
          res.json(profile);
        }
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   POST api/profile
// @desc    create user profile
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // check validation for profile fields
    if (!isValid) {
      // return errors
      return res.status(400).json({ errors });
    }

    // get aLL fields
    const profileFields = {};
    profileFields.user = req.user.id;

    profileFields.firstName = req.user.name;

    if (req.body.lastName) {
      profileFields.lastName = req.body.lastName;
    }

    if (req.body.location) {
      profileFields.location = req.body.location;
    }

    if (req.body.housing) {
      profileFields.housing = req.body.housing;
    }

    if (req.body.costOfLiving) {
      profileFields.costOfLiving = req.body.costOfLiving;
    }

    if (req.body.education) {
      profileFields.education = req.body.education;
    }

    if (req.body.economy) {
      profileFields.economy = req.body.economy;
    }

    if (req.body.culture) {
      profileFields.culture = req.body.culture;
    }

    if (req.body.career) {
      profileFields.career = req.body.career;
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // Profile exists, update profileFields
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        )
          .then(res.json(profile))
          .catch(err => console.log(err));
      } else {
        // save profile
        new Profile(profileFields).save().then(profile => res.json(profile));
      }
    });
  }
);

// @route   POST api/profile/cities
// @desc    add a city
// @access  Private
router.post(
  "/cities",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCityInput(req.body);

    // check validation for profile fields
    if (!isValid) {
      // return errors
      return res.status(400).json({ errors });
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      const newExp = {
        name: req.body.name,
        slug: req.body.slug,
        ua_id: req.body.ua_id
      };

      // add to exp array
      profile.experience.unshift(newExp);
      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route   DELETE api/profile/cities/:city_id
// @desc    remove a city from user profile
// @access  Private
router.delete(
  "/cities/:city_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Get remove index
        const removeIndex = profile.city
          .map(item => item.id)
          .indexOf(req.params.exp_id);
        // splice
        profile.city.splice(removeIndex, 1);

        // save
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   DELETE api/profile/
// @desc    remove user and their profile
// @access  Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id })
      .then(profile => {
        User.findOne({ _id: req.user.id }).then(() =>
          res.json({ success: true })
        );
      })
      .catch(err => res.status(404).json(err));
  }
);
module.exports = router;
