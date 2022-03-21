import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toogleSideBar } from '../redux/actions/actions';

export default function AllTasks({ id, name }) {

  const history = useHistory();
  const dispatch = useDispatch();

  function navigateToTaskaddTask(id) {
    dispatch(toogleSideBar());
    history.push(`/dashboard/project/${id}`);
  }
  return (
    <div key={id} className="task-container"  >
      <p onClick={() => navigateToTaskaddTask(id)}>{name} </p>
    </div>
  );
}
