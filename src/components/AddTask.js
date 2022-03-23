import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../redux/actions/actions';
import { useTranslation } from 'react-i18next';
import Input from '../components/Input';
import '../css/addTask.css';





export default function AddTask() {

  const initialState = {
    projectName: ""
  };

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const token = localStorage.getItem("token");
  const locale = localStorage.getItem("lang") || "eng";
  const [state, setState] = useState(initialState);

  function handleCreateProject(e) {
    e.preventDefault();
    dispatch(addProject(token, state));
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
        <form onSubmit={handleCreateProject} >
          <div className='input-flex' >
            <label>{t("Project_name")}</label>
            <Input placeholder='project name' name='projectName' handleOnchange={OnChange} />
            <button className='add-button'>{t("Add")}</button>
          </div>
        </form>
      </div>
    </>
  );
}
