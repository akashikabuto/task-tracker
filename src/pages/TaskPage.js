import { useEffect } from "react";
import DashNavBar from "../components/DashNavBar";
import { useTranslation } from 'react-i18next';
import '../css/taskPage.css';
import TaskCard from "../components/TaskCard";
import TargetCard from "../components/TargetCard";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { seeAllTasks, UserProfile } from "../redux/actions/actions";
import jwtDecode from "jwt-decode";


export default function TaskPage({ token, locale }) {


  const { allTasks, User } = useSelector(state => state.tasks);
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const payload = jwtDecode(token);

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

  useEffect(() => {
    dispatch(UserProfile(history, token, locale, payload.id));
    //eslint-disable-next-line
  }, [User]);

  return (
    <div className="taskpage" >
      <DashNavBar token={token} locale={locale} User={User} />
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
