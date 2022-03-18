import { useState, useEffect } from 'react';
import Input from './Input';
import logo from '../images/productivity.png';
import google from '../images/google.png';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



export default function LoginBody() {

  let url = `http://localhost:7000`;

  const history = useHistory();

  const initialState = {
    email: "",
    password: "",
    message: ""
  };

  const { t, i18n } = useTranslation();

  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);

  function OnChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  async function login(e) {
    e.preventDefault();
    setLoading(true);
    console.log(state);
    try {
      const config = {
        method: "POST",
        headers: {
          'Content-type': "application/json",
        },
        body: JSON.stringify(state)
      };
      const res = await (await fetch(`${url}/api/auth/login`, config)).json();
      if (res.status === 200) {
        localStorage.setItem('token', res.token);
        history.push('/dashboard');
      }
      if (res.status === 203) {
        setLoading(false);
        setState({ ...state, message: res.message });
        setTimeout(() => {
          setState({ ...state, message: '' });
        }, 4000);
      }
      if (res.status === 205) {
        setLoading(false);
        setState({ ...state, message: res.message });
        setTimeout(() => {
          setState({ ...state, message: '' });
        }, 4000);
      }
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  }

  const locale = localStorage.getItem("lang") || "eng";

  useEffect(() => {
    i18n.changeLanguage(locale);
    //eslint-disable-next-line
  }, [locale]);

  console.log("locale", locale);

  return (
    <>
      <div className='login-image-container' >
        <img src={logo} alt="logo" className='nav-logo' onClick={() => history.push('/')} />
        <p className='index-tilte' onClick={() => history.push('/')} >Tracker</p>
      </div>
      <div className='login-form-container' >
        <p className='tracker-t' >{t("LoginTrackerText")} </p>
        {state.message ? <p style={{ color: "red" }} > {state.message} </p> : ""}
        <form onSubmit={login} >
          <Input placeholder='Email' type="email" handleOnchange={OnChange} name="email" />
          <Input placeholder="Password" type="password" handleOnchange={OnChange} name="password" />
          {loading ? <button className='login-button' disabled >{t("Loading....")}</button> :
            <button className='login-button' >{t("loginText")}</button>}
        </form>
        <p className='login-not-account'>Forgot password?</p>
        <br />
        <p>or</p>
        <br />
        <div className='google-login' >
          <img src={google} alt="google" className='google-img' />
          <p className='login-google-text' > {t("Login with google")} </p>
        </div>
        <div className='login-line' >
        </div>
        <div>
          <p className='login-not-account' onClick={() => history.push('/signup')}> {t("Do not have account?")} </p>
        </div>
      </div>
    </>
  );
}
