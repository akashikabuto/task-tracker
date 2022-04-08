import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { seeAllProjects } from '../redux/actions/actions';
import AllTasks from './AllTasks';




export default function Project({ lang }) {
  const token = localStorage.getItem('token');
  const { projects } = useSelector(state => state.tasks);

  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(seeAllProjects(token, lang, history));
    //eslint-disable-next-line
  }, []);

  return (
    < >
      {projects.length === 0 ?
        <p>O projects</p>
        : projects.map(({ _id, project }) => {
          return (
            <AllTasks id={project._id} name={project.name} key={_id} />
          );
        })}
    </>
  );
}
