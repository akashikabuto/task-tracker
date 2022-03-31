import { useDrop } from "react-dnd";
import { ITEM } from '../data/Types';
import { useDispatch } from "react-redux";
import { makeStatusTaskToDone } from "../redux/actions/actions";
import '../css/targetCard.css';

export default function TargetCard({ children }) {

  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop({
    accept: ITEM,
    drop: (item, monitor) => dispatch(makeStatusTaskToDone(item.id)),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    })
  });

  return (
    <div className={isOver ? 'target-box-isover' : 'target-box'}
      ref={drop}
    >
      {children}
    </div>
  );
}
