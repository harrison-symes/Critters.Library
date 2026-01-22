import * as React from "react";
import "./new-display.scss";
import { useAppSelector } from "../../store/hooks";
import { getFilteredMasksDeck } from "../../store/deck.selectors";
import MaskCard from "../Cards/MaskCard";

const MaskCardList = () => {
  const masks = useAppSelector(getFilteredMasksDeck);
  const [isHidden, setIsHidden] = React.useState(false);
  const title = "Masks";

  if (masks.length === 0) {
    return null;
  }

  return (
    <div className="card-type__container">
      <div className="card-type__title">
        <div>
          {title} ({masks.length})
        </div>
        <button className="button" onClick={() => setIsHidden((h) => !h)}>
          {isHidden ? "Show" : "Hide"}
        </button>
      </div>
      {!isHidden && (
        <div className="card-subtype__list">
          {masks.map((card) => (
            <MaskCard card={card} key={card.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MaskCardList;
