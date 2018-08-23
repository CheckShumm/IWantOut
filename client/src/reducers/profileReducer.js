import {
  GET_PROFILE,
  CLEAR_CURRENT_PROFILE,
  SET_PROFILE
} from "../actions/types";

const initialState = {
  profile: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    default:
      return state;
  }
}
