import axios from "axios";

// import types
import { GET_ERRORS } from "./types";
import { SET_CITY } from "./types";

// retrieve city quality of life
export const setCity = city => dispatch => {
  axios
    .get(`/api/teleport/city/${city.uaSlug}/urban_area/scores`)
    .then(res => {
      dispatch({
        type: SET_CITY,
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
