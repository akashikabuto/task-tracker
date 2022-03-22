import userLogo from '../images/user.png';
import { NavLink } from 'react-router-dom';
import '../css/dashNav.css';
import { FaBars } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { toogleSideBar } from '../redux/actions/actions';



export default function DashNavBar() {


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
        <p>Log out</p>
      </div>
    </div>
  );
}
