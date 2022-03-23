import { useEffect } from 'react';
import userLogo from '../images/user.png';
import { NavLink } from 'react-router-dom';
import '../css/dashNav.css';
import { FaBars } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { toogleSideBar } from '../redux/actions/actions';
import { useTranslation } from 'react-i18next';



export default function DashNavBar() {

  const { t, i18n } = useTranslation();
  const locale = localStorage.getItem("lang") || "eng";

  useEffect(() => {
    i18n.changeLanguage(locale);
    //eslint-disable-next-line
  }, [locale]);

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
        <p>{t("Log_out")}</p>
      </div>
    </div>
  );
}
