import DashNavBar from "../components/DashNavBar";
import CollaboratorSideBar from "../components/CollaboratorSideBar";
import '../css/CollaboratorsPage.css';
import Contributor from "../components/Contributor";

export default function CollboratorsPage() {
  return (
    <div className="whole" >
      <DashNavBar />
      <div className="collaborators-container" >
        <CollaboratorSideBar />
        <div className="main" >
          <Contributor />
        </div>
      </div>
    </div>
  );
}
