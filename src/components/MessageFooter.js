import '../css/MessageFooter.css';
import { IoSend } from "react-icons/io5";
//IoSend

export default function MessageFooter() {
  return (
    <div className='MessageFooter' >
      <form className='container' >
        <input placeholder='Enter Message' className='mess-input' />
        <IoSend color='white' className='send-m-button' />
      </form>
    </div>
  );
}
