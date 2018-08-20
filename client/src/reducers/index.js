import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import cityReducer from "./cityReducer";

export default combineReducers({
  auth: authReducer,
  city: cityReducer,
  errors: errorReducer
});
