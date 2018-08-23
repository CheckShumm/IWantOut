import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import cityReducer from "./cityReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  auth: authReducer,
  city: cityReducer,
  profile: profileReducer,
  errors: errorReducer
});
