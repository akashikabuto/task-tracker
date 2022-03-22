import { FaUsers } from 'react-icons/fa';
import { FaRocketchat } from 'react-icons/fa';
import { FaTasks } from 'react-icons/fa';
import '../css/projectCard.css';

export default function ProjectCards() {
  return (
    <div className='project-cards' >
      <div className='project-card' >
        <FaUsers className="cards-image" />
        <p> 8 Collaborators</p>
      </div>
      <div className='project-card' >
        <FaRocketchat className="cards-image" />
        <p>Chat room</p>
      </div>
      <div className='project-card'>
        <FaTasks className="cards-image" />
        <p>6 Tasks</p>
      </div>
    </div>
  );
}
