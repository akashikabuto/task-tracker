import logo from '../images/productivity.png';
import { useHistory } from 'react-router-dom';
import Switcher from './Switcher';

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
      <Switcher />
      <div className='index-bar-buttons' >
        <button className='index-login-button' onClick={() => goToLogin()}  >Login</button>
        <button className='index-sign-up-button' onClick={() => history.push('/signup')}  >Sign up</button>
      </div>
    </div>
  );
}

export default IndexBar;