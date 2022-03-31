import { useEffect } from "react";
import DashNavBar from "../components/DashNavBar";
import { useTranslation } from 'react-i18next';
import '../css/taskPage.css';
import TaskCard from "../components/TaskCard";
import TargetCard from "../components/TargetCard";
import { useSelector } from "react-redux";


export default function TaskPage() {

  const locale = localStorage.getItem("lang") || "eng";

  const { projectTasks } = useSelector(state => state.tasks);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
    //eslint-disable-next-line
  }, [locale]);


  useEffect(() => {
    console.log('tasks', projectTasks);
  }, [projectTasks]);


  return (
    <div>
      <DashNavBar />
      <div className="button-wrapper" >
        <button className="add-button" >{t("AddTask")}</button>
      </div>
      <div className="container" >
        <div className="open-container" >
          <div className="open-container-title" >
            <h1>{t("OpenTasks")}</h1>
          </div>
          <div className="tasks" >
            {projectTasks
              .filter(item => item.status === 'open')
              .map(({ id, status, title, content, icon }) =>
                <TaskCard key={id}
                  status={status}
                  id={id}
                  title={title}
                  content={content}
                  icon={icon}
                />
              )
            }
          </div>

        </div>
        <div className="done-container" >
          <div className="open-container-title" >
            <h1>{t("DoneTasks")}</h1>
          </div>

          <TargetCard>
            {projectTasks
              .filter(item => item.status === 'done')
              .map(({ id, status, title, content, icon }) =>
                <TaskCard key={id}
                  status={status}
                  title={title}
                  id={id}
                  content={content}
                  icon={icon}
                />
              )
            }
          </TargetCard>
        </div>
      </div>
    </div>
  );
}
