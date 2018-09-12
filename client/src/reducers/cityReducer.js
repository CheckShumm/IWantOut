import {
  SET_CITY,
  SET_CITY_QUALITY,
  SET_CITY_IMAGE,
  SET_CITY_HOUSING,
  SET_CITY_COST_OF_LIVING,
  SET_CITY_CLIMATE
} from "../actions/types";

const initialState = {
  isUrban: false,
  city: {},
  quality: {},
  climate: {},
  housing: {},
  costOfLiving: {},
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
    case SET_CITY_CLIMATE:
      return {
        ...state,
        climate: action.payload
      };
    case SET_CITY_HOUSING:
      return {
        ...state,
        housing: action.payload
      };
    case SET_CITY_COST_OF_LIVING:
      return {
        ...state,
        costOfLiving: action.payload
      };
    default:
      return state;
  }
}
