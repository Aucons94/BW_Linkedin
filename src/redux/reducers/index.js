import { combineReducers, configureStore } from "@reduxjs/toolkit";
import myProfileInfoReducers from "../reducers/profileReducers";

const rootReducer = configureStore({
  reducer: combineReducers({
    info: myProfileInfoReducers,
  }),
});

export default rootReducer;
