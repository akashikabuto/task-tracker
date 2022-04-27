import { useEffect } from "react";
import DashNavBar from "../components/DashNavBar";
import CollaboratorSideBar from "../components/CollaboratorSideBar";
import '../css/CollaboratorsPage.css';
import Contributor from "../components/Contributor";
import { useParams, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, fetchContributors, UserProfile } from "../redux/actions/actions";


export default function CollboratorsPage({ token, locale }) {

  const { id: projectId, name: projectName } = useParams();
  const payload = jwt_decode(token);
  const history = useHistory();
  const dispatch = useDispatch();
  const { allUsers, allContributors, User } = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchUsers(token, locale, history));
    dispatch(fetchContributors(token, locale, history, projectId));
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(UserProfile(history, token, locale, payload.id));
    //eslint-disable-next-line
  }, [User]);


  return (
    <div className="whole" >
      <DashNavBar token={token} locale={locale} User={User} />
      <div className="collaborators-container" >
        <CollaboratorSideBar contributors={allContributors} />
        <div className="main" >
          <Contributor userId={payload.id} users={allUsers} Contributor={allContributors} projectId={projectId} projectName={projectName} />
        </div>
      </div>
    </div>
  );
}
