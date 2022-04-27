import * as types from '../actions/types';
import { data } from '../../data';

const initialState = {
  projects: [],
  oneProject: {},
  sideBarStatus: false,
  projectTasks: data,
  socket: null,
  messages: [],
  projectExists: false,
  allUsers: [],
  allContributors: [],
  allTasks: [],
  User: {}
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

    case types.SET_UP_SOCKET:
      return {
        ...state,
        socket: payload
      };

    case types.ALL_MESSAGES:
      return {
        ...state,
        messages: payload
      };
    case types.PROJECT_EXISTS:
      return {
        ...state,
        projectExists: true
      };
    case types.ALL_USERS:
      return {
        ...state,
        allUsers: payload
      };

    case types.ALL_CONTRIBUTORS:
      return {
        ...state,
        allContributors: payload
      };
    case types.ALL_TASKS:
      return {
        ...state,
        allTasks: payload
      };
    case types.USER_PROFILE:
      return {
        ...state,
        User: payload
      };

    default:
      return state;
  }

};