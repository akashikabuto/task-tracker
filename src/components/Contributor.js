import '../css/CoContainer.css';

export default function Contributor() {
  return (
    <div className='contributor' >
      <div>
        <input type='text' placeholder='Search collaborator' className='collaborator-input' />
      </div>
      <div className='searched-contributor' >
        <p>Akashi</p>
        <button className='button' >Add</button>
      </div>
      <div className='searched-contributor' >
        <p>King</p>
        <button className='button' >Add</button>
      </div>
      <div className='searched-contributor' >
        <p>Kukushi</p>
        <button className='button' >Add</button>
      </div>
    </div>
  );
}
