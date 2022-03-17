import { FaUsers } from 'react-icons/fa';
import { FaRocketchat } from 'react-icons/fa';
import { FaTasks } from 'react-icons/fa';

export default function ProjectCards() {
  return (
    <div className='project-cards' >
      <div className='project-card' >
        <FaUsers size={50} />
        <p> 8 Collaborators</p>
      </div>
      <div className='project-card'>
        <FaRocketchat size={50} />
        <p>Chat room</p>
      </div>
      <div className='project-card'>
        <FaTasks size={50} />
        <p>6 Tasks</p>
      </div>
    </div>
  );
}
