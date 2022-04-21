

export default function Messages({ userId, messages, scrollRef }) {
  return (
    <div className="message" ref={scrollRef} >
      {(userId.toString()) === messages.user ? (
        messages.messageType === 'image' ?
          <div className="right-wrapper">
            <img src={messages.message} alt='user-message' className="image-sent" />
          </div> :
          <div className="right-wrapper">
            <div className="m2" >{messages.message} </div>
          </div>
      ) : (
        messages.messageType === 'image' ?
          <div className="m1" >
            <p className="username" >{messages.username}</p>
            <img src={messages.message} alt='pic-mesage' className="image-sent" />
          </div> :
          <div className="m1" >
            <p className="username" >{messages.username}</p>
            <p>{messages.message} </p>
          </div>
      )}
    </div>
  );
}
