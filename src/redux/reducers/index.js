import profileReducers from "./profileReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	info: profileReducers,
});

export default rootReducer;
