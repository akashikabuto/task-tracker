import { useEffect } from 'react';
import addLogo from '../images/plus.png';
import Project from './Project';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toogleSideBar } from '../redux/actions/actions';
import '../css/sideBar.css';
import { useTranslation } from 'react-i18next';





export default function SideBar({ locale }) {

  const { sideBarStatus } = useSelector(state => state.tasks);
  const history = useHistory();
  const dispatch = useDispatch();


  function goToAddProject() {
    dispatch(toogleSideBar());
    history.push('/dashboard/addTask');
  }

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
    //eslint-disable-next-line
  }, [locale]);

  return (
    <div className={`sidebar ${sideBarStatus && 'open'}`}>
      <div className='logo-container'>
        <img src={addLogo} alt="add-logo" className='add-logo' />
        <p onClick={goToAddProject}  >{t("addProject")} </p>
      </div>
      <div className='side-projects' >
        <h4>{t("Projects")}</h4>
        <Project lang={locale} />
      </div>
    </div>
  );
}
