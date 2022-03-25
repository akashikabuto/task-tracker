import SideBar from "../components/SideBar";
import DashNavBar from "../components/DashNavBar";
import CardBar from "../components/CardBar";
import '../css/dashboard.css';
import DashboardChart from "../components/DashboardChart";




export default function Dashboard() {

  return (
    <div className="dashboard" >
      <DashNavBar />
      <div className="dashboard-container" >
        <SideBar />
        <div className="main" >
          <CardBar />
          <div className="dashBord-chart" >
            <DashboardChart />
          </div>
        </div>
      </div>
    </div>
  );
}
