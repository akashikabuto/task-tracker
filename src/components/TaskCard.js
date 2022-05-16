import { useDrag } from 'react-dnd';
import { ITEM } from '../data/Types';
import '../css/taskCard.css';

export default function TaskCard({ id, status, title }) {

  const [{ isDragging }, drag] = useDrag({
    type: ITEM,
    item: { id: id },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  });

  return (
    <div className={'task-card'}
      ref={drag}
      style={{ opacity: isDragging ? 0 : 1 }}
    >
      <p className='title' > {title} </p>
      <p className='status'>{status} </p>
    </div>
  );
}
