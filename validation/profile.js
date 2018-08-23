const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  // convert data tp empty strings if null ( required by validator)
  data.housing = !isEmpty(data.housing) ? data.housing : "";
  data.costOfLiving = !isEmpty(data.costOfLiving) ? data.costOfLiving : "";
  data.culture = !isEmpty(data.culture) ? data.culture : "";
  data.career = !isEmpty(data.career) ? data.career : "";
  data.economy = !isEmpty(data.economy) ? data.economy : "";
  data.education = !isEmpty(data.education) ? data.education : "";

  // test for empty housing
  if (validator.isEmpty(data.housing)) {
    errors.housing = "housing field is empty";
  }

  // test for empty costOfLiving
  if (validator.isEmpty(data.costOfLiving)) {
    errors.costOfLiving = "costOfLiving field is empty";
  }

  // test for empty culture
  if (validator.isEmpty(data.culture)) {
    errors.culture = "culture field is empty";
  }

  // test for empty career
  if (validator.isEmpty(data.career)) {
    errors.career = "career field is empty";
  }

  // test for empty education
  if (validator.isEmpty(data.education)) {
    errors.education = "education field is empty";
  }

  // test for empty economy
  if (validator.isEmpty(data.economy)) {
    errors.economy = "education field is empty";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
