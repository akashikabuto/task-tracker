import { useDrag } from 'react-dnd';
import { ITEM } from '../data/Types';
import '../css/taskCard.css';

export default function TaskCard({ id, status, title, content, icon }) {

  const [{ isDragging }, drag] = useDrag({
    type: ITEM,
    item: { id: id },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  });

  return (
    <div className={isDragging ? 'task-card-dargging' : 'task-card'}
      ref={drag}
    >
      <p> {title} </p>
      <p> {content} </p>
      <p>{status} </p>
      <p> {icon} </p>
    </div>
  );
}
