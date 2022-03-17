import userLogo from '../images/user.png';
import { NavLink } from 'react-router-dom';


export default function DashNavBar() {
  return (
    <div className='dash-nav'>
      <NavLink
        to="/dashboard"
        className='dash-nav-bar-logo-text'
      >
        Tracker
      </NavLink>
      <div className='dash-nav-links'>
        <p>Akashi</p>
        <p><img src={userLogo} alt="userLogo" className='dashboard-photo' /></p>
        <p>Log out</p>
      </div>
    </div>
  );
}
