import { useDrag } from 'react-dnd';
import { ITEM } from '../data/Types';

export default function TaskCard({ id, status, title, content, icon }) {

  const [{ isDragging }, drag] = useDrag({
    type: ITEM,
    item: { id: id, status: status, title: title, content: content, icon: icon },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  });

  return (
    <div className='task-card'
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <p> {title} </p>
      <p> {content} </p>
      <p>{status} </p>
      <p> {icon} </p>
    </div>
  );
}
