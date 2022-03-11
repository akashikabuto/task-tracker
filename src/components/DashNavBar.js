import userLogo from '../images/user.png';


export default function DashNavBar() {
  return (
    <div className='dash-nav'>
      <h3>Tracker</h3>
      <div className='dash-nav-links'>
        <p>Akashi</p>
        <p><img src={userLogo} alt="userLogo" className='dashboard-photo' /></p>
        <p>Log out</p>
      </div>
    </div>
  );
}
