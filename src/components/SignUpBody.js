import { useState } from 'react';
import logo from '../images/productivity.png';
import google from '../images/google.png';
import { useHistory } from 'react-router-dom';
import Input from './Input';

export default function SignUpBody() {


  let url = `http://localhost:3000`;

  const history = useHistory();

  const initialState = {
    email: "",
    username: "",
    fullName: "",
    phone: "",
    password: ""
  };

  const [state, setState] = useState(initialState);

  function OnChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  async function handleSignUp(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(state)
    };
    try {
      const res = await (await fetch(`${url}/users`, config)).json();
      console.log('res', res);
    } catch (error) {
      console.log("error", error);
    }

  }

  return (
    <>
      <div className='login-image-container' >
        <img src={logo} alt="logo" className='nav-logo' />
        <p className='index-tilte' >Tracker</p>
      </div>
      <div className='login-form-container' >
        <p className='tracker-t' >Register to tracker</p>
        <form id='sign-up-form' onSubmit={handleSignUp}  >
          <Input placeholder='Email' type="email" handleOnchange={OnChange} name="email" />
          <Input placeholder="Username" type="text" handleOnchange={OnChange} name="username" />
          <Input placeholder="Full name" type="text" handleOnchange={OnChange} name="fullName" />
          <Input placeholder="Phone" type="text" handleOnchange={OnChange} name="phone" />
          <Input placeholder="Password" type="password" handleOnchange={OnChange} name="password" />
          <button className='login-button' >Register</button>
        </form>
        <br />
        <p>or</p>
        <br />
        <div className='google-login' >
          <img src={google} alt="google" className='google-img' />
          <p className='login-google-text' >Sign up with google</p>
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