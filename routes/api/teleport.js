// import libraries
const express = require("express");
const router = express.Router();
const request = require("request");
// import models

// import validation

// teleport api root
const teleport = "https://api.teleport.org/api";

// retrieve JSON from url
convertJSON = (callback, url, res) => {
	request(
		{
			url: url,
			json: true
		},
		(error, response, body) => {
			if (!error && response.statusCode === 200) {
				callback(body, res);
			} else {
				console.log(error);
			}
		}
	);
};

processRequest = (body, res) => {
	res.send(body);
};

// @route   GET /test/
// @desc    Tests posts route
// @access  Public route
router.get("/test", (req, res) => {
	convertJSON(processRequest, teleport, res);
});

// @route   GET api/teleport/city/:city_name/urban/:ua_id
// @desc    get city details from ua_id
// @access  Public route
router.get("/city/:city_name/urban_area/:ua_id", (req, res) => {
	const scoresURL =
		teleport + "/urban_areas/slug:" + req.params.city_name + "/scores";

	// url using ua_id
	// 	const scoresURL =
	//  teleport + "/urban_areas/teleport%3A" + req.params.ua_id + "/scores";

	convertJSON(processRequest, scoresURL, res);
});

module.exports = router;
