import { useEffect, useState } from 'react';
import ChatGroupPeople from '../components/ChatGroupPeople';
import Chats from '../components/Chats';
import DashNavBar from '../components/DashNavBar';
import '../css/Chatroom.css';
import { setUpSocket, UserProfile, fetchContributors } from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default function Chatroom({ token, locale }) {

  const dispatch = useDispatch();
  const { socket, User, allContributors } = useSelector(state => state.tasks);
  const { id: chatroomId, name: projectName } = useParams();
  const payload = jwt_decode(token);
  const [userId, setUserId] = useState("");
  const history = useHistory();
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
      dispatch(fetchContributors(token, locale, history, chatroomId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    dispatch(UserProfile(history, token, locale, payload.id));
    //eslint-disable-next-line
  }, [User]);



  return (
    <div className='chatroom' >
      <DashNavBar token={token} locale={locale} User={User} />
      <div className='chatroom-container' >
        <ChatGroupPeople contributors={allContributors} projectName={projectName} />
        <div className='chats' >
          <Chats userId={userId} chatroomId={chatroomId} socket={socket} />
        </div>
      </div>
    </div>

  );
}
