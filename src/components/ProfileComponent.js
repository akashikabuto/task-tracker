import { useState } from "react";
import jwtDecode from "jwt-decode";
import userLogo from '../images/user.png';
import { FaCamera } from "react-icons/fa";
import Dropzone from "react-dropzone";
import ReactCrop from 'react-image-crop';

import 'react-image-crop/dist/ReactCrop.css';

export default function ProfileComponent({ token }) {

  const payload = jwtDecode(token);
  const [file, setFile] = useState(null);
  const [crop, setCrop] = useState({
    unit: 'px', // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 50,
    height: 50
  });
  const [outPut, setOutput] = useState(null);


  const onDrop = file => {
    // const reader = new FileReader();
    // reader.addEventListener('load', () =>
    //   setFile(reader.result),
    // );
    // reader.readAsDataURL(file[0]);
    const objectUrl = URL.createObjectURL(file[0]);
    setFile(objectUrl);

  };
  const onChange = (crop, percentCrop) => {
    setCrop(crop);
  };


  const onComplete = e => {

    const image = new Image();
    image.src = file;

    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;

    const ctx = canvas.getContext('2d');
    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';


    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    );

    // Converting to base64
    const base64Image = canvas.toDataURL('image/jpeg');
    setOutput(base64Image);
  };

  return (
    <div className="profile-component" >
      <div className="left-panel">
        <div className="user-info-profile">
          <h4>Profile</h4>
          <div className="user-profile-photo" >
            <img src={payload.profilePic === undefined ? userLogo : payload.profilePic} alt="user-profile-Logo" className='profile-photo' />
            <Dropzone multiple={false} accept="image/*" onDrop={onDrop} >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <FaCamera className="Camera" />
                </div>
              )}
            </Dropzone>
          </div>
          <p> {payload.email} </p>
          <p> {payload.username} </p>
        </div>
      </div>
      <div className="right-panel">
        {file &&
          <ReactCrop crop={crop} onChange={onChange} className="crop-image"  >
            <img src={file} alt="user-profile-Logo" className='profile-photo-crop' />
          </ReactCrop>
        }
        {outPut && <img src={outPut} alt="user-profile-Logo" />}
        {file && <button onClick={onComplete} >Done</button>}
      </div>
    </div>
  );
}
