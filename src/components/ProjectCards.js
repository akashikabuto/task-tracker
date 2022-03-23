import { useEffect } from 'react';
import { FaUsers } from 'react-icons/fa';
import { FaRocketchat } from 'react-icons/fa';
import { FaTasks } from 'react-icons/fa';
import '../css/projectCard.css';
import { useTranslation } from 'react-i18next';

export default function ProjectCards() {

  const { t, i18n } = useTranslation();
  const locale = localStorage.getItem("lang") || "eng";

  useEffect(() => {
    i18n.changeLanguage(locale);
    //eslint-disable-next-line
  }, [locale]);

  return (
    <div className='project-cards' >
      <div className='project-card' >
        <FaUsers className="cards-image" />
        <p> 8 {t("Collaborators")}</p>
      </div>
      <div className='project-card' >
        <FaRocketchat className="cards-image" />
        <p>{t("Chat room")}</p>
      </div>
      <div className='project-card'>
        <FaTasks className="cards-image" />
        <p>6 {t("Tasks")}</p>
      </div>
    </div>
  );
}
