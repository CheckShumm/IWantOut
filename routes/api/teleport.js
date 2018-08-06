// import libraries
const express = require("express");
const router = express.Router();

// import models

// import validation

// teleport api root
const teleport = "https://api.teleport.org/api/";

// retrieve JSON from url
convertJSON = url => {
	request(
		{
			url: teleport,
			json: true
		},
		(error, response, body) => {
			if (!error && response.statusCode === 200) {
				city = body;
			}
		}
	);
};

// @route   GET api/users/test
// @desc    Tests posts route
// @access  Public route
router.get("/test", (req, res) => res.json({ msg: "/Teleport" }));
