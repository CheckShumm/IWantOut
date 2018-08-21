import { SET_CITY, SET_CITY_QUALITY, SET_CITY_IMAGE } from "../actions/types";

const initialState = {
  isUrban: false,
  city: {},
  quality: {},
  image: {}
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
    case SET_CITY_IMAGE:
      return {
        ...state,
        image: action.payload
      };
    default:
      return state;
  }
}
