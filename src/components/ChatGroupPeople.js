import userLogo from '../images/user.png';
import '../css/ChatGroup.css';

export default function ChatGroupPeople() {
  return (
    <div className='chat-people' >
      <h3>Project : kukushi</h3>
      <h4>Contributors</h4>
      <div className='ch-people' >
        <img src={userLogo} alt='user-pic' className='user-pic' />
        <p>Akashi</p>
      </div>
      <div className='ch-people'>
        <img src={userLogo} alt='user-pic' className='user-pic' />
        <p>Aomine</p>
      </div>
      <div className='ch-people'>
        <img src={userLogo} alt='user-pic' className='user-pic' />
        <p>Gojo</p>
      </div>
      <div className='ch-people'><img src={userLogo} alt='user-pic' className='user-pic' />
        <p>Jojo</p>
      </div>
    </div>
  );
}
