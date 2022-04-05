import { useEffect, useRef } from "react";
import MessageFooter from "./MessageFooter";
import '../css/Chats.css';
import { useSelector, useDispatch } from 'react-redux';
import { getRoomMessages } from '../redux/actions/actions';

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

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  return (
    <div ref={scrollRef} >
      {messages.map((message, i) => (
        <div key={i} className="message">
          {(id.toString()) === (message.user.toString()) ? <div className="right-wrapper">
            <div className="m2" >{message.message} </div>
          </div> : <div className="m1" >
            <p>{message.name}</p>
            <p>{message.message} </p>
          </div>}
        </div>
      ))}
      <MessageFooter socket={socket} chatroomId={chatroomId} />
    </div>
  );
}
