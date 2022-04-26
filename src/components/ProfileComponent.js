import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import userLogo from '../images/user.png';
import { FaCamera } from "react-icons/fa";
import Dropzone from "react-dropzone";
import ReactCrop from 'react-image-crop';
import { useHistory } from "react-router-dom";
import 'react-image-crop/dist/ReactCrop.css';

export default function ProfileComponent({ token, locale }) {

  let url = `https://mern-learning-task-tracker.herokuapp.com`;

  const payload = jwtDecode(token);
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
  const [user, setUser] = useState({});
  const history = useHistory();


  const onDrop = file => {
    const reader = new FileReader();
    reader.addEventListener('load', () =>
      setFile(reader.result)
    );
    reader.readAsDataURL(file[0]);
  };
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

  async function getUserProfile() {
    const config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "accept-language": locale
      }
    };
    const res = await (await fetch(`${url}/api/user/${payload.id}`, config)).json();
    if (res.status === 200) {
      setUser(res.data);
    }
    if (res.status === 401) {
      history.push('/login');
    }
  }

  useEffect(() => {
    getUserProfile();
    //eslint-disable-next-line
  }, [user]);




  async function updateProfile() {

    const formData = { image: outPut };

    const config = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "accept-language": locale
      },
      body: formData
    };

    console.log(config);

    const res = await (await fetch(`${url}/api/user/change-profilePicture`, config)).json();

    console.log(res);

    if (res.status === 200) {
      getUserProfile();
    }
    if (res.status === 401) {
      history.push('/login');
    }
    if (res.status === 422) {
      alert(JSON.stringify(res));
    }

  }


  return (
    <div className="profile-component" >
      <div className="left-panel">
        <div className="user-info-profile">
          <h4>Profile</h4>
          <div className="user-profile-photo" >
            <img src={payload.profilePic === undefined ? userLogo : user.profilePic} alt="user-profile-Logo" className='profile-photo' />
            <Dropzone multiple={false} accept="image/*" onDrop={onDrop} >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <FaCamera className="Camera" />
                </div>
              )}
            </Dropzone>
          </div>
          <p> {user.email} </p>
          <p> {user.username} </p>
          <br />
          {outPut && <button className="send-picture" onClick={updateProfile}  >Uplaod image</button>}
        </div>
      </div>
      <div className="right-panel">
        <div className="c-image" >
          {file &&
            <div className="crop-container" >
              <ReactCrop
                src={file}
                className="crop-image"
                crop={crop} onChange={onChange}
                ruleOfThirds
                onComplete={(cropConfig) => cropImage(cropConfig)}
                onImageLoaded={(imageRef) => setImageRef(imageRef)}
              />
            </div>
          }
        </div>
        {outPut && <div className="finalImage" >
          <img src={outPut} alt="user-profile-Logo" />
        </div>}

      </div>
    </div>
  );
}
