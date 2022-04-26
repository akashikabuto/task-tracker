import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
};

Modal.setAppElement('#root');

export default function ModalComponent({ childern }) {

  const [IsOpen, setIsOpen] = useState(false);

  function toogle() {
    setIsOpen(!IsOpen);
  }

  return (
    <Modal
      style={customStyles}
      isOpen={IsOpen}
    >
      <button onClick={toogle}>opnen</button>
      {childern}
    </Modal>
  );
}
