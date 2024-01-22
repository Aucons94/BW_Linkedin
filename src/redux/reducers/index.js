import { combineReducers } from "redux";
import profileReducers from "./profileReducers";

const rootReducer = combineReducers({
  info: profileReducers,
});

export default rootReducer;
