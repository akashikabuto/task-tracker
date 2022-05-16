import { useState } from "react";
import jwtDecode from "jwt-decode";
import userLogo from '../images/user.png';
import { FaCamera } from "react-icons/fa";
import Dropzone from "react-dropzone";
import ReactCrop from 'react-image-crop';
import { useHistory } from "react-router-dom";
import 'react-image-crop/dist/ReactCrop.css';
import { useDispatch } from "react-redux";
import { UserProfile } from "../redux/actions/actions";

export default function ProfileComponent({ token, locale, User }) {

  let url = `https://mern-learning-task-tracker.herokuapp.com`;

  const dispatch = useDispatch();

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
  const history = useHistory();
  const [loading, setLoading] = useState(false);




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





  async function updateProfile() {

    setLoading(true);
    const formData = new FormData();
    const blob = await fetch(outPut).then(res => res.blob());

    formData.append('image', blob);

    const config = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "accept-language": locale
      },
      body: formData
    };

    const res = await (await fetch(`${url}/api/user/change-profilePicture`, config)).json();

    if (res.status === 200) {
      setLoading(false);
      setFile('');
      setOutput('');
      dispatch(UserProfile(history, token, locale, payload.id));

    }
    if (res.status === 401) {
      history.push('/login');
    }
    if (res.status === 422) {
      setLoading(false);
      alert(JSON.stringify(res));
    }

  }


  return (
    <div className="profile-component" >
      <div className="left-panel">
        <div className="user-info-profile">
          <h4>Profile</h4>
          <br />
          <div className={"user-profile-photo"}>
            <img src={User.image === undefined || '' ? userLogo : User.image} alt="user-profile-Logo"
              className={User.image === undefined || '' ? 'profile-photo-null' : 'profile-photo'} />
            <Dropzone multiple={false} accept="image/*" onDrop={onDrop} >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <FaCamera className="Camera" />
                </div>
              )}
            </Dropzone>
          </div>
          <br />
          <p className="email-y"> {User.email} </p>
          <p className="email-y"> {User.username} </p>
          <br />
          {outPut && <button className="send-picture" onClick={updateProfile}  >{loading ? "loading" : "Uplaod image"}</button>}
        </div>
      </div>
      <div className="right-panel">
        <div className="cimage" >
          {file &&
            <div className="crop-container" >
              <ReactCrop
                src={file}
                className="crop-image"
                crop={crop}
                onChange={onChange}
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
