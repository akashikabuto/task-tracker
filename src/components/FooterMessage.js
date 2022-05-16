import { useState } from 'react';
import '../css/MessageFooter.css';
import { IoSend } from "react-icons/io5";
import Dropzone from "react-dropzone";
import { FaFileImage } from "react-icons/fa";
import Modal from 'react-modal';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: "fixed"
  },
};

Modal.setAppElement('#root');

export default function FooterMessage({ socket, chatroomId }) {

  const url = `https://api.cloudinary.com/v1_1/akashi/upload`;

  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);

  const [crop, setCrop] = useState({
    unit: '%', // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  });
  const [outPut, setOutput] = useState(null);
  const [imageRef, setImageRef] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);


  function emitMessage() {
    socket.emit("chatroomMessage", {
      chatroomId,
      message,
      type: "text"
    });
    setMessage('');
  }

  const sendMessage = () => {
    if (socket) {
      emitMessage();
    }
  };

  const sendPicture = image => {
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

  const onChange = (crop) => {
    setCrop(crop);
  };

  function cropImage(crop) {
    if (imageRef && crop.width && crop.height) {
      const croppedImage = getCroppedImage(
        imageRef,
        crop
      );
      setOutput(croppedImage);
    }
  }

  function getCroppedImage(sourceImage, pixelCrop) {
    const canvas = document.createElement('canvas');
    const scaleX = sourceImage.naturalWidth / sourceImage.width;
    const scaleY = sourceImage.naturalHeight / sourceImage.height;
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      sourceImage,
      pixelCrop.x * scaleX,
      pixelCrop.y * scaleY,
      pixelCrop.width * scaleX,
      pixelCrop.height * scaleY,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    return canvas.toDataURL('image/jpeg', 1);
  }

  async function getStringUrl() {
    const blob = await fetch(outPut).then(res => res.blob());
    console.log(blob);
    uploadFile(blob);
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
    console.log('image', imageUrl);
    closeModal();
  }

  function onDrop(file) {
    openModal();
    const reader = new FileReader();
    reader.addEventListener('load', () =>
      setFile(reader.result)
    );
    reader.readAsDataURL(file[0]);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="cimage-k" >
          {file &&
            <div className="crop-container-i"  >
              <ReactCrop
                src={file}
                className="crop-image-f"
                crop={crop}
                onChange={onChange}
                ruleOfThirds
                onComplete={(cropConfig) => cropImage(cropConfig)}
                onImageLoaded={(imageRef) => setImageRef(imageRef)}
              />
            </div>
          }
        </div>
        {outPut && <button onClick={getStringUrl} >Upload</button>}
      </Modal>
      <div className='MessageFooter' >
        <div className='message-container'  >
          <input placeholder='Enter Message' value={message} className='mess-input'
            onChange={(e) => setMessage(e.target.value)} />
          <IoSend color='white' className='send-m-button' onClick={sendMessage} />
          <Dropzone multiple={false} accept="image/*" onDrop={onDrop}  >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className='k'>
                <input {...getInputProps()} />
                <FaFileImage className='send-m-button-file' color='white' />
              </div>
            )}
          </Dropzone>
        </div>
      </div>
    </>
  );
}
