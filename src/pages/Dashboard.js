import SideBar from "../components/SideBar";
import DashNavBar from "../components/DashNavBar";
import CardBar from "../components/CardBar";




export default function Dashboard() {

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
