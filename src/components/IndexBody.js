import card from '../images/—Pngtree—team work web concept people_5335944.png';


function IndexBody() {


  return (
    <div className='index-body-container' >
      <div className='left-bar' >
        <div className='welcome-container' >
          <h3 className='welcome-container-title' >Tracker</h3>
          <p className='welcome-container-para' >Work in team and work faster and smarter</p>
          <div className='form-container' >
            <input placeholder='Email' className='container-input' />
            <button className='container-button' >Sign up it's free</button>
          </div>
        </div>
      </div>
      <div className='right-bar' >
        <img src={card} alt="card" className='card' />
      </div>
    </div>
  );
}

export default IndexBody;