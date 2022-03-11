import addLogo from '../images/plus.png';
import Project from './Project';

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className='logo-container'>
        <img src={addLogo} alt="add-logo" className='add-logo' />
        <p>Add task</p>
      </div>
      <hr />
      <div className='side-projects' >
        <h4>Projects</h4>
        <Project />
      </div>
    </div>
  );
}
