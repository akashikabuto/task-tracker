import '../css/coSideBar.css';

export default function CollaboratorSideBar({ contributors, t }) {
  return (
    <div className='sideBar' >
      <div className='sideBar-header' >
        <p> {t("Contributors")} </p>
      </div>
      {contributors.length !== 0 ? contributors.map((res, idx) => {
        return <div key={idx} className='contributors' >
          <p>{res.contributorName}</p>
        </div>;
      }) : <div>
        <p> {t("Project has 0 contributors")} </p>
      </div>
      }
    </div>
  );
}
