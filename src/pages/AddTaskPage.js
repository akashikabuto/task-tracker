import SideBar from "../components/SideBar";
import DashNavBar from "../components/DashNavBar";
import AddTask from "../components/AddTask";

export default function AddTaskPage({ token, locale }) {
  return (
    <div className="dashboard" >
      <DashNavBar token={token} locale={locale} />
      <div className="dashboard-container" >
        <SideBar locale={locale} />
        <div className="main" >
          <AddTask />
        </div>
      </div>
    </div>
  );
}
