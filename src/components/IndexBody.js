import { useTranslation } from 'react-i18next';
import card from '../images/—Pngtree—team work web concept people_5335944.png';
import '../css/indexBody.css';


function IndexBody() {

  const { t } = useTranslation();

  return (
    <div className='index-body-container' >
      <div className='left-bar' >
        <div className='welcome-container' >
          <h3 className='welcome-container-title' >Tracker</h3>
          <p className='welcome-container-para' >{t("sloganText")} </p>
          <div className='form-container' >
            <input placeholder='Email' className='container-input' />
            <button className='container-button' > {t("signUpButtonText")} </button>
          </div>
        </div>
      </div>
      <div className='right-bar' >
        <img src={card} alt="card" className='card' />
      </div>
    </div>
  );
}

export default IndexBody;