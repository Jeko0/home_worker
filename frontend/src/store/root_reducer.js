import { combineReducers } from "redux";
import { subjectsReducer } from "./subject/subject.reducer";
import {userReducer } from './user/user.reducer';


export const rootReducer = combineReducers({
  user: userReducer,
  subjects: subjectsReducer,
})