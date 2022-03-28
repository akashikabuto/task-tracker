import Input from './Input';

export default function Newtask() {
  return (
    <div>
      <form>
        <Input placeholder='Task name' />
        <Input placeholder='Description' />
      </form>
    </div>
  );
}
