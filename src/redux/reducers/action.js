import * as types from '../actions/types';

const initialState = {
  projects: [],
  oneProject: []
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

    default:
      return state;
  }

};