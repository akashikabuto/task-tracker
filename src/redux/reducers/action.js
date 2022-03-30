import * as types from '../actions/types';
import { data } from '../../data';

const initialState = {
  projects: [],
  oneProject: [],
  sideBarStatus: false,
  projectTasks: data,
};

export const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ALL_PROJECTS:
      return {
        ...state,
        projects: payload
      };
    case types.ONE_PROJECT:
      return {
        ...state,
        oneProject: payload
      };
    case types.TOOGLE_SIDEBAR:
      return {
        ...state,
        sideBarStatus: payload
      };

    case types.CHANGE_TASK_TO_DONE:
      return {
        ...state,
        projectTasks: payload
      };

    default:
      return state;
  }

};