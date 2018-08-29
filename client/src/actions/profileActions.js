import axios from "axios";

// import types
import {
  GET_PROFILE,
  CLEAR_CURRENT_PROFILE,
  SET_PROFILE,
  GET_ERRORS
} from "./types";

// get profile
export const getProfile = () => dispatch => {
  axios
    .get(`/api/profile`)
    .then(res => {
      dispatch({
        type: GET_PROFILE,
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

// set profile
export const setProfile = profileData => dispatch => {
  axios
    .post(`/api/profile`)
    .then(res => {
      dispatch({
        type: SET_PROFILE,
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
