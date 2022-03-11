import Input from './Input';
import logo from '../images/productivity.png';
import google from '../images/google.png';
import { useHistory } from 'react-router-dom';

export default function LoginBody() {

  const history = useHistory();

  return (
    <>
      <div className='login-image-container' >
        <img src={logo} alt="logo" className='nav-logo' />
        <p className='index-tilte' >Tracker</p>
      </div>
      <div className='login-form-container' >
        <p className='tracker-t' >Log in to tracker</p>
        <form>
          <Input placeholder='Email' type="email" />
          <Input placeholder="Password" type="password" />
          <button className='login-button' >Login</button>
        </form>
        <p className='login-not-account'>Forgot password?</p>
        <br />
        <p>or</p>
        <br />
        <div className='google-login' >
          <img src={google} alt="google" className='google-img' />
          <p className='login-google-text' >Login with google</p>
        </div>
        <div className='login-line' >
        </div>
        <div>
          <p className='login-not-account' onClick={() => history.push('/signup')}  >Do not have account?</p>
        </div>
      </div>
    </>
  );
}
