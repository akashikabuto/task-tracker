import logo from '../images/productivity.png';
import google from '../images/google.png';
import { useHistory } from 'react-router-dom';

export default function SignUpBody() {

  const history = useHistory();


  return (
    <>
      <div className='login-image-container' >
        <img src={logo} alt="logo" className='nav-logo' />
        <p className='index-tilte' >Tracker</p>
      </div>
      <div className='login-form-container' >
        <p className='tracker-t' >Register to tracker</p>
        <form>
          <input placeholder='Email' className='login-input' />
          <input placeholder='Username' className='login-input' />
          <input placeholder='Full name' className='login-input' />
          <input placeholder='Phone' className='login-input' />
          <button className='login-button' >Register</button>
        </form>
        <br />
        <p>or</p>
        <br />
        <div className='google-login' >
          <img src={google} alt="google" className='google-img' />
          <p className='login-google-text' >Continue with google</p>
        </div>
        <div className='login-line' >
        </div>
        <div>
          <p className='login-not-account' onClick={() => history.push('/login')}  >Have account?</p>
        </div>
      </div>
    </>
  );
}
