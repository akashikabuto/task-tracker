import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import '../css/cardBar.css';

export default function CardBar() {

  const locale = localStorage.getItem("lang") || "eng";
  const { projects } = useSelector(state => state.tasks);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
    //eslint-disable-next-line
  }, [locale]);


  return (
    <>
      <div className='stats' >
        <h3>{t("project_stats")}</h3>
      </div>
      <div className='cards-container' >
        <div className='cards' >
          <div> {projects.length} </div>
          <div>{t("Projects")}</div>
        </div>
        <div className='cards'>
          <div>8</div>
          <div>contributions</div>
        </div>
        <div className='cards' >
          <div>8</div>
          <div>{t("completed")}</div>
        </div>
      </div>
    </>
  );
}
