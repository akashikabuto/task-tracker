import DashNavBar from '../components/DashNavBar';
import ProfileComponent from '../components/ProfileComponent';
import '../css/Profile.css';

export default function Profile({ token, locale }) {
  return (
    <div className='profile' >
      <DashNavBar token={token} locale={locale} />
      <ProfileComponent token={token} locale={locale} />
    </div>
  );
}
