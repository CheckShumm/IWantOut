import axios from "axios";

// import types
import { GET_ERRORS } from "./types";
import {
  SET_CITY,
  SET_CITY_QUALITY,
  SET_CITY_IMAGE,
  SET_CITY_HOUSING,
  SET_CITY_COST_OF_LIVING
} from "./types";
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

// retrieve city housing of life
export const setCityHousing = city => dispatch => {
  axios
    .get(`/api/teleport/city/${city.uaSlug}/urban_area/details/housing`)
    .then(res => {
      dispatch({
        type: SET_CITY_HOUSING,
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

// retrieve city cost of living
export const setCityCostOfLiving = city => dispatch => {
  axios
    .get(`/api/teleport/city/${city.uaSlug}/urban_area/details/cost_of_living`)
    .then(res => {
      dispatch({
        type: SET_CITY_COST_OF_LIVING,
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
