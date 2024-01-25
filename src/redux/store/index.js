import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { profileReducers } from "../reducers/profileReducers";
import { multiProfiliReducers } from "../reducers/multiProfileReducers";
import { postReducer } from "../reducers/postReducer";
import { modalReducer } from "../reducers/modalReducer";

const rootReducer = combineReducers({
	profilo: profileReducers,
	multiProfili: multiProfiliReducers,
	postData: postReducer,
	modalInfo: modalReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
