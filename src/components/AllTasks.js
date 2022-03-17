import { NavLink } from "react-router-dom";


export default function AllTasks({ id, name }) {

  return (
    <div key={id} className="task-container"  >
      <NavLink
        to={`/dashboard/project/${id}`}
        className="project-link"
      >
        <p>{name} </p>
      </NavLink>
    </div>
  );
}
