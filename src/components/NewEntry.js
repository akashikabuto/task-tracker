import Input from './Input';
import '../css/newEntry.css';

export default function NewEntry() {
  return (
    <>
      <form>
        <div className='flex' >
          <label>Task name</label>
          <Input placeholder='Task name' name='taskName' />
        </div>
        <div className='flex' >
          <label>Small description</label>
          <Input placeholder='description' name='description' />
        </div>
        <button className='button' >Insert</button>
      </form>
    </>
  );
}
