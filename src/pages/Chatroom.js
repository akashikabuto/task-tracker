import { useEffect, useState } from 'react';
import ChatGroupPeople from '../components/ChatGroupPeople';
import Chats from '../components/Chats';
import DashNavBar from '../components/DashNavBar';
import '../css/Chatroom.css';
import { setUpSocket } from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default function Chatroom() {

  const dispatch = useDispatch();
  const { socket } = useSelector(state => state.tasks);
  const { id: chatroomId } = useParams();

  const payload = jwt_decode(localStorage.getItem('token'));

  const [userId, setUserId] = useState("");

  useEffect(() => {
    dispatch(setUpSocket());
    if (socket) {
      socket.emit("joinRoom", {
        chatroomId,
      });
    }
    return () => {
      if (socket) {
        socket.emit("leaveRoom", {
          chatroomId,
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  useEffect(() => {
    if (payload) {
      setUserId(payload.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);





  return (
    <div className='chatroom' >
      <DashNavBar />
      <div className='chatroom-container' >
        <ChatGroupPeople />
        <div className='chats' >
          <div className='chat-wrapper' >
            <Chats userId={userId} chatroomId={chatroomId} socket={socket} />
          </div>
        </div>
      </div>
    </div>

  );
}
