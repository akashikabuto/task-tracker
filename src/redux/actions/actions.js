import * as types from '../actions/types';

let url = `http://localhost:7000`;


export const seeAllProjects = (token) => async (dispatch, getState) => {
  try {
    const config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      },
    };
    const res = await (await fetch(`${url}/api/user/projects`, config)).json();
    if (res.status === 200) {
      dispatch({
        type: types.ALL_PROJECTS,
        payload: res.data
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const addProject = (token, state) => async (dispatch, getState) => {
  try {
    const config = {
      method: "POST",
      headers: {
        'Content-type': "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(state)
    };
    const res = await (await fetch(`${url}/api/user/createProject`, config)).json();
    if (res.status === 200) {
      dispatch(seeAllProjects(token));
    }
  } catch (error) {
    console.log(error);
  }
};

export const viewOneProject = (token, id) => async (dispatch, getState) => {
  try {
    const config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const res = await (await fetch(`${url}/api/user/project?id=${id}`, config)).json();
    dispatch({
      type: types.ONE_PROJECT,
      payload: res.data
    });

  } catch (error) {
    console.log(error);
  }
};

export const toogleSideBar = () => async (dispatch, getState) => {

  const { tasks } = getState();
  const { sideBarStatus } = tasks;
  let status;
  sideBarStatus ? status = false : status = true;

  return dispatch({
    type: types.TOOGLE_SIDEBAR,
    payload: status
  });
};

export const makeStatusTaskToDone = (id) => async (dispatch, getState) => {
  const { tasks } = getState();
  const { projectTasks } = tasks;
  const array = projectTasks.filter((task) => task.id === id);
  array[0].status = 'done';

  const newArray = array.filter((task) => task.id !== id).concat([...projectTasks]);


  return dispatch({
    type: types.CHANGE_TASK_TO_DONE,
    payload: newArray
  });


};


