import { SET_CITY, SET_CITY_QUALITY } from "../actions/types";

const initialState = {
  isUrban: false,
  city: {},
  quality: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CITY:
      return {
        ...state,
        city: action.payload
      };
    case SET_CITY_QUALITY:
      return {
        ...state,
        quality: action.payload
      };
    default:
      return state;
  }
}
