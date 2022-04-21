import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toogleSideBar } from '../redux/actions/actions';
import '../css/taskContainer.css';

export default function AllTasks({ id, name }) {

  const history = useHistory();
  const dispatch = useDispatch();

  function navigateToTaskaddTask(id, projectName) {
    dispatch(toogleSideBar());
    history.push(`/dashboard/project/${id}/${projectName}`);
  }
  return (
    <div key={id} className="task-container"  >
      <p onClick={() => navigateToTaskaddTask(id, name)}>{name} </p>
    </div>
  );
}
