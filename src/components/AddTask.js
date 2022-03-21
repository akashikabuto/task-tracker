import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../redux/actions/actions';
import Input from '../components/Input';
import '../css/addTask.css';





export default function AddTask() {

  const initialState = {
    projectName: ""
  };

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const [state, setState] = useState(initialState);

  function handleCreateProject(e) {
    e.preventDefault();
    dispatch(addProject(token, state));
    setState({ ...state, [e.target.name]: '' });
  }

  function OnChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }


  return (
    <>
      <div className='add-task-header' >
        <h3>ADD TASK</h3>
      </div>
      <div className='add-task-form' >
        <form onSubmit={handleCreateProject} >
          <div className='input-flex' >
            <label>Name</label>
            <Input placeholder='project name' name='projectName' handleOnchange={OnChange} />
            <button className='add-button'>Add</button>
          </div>
        </form>
      </div>
    </>
  );
}
