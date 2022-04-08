import { useState, useEffect } from 'react';
import Input from './Input';
import logo from '../images/productivity.png';
import google from '../images/google.png';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../css/loginBody.css';
import * as yup from 'yup';



export default function LoginBody() {

  let url = `https://mern-learning-task-tracker.herokuapp.com`;

  const history = useHistory();

  const initialState = {
    account: "",
    password: "",
  };

  const Error = {
    account: "",
    password: ""
  };

  const { t, i18n } = useTranslation();
  const [error, setError] = useState('');
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(Error);

  const locale = localStorage.getItem("lang") || "eng";

  useEffect(() => {
    i18n.changeLanguage(locale);
    //eslint-disable-next-line
  }, [locale]);


  function OnChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  async function login() {
    setLoading(true);
    try {
      const config = {
        method: "POST",
        headers: {
          'Content-type': "application/json",
          'accept-language': `${locale}`
        },
        body: JSON.stringify(state)
      };
      const res = await (await fetch(`${url}/api/user/login`, config)).json();
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        history.push('/dashboard');
      }
      if (res.status === 400) {
        setLoading(false);
        setError(res.error);
      }
      if (res.status === 422) {
        setLoading(false);
        setError(res.error);
      }
      else if (res.status === 500) {
        setLoading(false);
        window.alert('Server down');
      }
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  }



  const signUpSchema = yup.object({
    account: yup.string().required().typeError(`${t('AccountIsRequired')}`),
    password: yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
      `${t("passwordError")}`)
  });


  async function handleLogin(e) {
    e.preventDefault();
    const validate = await signUpSchema.validate(state)
      .then(() => { return true; })
      .catch(err => { setErrors({ ...errors, [err.path]: err.message }); return false; });
    if (validate) {
      login();
    }
  }





  return (
    <>
      <div className='login-image-container' >
        <img src={logo} alt="logo" className='nav-logo' onClick={() => history.push('/')} />
        <p className='index-tilte' onClick={() => history.push('/')} >Tracker</p>
      </div>
      <div className='login-form-container' >
        <p className='tracker-t' >{t("LoginTrackerText")} </p>
        {error ? <div className='Error' > {error} </div> : ""}
        <form onSubmit={handleLogin} >
          <Input placeholder='Account' type="text" handleOnchange={OnChange} name="account" error={errors.account} />
          <Input placeholder="Password" type="password" handleOnchange={OnChange} name="password" error={errors.password} />
          <button className='login-button' disabled={loading ? true : false} >
            {loading ? (`${t("loading")}`) : (`${t("loginText")}`)}
          </button>
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
