import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { profileReducers } from "../reducers/profileReducers";
import { multiProfiliReducers } from "../reducers/multiProfileReducers";
import { postReducer } from "../reducers/postReducer";

const rootReducer = combineReducers({
	profilo: profileReducers,
	multiProfili: multiProfiliReducers,
	postData: postReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
