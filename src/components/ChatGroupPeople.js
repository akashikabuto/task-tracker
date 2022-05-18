import userLogo from '../images/user.png';
import '../css/ChatGroup.css';

export default function ChatGroupPeople({ contributors, projectName, t }) {


  return (
    <div className='chat-people' >
      <h3> {t("Project")} : {projectName} </h3>
      <h4> {t("Contributors")} </h4>
      {contributors.length !== 0 ? contributors.map((res, idx) => {
        return <div key={idx} className='ch-people' >
          <img src={userLogo} alt='user-pic' className='user-pic' />
          <p>{res.contributorName}</p>
        </div>;
      }) : <p>0 {t("Contributors")} </p>}
    </div>
  );
}
