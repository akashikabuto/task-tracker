import { useEffect, useRef } from "react";
import MessageFooter from "./MessageFooter";
import '../css/Chats.css';
import { useSelector, useDispatch } from 'react-redux';
import { getRoomMessages, allMessagesBetweenUsers } from '../redux/actions/actions';


export default function Chats({ userId, socket, chatroomId }) {

  const { messages } = useSelector(state => state.tasks);

  let id = userId;
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  useEffect(() => {
    if (socket) {
      dispatch(getRoomMessages(chatroomId, token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  const scrollRef = useRef();

  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    if (socket) {
      dispatch(allMessagesBetweenUsers());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);


  return (
    <div className="scroll" >
      {messages.map((message, i) => (
        <div key={i} className="message" ref={scrollRef}>
          {(id.toString()) === message.user ? <div className="right-wrapper">
            <div className="m2" >{message.message} </div>
          </div> : <div className="m1" >
            <p className="username" >{message.username}</p>
            <p>{message.message} </p>
          </div>}
        </div>
      ))}
      <MessageFooter socket={socket} chatroomId={chatroomId} />
    </div>
  );
}
