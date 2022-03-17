import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { seeAllProjects } from '../redux/actions/actions';
import AllTasks from './AllTasks';




export default function Project() {
  const token = localStorage.getItem('token');
  const { projects } = useSelector(state => state.tasks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(seeAllProjects(token));
    //eslint-disable-next-line
  }, []);

  return (
    < >
      {projects.length === 0 ?
        <p>O projects</p>
        : projects.map(({ id, project_name }) => {
          return (
            <AllTasks id={id} name={project_name} />
          );
        })}
    </>
  );
}
