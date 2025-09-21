import * as React from "react";
import "./new-display.scss";
import { useAppSelector } from "../../store/hooks";
import { getFilteredVisitorsDeck } from "../../store/deck.selectors";
import VisitorCard from "../Cards/VisitorCard";

const VisitorCardList = () => {
  const visitors = useAppSelector(getFilteredVisitorsDeck);
  const [isHidden, setIsHidden] = React.useState(false);
  const title = "Favours";

  if (visitors.length === 0) {
    return null;
  }

  return (
    <div className="card-type__container">
      <div className="card-type__title">
        <div>
          {title} ({visitors.length})
        </div>
        <button className="button" onClick={() => setIsHidden((h) => !h)}>
          {isHidden ? "Show" : "Hide"}
        </button>
      </div>
      {!isHidden && (
        <div className="card-subtype__list">
          {visitors.map((card) => (
            <VisitorCard card={card} key={card.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default VisitorCardList;
