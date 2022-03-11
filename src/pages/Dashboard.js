import SideBar from "../components/SideBar";
import DashNavBar from "../components/DashNavBar";
import Tasks from "../components/Tasks";

export default function Dashboard() {
  return (
    <div className="dashboard" >
      <DashNavBar />
      <div className="dashboard-container" >
        <SideBar />
        <Tasks />
      </div>
    </div>
  );
}
