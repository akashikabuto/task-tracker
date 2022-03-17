import addLogo from '../images/plus.png';
import Project from './Project';
import { NavLink } from 'react-router-dom';



export default function SideBar() {


  return (
    <div className='sidebar'>
      <div className='logo-container'>
        <img src={addLogo} alt="add-logo" className='add-logo' />
        <NavLink
          className='add-link'
          to='/dashboard/addTask'>
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
