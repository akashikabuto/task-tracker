import { useEffect } from 'react';
import { FaUsers } from 'react-icons/fa';
import { FaRocketchat } from 'react-icons/fa';
import { FaTasks } from 'react-icons/fa';
import '../css/projectCard.css';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

export default function ProjectCards({ projectId, projectName }) {

  const { t, i18n } = useTranslation();
  const locale = localStorage.getItem("lang") || "eng";
  const history = useHistory();

  useEffect(() => {
    i18n.changeLanguage(locale);
    //eslint-disable-next-line
  }, [locale]);

  function goToChatRoom() {
    history.push(`/dashboard/chat/${projectId}`);
  }

  function goToCollaborators() {
    history.push(`/dashboard/collaborators/${projectId}/${projectName}`);
  }

  function goToTasks() {
    history.push(`/dashboard/tasks/${projectId}`);
  }


  return (
    <div className='project-cards' >
      <div className='project-card' onClick={goToCollaborators} >
        <FaUsers className="cards-image" />
        <p> 8 {t("Collaborators")}</p>
      </div>
      <div className='project-card' onClick={goToChatRoom} >
        <FaRocketchat className="cards-image" />
        <p>{t("Chat room")}</p>
      </div>
      <div className='project-card' onClick={goToTasks} >
        <FaTasks className="cards-image" />
        <p>6 {t("Tasks")}</p>
      </div>
    </div>
  );
}
