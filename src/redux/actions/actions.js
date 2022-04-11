import * as types from '../actions/types';
import io from 'socket.io-client';

let url = `https://mern-learning-task-tracker.herokuapp.com`;



export const seeAllProjects = (token, lang, history) => async (dispatch, getState) => {

  try {
    const config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        'accept-language': `${lang}`
      },
    };
    const res = await (await fetch(`${url}/api/project/all`, config)).json();
    if (res.status === 200) {
      dispatch({
        type: types.ALL_PROJECTS,
        payload: res.data
      });
    }
    if (res.status === 401) {
      history.push('/login');
    }
  } catch (error) {
    console.log(error);
  }
};

export const addProject = (token, state, history) => async (dispatch, getState) => {

  const lang = localStorage.getItem("lang") || "eng";
  try {
    const config = {
      method: "POST",
      headers: {
        'Content-type': "application/json",
        Authorization: `Bearer ${token}`,
        'accept-language': `${lang}`
      },
      body: JSON.stringify(state)
    };
    const res = await (await fetch(`${url}/api/project/add`, config)).json();
    if (res.status === 201) {
      dispatch(seeAllProjects(token));
    }
    if (res.status === 401) {
      history.push('/login');
    }
    if (res.status === 409) {
      dispatch({
        type: types.PROJECT_EXISTS
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const viewOneProject = (token, id, history) => async (dispatch, getState) => {
  const lang = localStorage.getItem("lang") || "eng";
  try {
    const config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        'accept-language': `${lang}`
      }
    };
    const res = await (await fetch(`${url}/api/project/${id}`, config)).json();

    console.log("res", res);

    if (res.status === 200) {
      dispatch({
        type: types.ONE_PROJECT,
        payload: res.data
      });
    }
    if (res.status === 401) {
      history.push('/login');
    }

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
    const newSocket = io(`https://mern-learning-task-tracker.herokuapp.com`, { query: { token } });
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
        Authorization: `Bearer ${token}`,

      }
    };
    const res = await (await fetch(`${url}/api/message/all?roomId=${roomId}`, config)).json();
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
  if (socket) {
    socket.on("newMessage", (message) => {
      const newMessages = [...messages, message];
      dispatch({
        type: types.ALL_MESSAGES,
        payload: newMessages
      });
    });
  }
};




