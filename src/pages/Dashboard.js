import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import SideBar from "../components/SideBar";
import DashNavBar from "../components/DashNavBar";
import CardBar from "../components/CardBar";



export default function Dashboard() {
  const token = localStorage.getItem('token');
  const history = useHistory();

  useEffect(() => {
    if (!token) {
      history.push('/login');
    }
    //eslint-disable-next-line
  }, [token]);
  return (
    <div className="dashboard" >
      <DashNavBar />
      <div className="dashboard-container" >
        <SideBar />
        <div className="main" >
          <CardBar />
        </div>
      </div>
    </div>
  );
}
