import { SET_CITY } from "../actions/types";
import isEmpty from "../validation/is-empty";

const initialState = {
  isUrban: false,
  city: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CITY:
      console.log(action.payload);
      return {
        ...state,
        city: action.payload
      };
    default:
      return state;
  }
}
