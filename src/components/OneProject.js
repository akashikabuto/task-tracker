import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { viewOneProject } from "../redux/actions/actions";
import ProjectCards from "./ProjectCards";
import ProjectChart from "./ProjectChart";
import ProjectDetails from "./ProjectDetails";

export default function OneProject() {

  const token = localStorage.getItem('token');
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  const { oneProject } = useSelector(state => state.tasks);
  console.log('oneProject', oneProject);

  useEffect(() => {
    if (!token) {
      history.push('/login');
    }
    else {
      dispatch(viewOneProject(token, id));
    }
    //eslint-disable-next-line
  }, [id]);


  return (
    <div>
      <ProjectCards />
      <div>
        {oneProject.map(({ id, project_name }) => {
          return <ProjectDetails id={id} projectName={project_name} />;
        })}
      </div>
      <div className="project-status" >
        <p>Status :</p>
        <p className="progress" >In progress</p>
      </div>
      <div className="chart" >
        <ProjectChart />
      </div>
    </div>
  );
}
