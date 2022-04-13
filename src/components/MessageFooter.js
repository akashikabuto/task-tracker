import { useState } from 'react';
import '../css/MessageFooter.css';
import { IoSend } from "react-icons/io5";
import Dropzone from "react-dropzone";
import { FaFileImage } from "react-icons/fa";


//FaFileImage



export default function MessageFooter({ socket, chatroomId }) {

  const [state, setState] = useState({
    message: ""
  });

  function emitMessage() {
    socket.emit("chatroomMessage", {
      chatroomId,
      message: state.message,
    });
  }

  const sendMessage = () => {
    if (socket) {
      emitMessage();
      setState({ ...state, message: "" });
    }
  };


  return (
    <div className='MessageFooter' >
      <div className='container'  >
        <input placeholder='Enter Message' value={state.message} className='mess-input' onChange={(e) => setState({ ...state, message: e.target.value })} />
        <IoSend color='white' className='send-m-button' onClick={sendMessage} />
        <Dropzone
          multiple={false}
          accept="image/*"
        >
          {({ getRootProps, getInputProps }) => (
            <section className="zone">
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <FaFileImage className='send-m-button-file' color='white' />
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    </div>
  );
}
