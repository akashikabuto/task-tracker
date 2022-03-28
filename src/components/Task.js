import { useRef } from 'react';
import { useDrag, useDrop } from "react-dnd";
import { ITEM } from '../redux/actions/types';
import '../css/Task.css';

export default function Task({ task, index, moveTask, status }) {

  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ITEM,
    hover(task, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = task.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoveredRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
      const mousePosition = monitor.getClientOffset();
      const hoverClientY = mousePosition.y - hoveredRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveTask(dragIndex, hoverIndex);
      task.index = hoverIndex;
    }

  });

  const [{ isDragging }, drag] = useDrag({
    item: () => ({ ...task, index }),
    type: ITEM,

    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  drag(drop(ref));

  return (
    <>
      <div
        ref={ref}
        style={{ opacity: isDragging ? 0 : 1 }}
        className='task'
      >
        <div className="color-bar" style={{ backgroundColor: status.color }} />
        <p className="item-title">{task.content}</p>
        <p className="item-status">{task.icon}</p>
      </div>
    </>

  );
}
