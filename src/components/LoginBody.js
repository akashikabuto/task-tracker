import logo from '../images/productivity.png';
import google from '../images/google.png';

export default function LoginBody() {
  return (
    <>
      <div className='login-image-container' >
        <img src={logo} alt="logo" className='nav-logo' />
        <p className='index-tilte' >Tracker</p>
      </div>
      <div className='login-form-container' >
        <p className='tracker-t' >Log in to tracker</p>
        <form>
          <input placeholder='Email' className='login-input' />
          <input placeholder='password' className='login-input' />
          <button className='login-button' >Login</button>
        </form>
        <p className='login-not-account'>Forgot password?</p>
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
          <p className='login-not-account' >Do not have account?</p>
        </div>
      </div>

    </>
  );
}
