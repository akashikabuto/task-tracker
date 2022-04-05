import { useState } from 'react';
import '../css/MessageFooter.css';
import { IoSend } from "react-icons/io5";




export default function MessageFooter({ socket, chatroomId }) {

  const [state, setState] = useState({
    message: ""
  });

  const sendMessage = () => {
    setState({ ...state, message: "" });
    if (socket) {
      socket.emit("chatroomMessage", {
        chatroomId,
        message: state.message,
      });
    }
  };


  return (
    <div className='MessageFooter' >
      <div className='container'  >
        <input placeholder='Enter Message' value={state.message} className='mess-input' onChange={(e) => setState({ ...state, message: e.target.value })} />
        <IoSend color='white' className='send-m-button' onClick={sendMessage} />
      </div>
    </div>
  );
}
