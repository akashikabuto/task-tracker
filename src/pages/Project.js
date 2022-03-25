import SideBar from "../components/SideBar";
import DashNavBar from "../components/DashNavBar";
import OneProject from "../components/OneProject";

export default function Project() {

  return (
    <div className="dashboard" >
      <DashNavBar />
      <div className="dashboard-container" >
        <SideBar />
        <div className="main" >
          <OneProject />
        </div>
      </div>
    </div>
  );
}
