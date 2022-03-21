import '../css/cardBar.css';

export default function CardBar() {
  return (
    <>
      <div className='stats' >
        <h3>PROJECT STATS</h3>
      </div>
      <div className='cards-container' >
        <div className='cards' >
          <div>8</div>
          <div>Projects</div>
        </div>
        <div className='cards'>
          <div>8</div>
          <div>contributions</div>
        </div>
        <div className='cards' >
          <div>8</div>
          <div>completed</div>
        </div>
      </div>
    </>

  );
}
