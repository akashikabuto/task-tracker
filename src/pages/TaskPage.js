import { useEffect } from "react";
import DashNavBar from "../components/DashNavBar";
import { useTranslation } from 'react-i18next';
import '../css/taskPage.css';
import TaskCard from "../components/TaskCard";
import TargetCard from "../components/TargetCard";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { seeAllTasks } from "../redux/actions/actions";


export default function TaskPage() {

  const locale = localStorage.getItem("lang") || "eng";
  const { allTasks } = useSelector(state => state.tasks);
  const token = localStorage.getItem("token");
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    i18n.changeLanguage(locale);
    //eslint-disable-next-line
  }, [locale]);

  useEffect(() => {
    dispatch(seeAllTasks(token, locale, history, id));
    //eslint-disable-next-line
  }, []);

  function goToAddTasks() {
    history.push(`/dashboard/newTask/${id}`);
  }

  return (
    <div className="taskpage" >
      <DashNavBar />
      <div className="button-wrapper" >
        <button className="add-button" onClick={goToAddTasks}  >{t("AddTask")}</button>
      </div>
      <div className="container" >
        <div className="open-container" >
          <div className="open-container-title" >
            <h1>{t("OpenTasks")}</h1>
          </div>
          <TargetCard>
            {allTasks
              .filter(item => item.status === 'open')
              .map(({ _id, status, taskName }) =>
                <TaskCard key={_id}
                  status={status}
                  id={_id}
                  title={taskName}
                />
              )
            }
          </TargetCard>
        </div>
        <div className="done-container" >
          <div className="open-container-title" >
            <h1>{t("DoneTasks")}</h1>
          </div>
          <TargetCard>
            {allTasks
              .filter(item => item.status === 'done')
              .map(({ _id, status, taskName }) =>
                <TaskCard key={_id}
                  status={status}
                  title={taskName}
                  id={_id}
                />
              )
            }
          </TargetCard>
        </div>
      </div>
    </div>
  );
}
