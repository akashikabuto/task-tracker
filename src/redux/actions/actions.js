import * as types from '../actions/types';
import io from 'socket.io-client';

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


  array[0].status === 'done' ? array[0].status = 'open' : array[0].status = 'done';

  const newArray = array.filter((task) => task.id !== id).concat([...projectTasks]);

  return dispatch({
    type: types.CHANGE_TASK_TO_DONE,
    payload: newArray
  });

};

export const setUpSocket = () => async (dispatch, getState) => {

  const token = localStorage.getItem('token');

  const { tasks } = getState();
  const { socket } = tasks;

  if (token && !socket) {
    const newSocket = io('ws://localhost:7000', {
      query: {
        token: token
      }
    });

    newSocket.on('connect', () => {
      console.log('connected');
    });

    newSocket.on('disconnect', () => {
      console.log('disconnected');
    });

    dispatch({
      type: types.SET_UP_SOCKET,
      payload: newSocket
    });

  }
};

export const getRoomMessages = (roomId, token) => async (dispatch, getState) => {

  try {
    const config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const res = await (await fetch(`${url}/api/user/roomMessages?roomId=${roomId}`, config)).json();
    if (res.status === 200) {
      dispatch({
        type: types.ALL_MESSAGES,
        payload: res.data
      });
    }
  } catch (error) {
    console.log(error);
  }

};



export const allMessagesBetweenUsers = () => async (dispatch, getState) => {

  const { tasks } = getState();
  const { socket, messages } = tasks;
  console.log("msas", messages);

  if (socket) {
    socket.on("newMessage", (message) => {
      const newMessages = [...messages, message];
      console.log('obj', message);
      console.log('yes', newMessages);
      dispatch({
        type: types.ALL_MESSAGES,
        payload: newMessages
      });
    });
  }


};




