import { useEffect } from "react";
import DashNavBar from "../components/DashNavBar";
import CollaboratorSideBar from "../components/CollaboratorSideBar";
import '../css/CollaboratorsPage.css';
import Contributor from "../components/Contributor";
import { useParams, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, fetchContributors } from "../redux/actions/actions";


export default function CollboratorsPage() {

  const { id: projectId, name: projectName } = useParams();
  const payload = jwt_decode(localStorage.getItem('token'));
  const history = useHistory();
  const dispatch = useDispatch();
  const { allUsers, allContributors } = useSelector(state => state.tasks);
  const locale = localStorage.getItem("lang") || "eng";
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(fetchUsers(token, locale, history));
    dispatch(fetchContributors(token, locale, history, projectId));
    //eslint-disable-next-line
  }, []);


  return (
    <div className="whole" >
      <DashNavBar />
      <div className="collaborators-container" >
        <CollaboratorSideBar contributors={allContributors} />
        <div className="main" >
          <Contributor userId={payload.id} users={allUsers} Contributor={allContributors} projectId={projectId} projectName={projectName} />
        </div>
      </div>
    </div>
  );
}
