import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { profileReducers } from "../reducers/profileReducers";

const rootReducer = combineReducers({
	profilo: profileReducers,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
