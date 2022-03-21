import * as types from '../actions/types';

const initialState = {
  projects: [],
  oneProject: [],
  sideBarStatus: false
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
    default:
      return state;
  }

};