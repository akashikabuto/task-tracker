import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProject } from '../redux/actions/actions';
import { useTranslation } from 'react-i18next';
import Input from '../components/Input';
import '../css/addTask.css';





export default function AddTask({ locale }) {

  const initialState = {
    name: "",
    description: "",
    status: "open"
  };


  const { projectExists } = useSelector(state => state.tasks);
  const history = useHistory();

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const token = localStorage.getItem("token");
  const [state, setState] = useState(initialState);

  function handleCreateProject(e) {
    e.preventDefault();
    dispatch(addProject(token, state, history));
  }

  function OnChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    i18n.changeLanguage(locale);
    //eslint-disable-next-line
  }, [locale]);


  return (
    <>
      <div className='add-task-header' >
        <h3>{t("ADD_PROJECT")}</h3>
      </div>
      <div className='add-task-form' >
        {projectExists ? <p style={{ color: "red", padding: "5px" }} >Project arleady exists</p> : ""}
        <form onSubmit={handleCreateProject} >
          <div className='input-flex' >
            <label>{t("Project_name")}</label>
            <Input placeholder='Project name' type='text' name='name' handleOnchange={OnChange} />
            <Input placeholder='Description' type='text' name='description' handleOnchange={OnChange} />
            <button className='add-button'>{t("Add")}</button>
          </div>
        </form>
      </div>
    </>
  );
}
