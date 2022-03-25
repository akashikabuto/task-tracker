import MessageFooter from "./MessageFooter";
import '../css/Chats.css';

export default function Chats() {
  return (
    <div>
      <div className="messages" >
        <div className="m1" >Hi</div>
        <div className="right-wrapper">
          <div className="m2" >Hey</div>
        </div>
        <div className="m1" >How are you</div>
        <div className="right-wrapper">
          <div className="m2" >I'm fine</div>
        </div>
      </div>
      <MessageFooter />
    </div>
  );
}
