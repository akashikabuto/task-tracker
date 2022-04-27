import { useEffect } from 'react';
import SideBar from "../components/SideBar";
import DashNavBar from "../components/DashNavBar";
import AddTask from "../components/AddTask";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { UserProfile } from "../redux/actions/actions";

export default function AddTaskPage({ token, locale }) {

  const dispatch = useDispatch();
  const payload = jwtDecode(token);
  const history = useHistory();

  const { User } = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(UserProfile(history, token, locale, payload.id));
    //eslint-disable-next-line
  }, [User]);

  return (
    <div className="dashboard" >
      <DashNavBar token={token} locale={locale} User={User} />
      <div className="dashboard-container" >
        <SideBar locale={locale} />
        <div className="main" >
          <AddTask />
        </div>
      </div>
    </div>
  );
}
