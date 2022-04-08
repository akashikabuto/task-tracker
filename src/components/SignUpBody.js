import { useState, useEffect } from 'react';
import logo from '../images/productivity.png';
import google from '../images/google.png';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Input from './Input';
import '../css/loginBody.css';
import * as yup from 'yup';

export default function SignUpBody() {


  let url = `https://mern-learning-task-tracker.herokuapp.com`;

  const history = useHistory();

  const locale = localStorage.getItem("lang") || "en";

  const initialState = {
    email: "",
    username: "",
    fullName: "",
    phone: "",
    password: ""
  };

  const Error = {
    email: "",
    username: "",
    fullName: "",
    phone: "",
    password: ""
  };


  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState(Error);

  const signUpSchema = yup.object({
    email: yup.string().email().required().typeError(`${t('Email must be valid')}`),
    username: yup.string().required().min(5).typeError(`${t('Username is required')}`),
    fullName: yup.string().required().matches(/^[A-Za-z]/, `${t('FullNames must be letters only')}`),
    phone: yup.string().required().matches(/^((250))[0-9]+$/, `${t('Phone must be a rwandan one')}`),
    password: yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
      `${t("passwordError")}`)
  });

  function OnChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  async function fetchApi() {
    setLoading(true);
    const config = {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'accept-language': `${locale}`
      },
      body: JSON.stringify(state)
    };
    try {
      const res = await (await fetch(`${url}/api/user/signup`, config)).json();
      if (res.status === 201) {
        setLoading(false);
        history.push('/login');
      }
      else if (res.status === 409) {
        setLoading(false);
        setError(res.error);
        // setTimeout(() => {
        //   setError('');
        // }, 9000);
      }
      else if (res.status === 422) {
        setLoading(false);
        setError(res.error);
        // setTimeout(() => {
        //   setError('');
        // }, 9000);
      }
      else if (res.status === 500) {
        setLoading(false);
        window.alert('Server down');
      }

    } catch (error) {
      setLoading(false);
      window.alert('Error connecting to server');
    }
  }

  async function handleSignUp(e) {
    e.preventDefault();
    const validate = await signUpSchema.validate(state)
      .then(() => { return true; })
      .catch(err => { setErrors({ ...errors, [err.path]: err.message }); return false; });
    if (validate) {
      fetchApi();
    }
  }

  useEffect(() => {
    i18n.changeLanguage(locale);
    //eslint-disable-next-line
  }, [locale]);

  return (
    <>
      <div className='login-image-container' >
        <img src={logo} alt="logo" className='nav-logo' onClick={() => history.push('/')} />
        <p className='index-tilte' onClick={() => history.push('/')} >Tracker</p>
      </div>
      <div className='login-form-container' >
        <p className='tracker-t' > {t("Register to tracker")} </p>
        {error ? <div className='Error' > {error} </div> : ""}
        <form id='sign-up-form' onSubmit={handleSignUp}  >
          <Input placeholder='Email' type="email" handleOnchange={OnChange} name="email" error={errors.email} />
          <Input placeholder="Username" type="text" handleOnchange={OnChange} name="username" error={errors.username} />
          <Input placeholder="Full name" type="text" handleOnchange={OnChange} name="fullName" error={errors.fullName} />
          <Input placeholder="Phone" type="text" handleOnchange={OnChange} name="phone" error={errors.phone} />
          <Input placeholder="Password" type="password" handleOnchange={OnChange} name="password" error={errors.password} />
          <button className='login-button' disabled={loading ? true : false} >
            {loading ? (`${t("loading")}`) : (`${t("Register")}`)}
          </button>
        </form>
        <br />
        <p>or</p>
        <br />
        <div className='google-login' >
          <img src={google} alt="google" className='google-img' />
          <p className='login-google-text' >{t("Sign up with google")}</p>
        </div>
        <div className='login-line' ></div>
        <div>
          <p className='login-not-account' onClick={() => history.push('/login')}> {t("Have account?")} </p>
        </div>
      </div>
    </>
  );
}
