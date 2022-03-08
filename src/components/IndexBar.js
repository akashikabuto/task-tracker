import logo from '../images/productivity.png';
import { useHistory } from 'react-router-dom';

function IndexBar() {

  const history = useHistory();

  function goToLogin() {
    history.push('/Login');
  }

  return (
    <div className='index-bar' >
      <div className='index-logo-bar' >
        <img src={logo} alt="logo" className='nav-logo' />
        <p className='index-tilte' >Tracker</p>
      </div>
      <div className='index-bar-buttons' >
        <button className='index-login-button' onClick={() => goToLogin()}  >Login</button>
        <button className='index-sign-up-button' >Sign up</button>
      </div>
    </div>
  );
}

export default IndexBar;