import { useEffect } from 'react';
import DashNavBar from '../components/DashNavBar';
import ProfileComponent from '../components/ProfileComponent';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { UserProfile } from "../redux/actions/actions";
import '../css/Profile.css';

export default function Profile({ token, locale }) {

  const dispatch = useDispatch();
  const payload = jwtDecode(token);
  const history = useHistory();

  const { User } = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(UserProfile(history, token, locale, payload.id));
    //eslint-disable-next-line
  }, [User]);

  return (
    <div className='profile' >
      <DashNavBar token={token} locale={locale} User={User} />
      <ProfileComponent token={token} locale={locale} User={User} />
    </div>
  );
}
