const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCityInput(data) {
	let errors = {};

	// convert data tp empty strings if null ( required bny validator)
	data.name = !isEmpty(data.name) ? data.name : "";
	data.slug = !isEmpty(data.slug) ? data.slug : "";
	data.ua_id = !isEmpty(data.ua_id) ? data.ua_id : "";

	// test for empty name
	if (validator.isEmpty(data.name)) {
		errors.name = "City name field is empty";
	}

	// test for empty slug
	if (validator.isEmpty(data.slug)) {
		errors.slug = "city slug field is empty";
	}

	// test for empty ua_id
	if (validator.isEmpty(data.ua_id)) {
		errors.ua_id = "ua_id field is empty";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
