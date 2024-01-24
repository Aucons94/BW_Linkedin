import { combineReducers } from "redux";
import { experienceReducer } from "./ExperienceReducer";
import { profileReducers } from "./profileReducers";

const rootReducer = combineReducers({
	info: profileReducers,
	experience: experienceReducer,
});

export default rootReducer;
