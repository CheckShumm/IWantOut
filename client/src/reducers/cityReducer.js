import { SET_CITY } from "../actions/types";

const initialState = {
  isUrban: false,
  city: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CITY:
      return {
        ...state,
        city: action.payload
      };
    default:
      return state;
  }
}
