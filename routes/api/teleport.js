// import libraries
const express = require("express");
const router = express.Router();
const request = require("request");
// import models

// import validation
const isEmpty = require("../../validation/is-empty");

// teleport api root
const teleport = "https://api.teleport.org/api";

// retrieve JSON from url
convertJSON = (callback, url, res, dataRequest) => {
	request(
		{
			url: url,
			json: true
		},
		(error, response, body) => {
			if (!error && response.statusCode === 200) {
				callback(body, res, dataRequest);
			} else {
				console.log(error);
			}
		}
	);
};

processRequest = (body, res, dataRequest) => {
	if (dataRequest == null || dataRequest == undefined) {
		res.send(body);
	} else {
		const data = body.categories.filter(data => {
			return data.id === dataRequest;
		});
		res.send(data);
	}
};

// @route   GET /test/
// @desc    Tests posts route
// @access  Public route
router.get("/test", (req, res) => {
	convertJSON(processRequest, teleport, res, null);
});

// @route   GET api/teleport/city/urban/scores
// @desc    get city scores from ua_id
// @access  Public route
router.get("/city/:city_name/urban_area/scores", (req, res) => {
	const scoresURL =
		teleport + "/urban_areas/slug:" + req.params.city_name + "/scores";

	// url using ua_id
	// 	const scoresURL =
	//  teleport + "/urban_areas/teleport%3A" + req.params.ua_id + "/scores";

	convertJSON(processRequest, scoresURL, res, null);
});

// @route   GET api/teleport/city/:city_name/urban/:ua_id/scores
// @desc    get city scores from ua_id
// @access  Public route
router.get("/city/:city_name/urban_area/:ua_id/scores", (req, res) => {
	const scoresURL =
		teleport + "/urban_areas/slug:" + req.params.city_name + "/scores";

	// url using ua_id
	// 	const scoresURL =
	//  teleport + "/urban_areas/teleport%3A" + req.params.ua_id + "/scores";

	convertJSON(processRequest, scoresURL, res, null);
});

// @route   GET api/teleport/city/:city_name/urban/:ua_id/salaries
// @desc    get city details from ua_id
// @access  Public route
router.get("/city/:city_name/urban_area/salaries", (req, res) => {
	const salariesURL =
		teleport + "/urban_areas/slug:" + req.params.city_name + "/salaries";

	// url using ua_id
	// 	const salariesURL =
	//  teleport + "/urban_areas/teleport%3A" + req.params.ua_id + "/salaries";

	convertJSON(processRequest, salariesURL, res, null);
});

// @route   GET api/teleport/city/:city_name/urban/:ua_id/details
// @desc    get city details from ua_id
// @access  Public route
router.get("/city/:city_name/urban_area/details", (req, res) => {
	const detailsURL =
		teleport + "/urban_areas/slug:" + req.params.city_name + "/details";

	// url using ua_id
	// 	const detailsURL =
	//  teleport + "/urban_areas/teleport%3A" + req.params.ua_id + "/details";

	convertJSON(processRequest, detailsURL, res, null);
});

// @route   GET api/teleport/city/:city_name/urban/:ua_id/details/climate
// @desc    get city details climate from ua_id
// @access  Public route
router.get("/city/:city_name/urban_area/details/climate", (req, res) => {
	const detailsURL =
		teleport + "/urban_areas/slug:" + req.params.city_name + "/details";

	convertJSON(processRequest, detailsURL, res, "CLIMATE");
});

// @route   GET api/teleport/city/:city_name/urban/:ua_id/details/housing
// @desc    get city details housing from ua_id
// @access  Public route
router.get("/city/:city_name/urban_area/details/housing", (req, res) => {
	const detailsURL =
		teleport + "/urban_areas/slug:" + req.params.city_name + "/details";

	convertJSON(processRequest, detailsURL, res, "HOUSING");
});

// @route   GET api/teleport/city/:city_name/urban/:ua_id/details/education
// @desc    get city details education from ua_id
// @access  Public route
router.get("/city/:city_name/urban_area/details/education", (req, res) => {
	const detailsURL =
		teleport + "/urban_areas/slug:" + req.params.city_name + "/details";

	convertJSON(processRequest, detailsURL, res, "EDUCATION");
});

// @route   GET api/teleport/city/:city_name/urban/:ua_id/details/costofliving
// @desc    get city details costofliving from ua_id
// @access  Public route
router.get("/city/:city_name/urban_area/details/cost_of_living", (req, res) => {
	const detailsURL =
		teleport + "/urban_areas/slug:" + req.params.city_name + "/details";

	convertJSON(processRequest, detailsURL, res, "COST-OF-LIVING");
});

// @route   GET api/teleport/city/:city_name/urban/:ua_id/images
// @desc    get city images from ua_id
// @access  Public route
router.get("/city/:city_name/urban_area/images", (req, res) => {
	const imagesURL =
		teleport + "/urban_areas/slug:" + req.params.city_name + "/images";

	// url using ua_id
	// 	const imagesURL =
	//  teleport + "/urban_areas/teleport%3A" + req.params.ua_id + "/images";

	convertJSON(processRequest, imagesURL, res, null);
});

module.exports = router;
