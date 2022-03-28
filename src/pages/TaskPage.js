import { useState } from "react";
import DashNavBar from "../components/DashNavBar";
import Task from "../components/Task";
import Col from "../components/Col";
import DropWrapper from "../components/DropWrapper";
import { statuses, data } from '../data/index';
import '../css/taskPage.css';


export default function TaskPage() {

  const [items, setItems] = useState(data);

  const onDrop = (item, monitor, status) => {
    const mapping = statuses.find(si => si.status === status);

    setItems(prevState => {
      const newItems = prevState
        .filter(i => i.id !== item.id)
        .concat({ ...item, status, icon: mapping.icon });
      return [...newItems];
    });
  };

  const moveItem = (dragIndex, hoverIndex) => {
    const item = items[dragIndex];
    setItems(prevState => {
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };

  return (
    <div>
      <DashNavBar />
      <div className="row" >
        {statuses.map(s => {
          return (
            <div key={s.status} className="col-wrapper">
              <h2 className="col-header">{s.status.toUpperCase()}</h2>
              <DropWrapper onDrop={onDrop} status={s.status}>
                <Col>
                  {items
                    .filter(i => i.status === s.status)
                    .map((i, idx) => <Task key={i.id} task={i} index={idx} moveTask={moveItem} status={s.status} />)
                  }
                </Col>
              </DropWrapper>
            </div>
          );
        })}
      </div>
    </div>
  );
}
