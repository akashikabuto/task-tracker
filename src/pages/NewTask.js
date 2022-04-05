import NewEntry from "../components/NewEntry";
import DashNavBar from "../components/DashNavBar";
import '../css/newTask.css';

export default function NewTask() {
  return (
    <div className="container" >
      <DashNavBar />
      <div className="entry" >
        <NewEntry />
      </div>
    </div>
  );
}
