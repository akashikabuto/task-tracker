import addLogo from '../images/plus.png';
import Project from './Project';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toogleSideBar } from '../redux/actions/actions';
import '../css/sideBar.css';




export default function SideBar() {
  const { sideBarStatus } = useSelector(state => state.tasks);

  const history = useHistory();
  const dispatch = useDispatch();

  function goToAddProject() {
    dispatch(toogleSideBar());
    history.push('/dashboard/addTask');
  }

  return (
    <div className={`sidebar ${sideBarStatus && 'open'}`}>
      <div className='logo-container'>
        <img src={addLogo} alt="add-logo" className='add-logo' />
        <p onClick={goToAddProject}  >Add project</p>
      </div>
      <div className='side-projects' >
        <h4>Projects</h4>
        <Project />
      </div>
    </div>
  );
}
