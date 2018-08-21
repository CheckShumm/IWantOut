import axios from "axios";

// import types
import { GET_ERRORS } from "./types";
import { SET_CITY, SET_CITY_QUALITY, SET_CITY_IMAGE } from "./types";
import isEmpty from "../validation/is-empty";
export const setCity = city => dispatch => {
  dispatch({
    type: SET_CITY,
    payload: city
  });
};

// retrieve city quality of life
export const setCityQuality = city => dispatch => {
  axios
    .get(`/api/teleport/city/${city.uaSlug}/urban_area/scores`)
    .then(res => {
      dispatch({
        type: SET_CITY_QUALITY,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.errors
      })
    );
};
// retrieve city images
export const setCityImages = city => dispatch => {
  axios
    .get(`/api/teleport/city/${city.uaSlug}/urban_area/images`)
    .then(res => {
      console.log(res.data);
      const photo = !isEmpty(res.data.photos)
        ? res.data.photos[0].image.web
        : "";

      dispatch({
        type: SET_CITY_IMAGE,
        payload: photo
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.errors
      })
    );
};
