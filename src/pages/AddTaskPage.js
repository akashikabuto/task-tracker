import SideBar from "../components/SideBar";
import DashNavBar from "../components/DashNavBar";
import AddTask from "../components/AddTask";

export default function AddTaskPage() {
  return (
    <div className="dashboard" >
      <DashNavBar />
      <div className="dashboard-container" >
        <SideBar />
        <div className="main" >
          <AddTask />
        </div>
      </div>
    </div>
  );
}
