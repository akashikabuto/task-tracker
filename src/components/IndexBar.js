import logo from '../images/productivity.png';

function IndexBar() {
  return (
    <div className='index-bar' >
      <div className='index-logo-bar' >
        <img src={logo} alt="logo" className='nav-logo' />
        <p className='index-tilte' >Tracker</p>
      </div>
      <div className='index-bar-buttons' >
        <button className='login-button' >Login</button>
        <button className='sign-up-button' >Sign up</button>
      </div>
    </div>
  );
}

export default IndexBar;