import NewEntry from "../components/NewEntry";
import DashNavBar from "../components/DashNavBar";
import '../css/newTask.css';
import { useParams } from "react-router-dom";

export default function NewTask() {

  const { id } = useParams();

  return (
    <div className="new-task-container" >
      <DashNavBar />
      <div className="entry" >
        <NewEntry projectId={id} />
      </div>
    </div>
  );
}
