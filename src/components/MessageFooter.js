import { useState } from 'react';
import '../css/MessageFooter.css';
import { IoSend } from "react-icons/io5";
import Dropzone from "react-dropzone";
import { FaFileImage } from "react-icons/fa";





export default function MessageFooter({ socket, chatroomId }) {


  const [state, setState] = useState({ message: "" });
  const [type, setType] = useState('');
  const url = `https://api.cloudinary.com/v1_1/akashi/upload`;

  function emitMessage() {
    socket.emit("chatroomMessage", {
      chatroomId,
      message: state.message,
      type: "text"
    });
    setState({ ...state, message: "" });
  }

  const sendMessage = () => {
    setType('text');
    if (socket) {
      emitMessage();
    }
  };

  const sendPicture = (image) => {
    setType('image');
    console.log('type', type);
    if (socket) {
      socket.emit("chatroomMessage", {
        chatroomId,
        message: image,
        type: "image"
      });
    }
  };

  async function upload(config) {
    const res = await (await fetch(`${url}`, config)).json();
    return res.secure_url;
  }


  async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default');
    const config = {
      method: "POST",
      body: formData
    };
    const imageUrl = await upload(config);
    sendPicture(imageUrl);
  }

  function onDrop(file) {
    uploadFile(file[0]);
  }


  return (
    <div className='MessageFooter' >
      <div className='message-container'  >
        <input placeholder='Enter Message' value={state.message} className='mess-input' onChange={(e) => setState({ ...state, message: e.target.value })} />
        <IoSend color='white' className='send-m-button' onClick={sendMessage} />
        <Dropzone multiple={false} accept="image/*"
          onDrop={onDrop}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <FaFileImage className='send-m-button-file' color='white' />
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
}
