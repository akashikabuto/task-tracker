import { useEffect } from "react";
import SideBar from "../components/SideBar";
import DashNavBar from "../components/DashNavBar";
import OneProject from "../components/OneProject";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { UserProfile } from "../redux/actions/actions";

export default function Project({ token, locale }) {

  const { name: projectName } = useParams();
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
        <SideBar />
        <div className="main" >
          <OneProject projectName={projectName} />
        </div>
      </div>
    </div>
  );
}
