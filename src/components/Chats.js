import { useEffect, useRef } from "react";
import '../css/Chats.css';
import { useSelector, useDispatch } from 'react-redux';
import { getRoomMessages, allMessagesBetweenUsers } from '../redux/actions/actions';
import Messages from "./Messages";
import FooterMessage from "./FooterMessage";




export default function Chats({ userId, socket, chatroomId }) {

  const { messages } = useSelector(state => state.tasks);
  let id = userId;
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  useEffect(() => {
    if (socket) dispatch(getRoomMessages(chatroomId, token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  const scrollRef = useRef();

  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth", bottom: 0 });
  };

  useEffect(() => {
    scrollToBottom();
    if (socket) dispatch(allMessagesBetweenUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);






  return (
    <>
      <div className="scroll" >
        {messages.map((message, i) =>
          <Messages key={i} userId={id} messages={message} scrollRef={scrollRef} />
        )}
      </div>
      <FooterMessage socket={socket} chatroomId={chatroomId} />
    </>
  );
}
