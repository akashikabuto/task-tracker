import { useEffect } from 'react';
import userLogo from '../images/user.png';
import { NavLink } from 'react-router-dom';
import '../css/dashNav.css';
import { FaBars } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { toogleSideBar } from '../redux/actions/actions';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Switcher from './Switcher';



export default function DashNavBar() {

  const { t, i18n } = useTranslation();
  const locale = localStorage.getItem("lang") || "eng";
  const history = useHistory();

  useEffect(() => {
    i18n.changeLanguage(locale);
    //eslint-disable-next-line
  }, [locale]);

  function logOut() {
    localStorage.removeItem("token");
    history.push('/login');
  }

  const dispatch = useDispatch();
  const toogleSideBarState = () => dispatch(toogleSideBar());
  return (
    <div className='dash-nav'>
      <div className='dash-left-link' >
        <FaBars className='menu-logo' onClick={toogleSideBarState} />
        <NavLink
          to="/dashboard"
          className='dash-nav-bar-logo-text'
        >
          Tracker
        </NavLink>
      </div>
      <div className='dash-nav-links'>
        <p>Akashi</p>
        <p><img src={userLogo} alt="userLogo" className='dashboard-photo' /></p>
        <p onClick={logOut} >{t("Log_out")}</p>
        <Switcher />
      </div>
    </div>
  );
}
