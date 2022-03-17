import { combineReducers } from "redux";
import { taskReducer } from "./action";

export const combinedReducer = combineReducers({
  tasks: taskReducer
});


