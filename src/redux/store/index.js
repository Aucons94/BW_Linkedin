import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { profileReducers } from "../reducers/profileReducers";
import { multiProfiliReducers } from "../reducers/multiProfileReducers";

const rootReducer = combineReducers({
	profilo: profileReducers,
	multiProfili: multiProfiliReducers,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
