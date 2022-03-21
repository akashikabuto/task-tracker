import addLogo from '../images/plus.png';
import Project from './Project';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';




export default function SideBar() {
  const { sideBarStatus } = useSelector(state => state.tasks);



  return (
    <div className={`sidebar ${sideBarStatus && 'open'}`}>
      <div className='logo-container'>
        <img src={addLogo} alt="add-logo" className='add-logo' />
        <NavLink
          className='add-link'
          to='/dashboard/addTask'
        >
          Add Project
        </NavLink>
      </div>
      <div className='side-projects' >
        <h4>Projects</h4>
        <Project />
      </div>
    </div>
  );
}
