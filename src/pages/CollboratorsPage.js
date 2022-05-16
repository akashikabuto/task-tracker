import { useEffect } from "react";
import DashNavBar from "../components/DashNavBar";
import CollaboratorSideBar from "../components/CollaboratorSideBar";
import '../css/CollaboratorsPage.css';
import Contributor from "../components/Contributor";
import { useParams, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, fetchContributors, UserProfile } from "../redux/actions/actions";
import { useTranslation } from "react-i18next";


export default function CollboratorsPage({ token, locale }) {

  const { id: projectId, name: projectName } = useParams();
  const payload = jwt_decode(token);
  const history = useHistory();
  const dispatch = useDispatch();
  const { allUsers, allContributors, User } = useSelector(state => state.tasks);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    dispatch(fetchUsers(token, locale, history));
    dispatch(fetchContributors(token, locale, history, projectId));
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(UserProfile(history, token, locale, payload.id));
    //eslint-disable-next-line
  }, [User]);

  useEffect(() => {
    i18n.changeLanguage(locale);
    //eslint-disable-next-line
  }, [locale]);


  return (
    <div className="whole" >
      <DashNavBar token={token} locale={locale} User={User} />
      <div className="collaborators-container" >
        <CollaboratorSideBar contributors={allContributors} t={t} />
        <div className="main" >
          <Contributor
            userId={payload.id}
            users={allUsers}
            Contributor={allContributors}
            projectId={projectId}
            projectName={projectName}
            locale={locale}
            t={t}
          />
        </div>
      </div>
    </div>
  );
}
