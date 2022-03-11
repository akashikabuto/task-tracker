import DeleteIcon from '../images/delete.png';

export default function Project() {
  return (
    <div>
      <div className='project' >
        <p>project 1</p>
        <img src={DeleteIcon} alt="delete-icon" className='delete-icon' />
      </div>
      <div className='project' >
        <p>project 2</p>
        <img src={DeleteIcon} alt="delete-icon" className='delete-icon' /></div>
      <div className='project' >
        <p>project 3</p>
        <img src={DeleteIcon} alt="delete-icon" className='delete-icon' /></div>
    </div>
  );
}
