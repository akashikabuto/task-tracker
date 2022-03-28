import { cloneElement } from "react";
import { useDrop } from "react-dnd";
import { ITEM } from "../redux/actions/types";
import { statuses } from "../data";
import '../css/dropWrapper.css';

export default function DropWrapper({ onDrop, children, status }) {

  const [{ isOver }, drop] = useDrop({
    accept: ITEM,
    canDrop: (item, monitor) => {
      const itemIndex = statuses.findIndex(si => si.status === item.status);
      const statusIndex = statuses.findIndex(si => si.status === status);
      return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
    },
    drop: (item, monitor) => {
      onDrop(item, monitor, status);
    },
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  });

  return (
    <div ref={drop} className="drop-wrapper">
      {cloneElement(children, { isOver })}
    </div>
  );
}
