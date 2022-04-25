import SideBar from "../components/SideBar";
import DashNavBar from "../components/DashNavBar";
import OneProject from "../components/OneProject";
import { useParams } from "react-router-dom";

export default function Project({ token, locale }) {

  const { name: projectName } = useParams();

  return (
    <div className="dashboard" >
      <DashNavBar token={token} locale={locale} />
      <div className="dashboard-container" >
        <SideBar />
        <div className="main" >
          <OneProject projectName={projectName} />
        </div>
      </div>
    </div>
  );
}
