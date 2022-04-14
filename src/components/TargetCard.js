import { useDrop } from "react-dnd";
import { ITEM } from '../data/Types';
import { useDispatch } from "react-redux";
import { setTheStatus } from "../redux/actions/actions";
import '../css/targetCard.css';

export default function TargetCard({ children }) {

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const [{ isOver }, drop] = useDrop({
    accept: ITEM,
    drop: (item, monitor) => dispatch(setTheStatus(item.id, token)),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    })
  });

  return (
    <div
      className={isOver ? 'target-box-isover' : 'target-box'}
      ref={drop}
    >
      {children}
    </div>
  );
}
