// import libraries
const express = require("express");
const router = express.Router();

// import models

// import validation

// teleport api root
const teleport = "https://api.teleport.org/api/urban_areas/";

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
