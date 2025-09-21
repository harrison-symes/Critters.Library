import * as React from "react";
import "./new-display.scss";
import { useAppSelector } from "../../store/hooks";
import { getFilteredWorkOrderDeck } from "../../store/deck.selectors";
import WorkOrderCard from "../Cards/WorkOrderCard";

const WorkOrderCardList = () => {
  const workOrders = useAppSelector(getFilteredWorkOrderDeck);
  const [isHidden, setIsHidden] = React.useState(false);
  const title = "Work Orders";

  console.log({ workOrders });

  if (workOrders.length === 0) {
    return null;
  }

  return (
    <div className="card-type__container">
      <div className="card-type__title">
        <div>
          {title} ({workOrders.length})
        </div>
        <button className="button" onClick={() => setIsHidden((h) => !h)}>
          {isHidden ? "Show" : "Hide"}
        </button>
      </div>
      {!isHidden && (
        <div className="card-subtype__list">
          {workOrders.map((card) => (
            <WorkOrderCard card={card} key={card.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkOrderCardList;
