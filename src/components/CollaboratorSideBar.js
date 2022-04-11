import '../css/coSideBar.css';

export default function CollaboratorSideBar({ contributors }) {
  return (
    <div className='sideBar' >
      <div className='sideBar-header' >
        <p> Contributors </p>
      </div>
      {contributors.length !== 0 ? contributors.map((res, idx) => {
        return <div key={idx} className='contributors' >
          <p>{res.contributorName}</p>
        </div>;
      }) : <div>
        <p>Project has 0 contributors</p>
      </div>
      }
    </div>
  );
}
