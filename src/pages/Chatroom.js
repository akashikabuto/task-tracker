import ChatGroupPeople from '../components/ChatGroupPeople';
import Chats from '../components/Chats';
import DashNavBar from '../components/DashNavBar';
import '../css/Chatroom.css';

export default function Chatroom() {
  return (
    <div className='chatroom' >
      <DashNavBar />
      <div className='chatroom-container' >
        <ChatGroupPeople />
        <div className='chats' >
          <Chats />
        </div>
      </div>
    </div>

  );
}
