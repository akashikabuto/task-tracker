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
import jwt_decode from "jwt-decode";





export default function DashNavBar({ token, locale, User }) {

  const { t, i18n } = useTranslation();
  const history = useHistory();
  const payload = jwt_decode(token);
  const dispatch = useDispatch();

  useEffect(() => {
    i18n.changeLanguage(locale);
    //eslint-disable-next-line
  }, [locale]);



  function logOut() {
    localStorage.removeItem("token");
    history.push('/login');
  }

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
        <p onClick={() => history.push('/dashboard/profile')} >{payload.username}</p>
        <p><img src={User.image === undefined || '' ? userLogo : User.image} alt="userLogo" className='dashboard-photo' /></p>
        <p onClick={logOut} >{t("Log_out")}</p>
        <Switcher />
      </div>
    </div>
  );
}
