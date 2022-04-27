import { useEffect } from "react";
import NewEntry from "../components/NewEntry";
import DashNavBar from "../components/DashNavBar";
import '../css/newTask.css';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { UserProfile } from "../redux/actions/actions";

export default function NewTask({ token, locale }) {

  const { id } = useParams();

  const dispatch = useDispatch();
  const payload = jwtDecode(token);
  const history = useHistory();

  const { User } = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(UserProfile(history, token, locale, payload.id));
    //eslint-disable-next-line
  }, [User]);

  return (
    <div className="new-task-container" >
      <DashNavBar token={token} locale={locale} User={User} />
      <div className="entry" >
        <NewEntry projectId={id} />
      </div>
    </div>
  );
}
