import * as React from "react";
import "./new-display.scss";
import FavourCard from "../Cards/FavourCard";
import { useAppSelector } from "../../store/hooks";
import { getFilteredFavourDeck } from "../../store/deck.selectors";

const FavourCardList = () => {
  const favours = useAppSelector(getFilteredFavourDeck);
  const [isHidden, setIsHidden] = React.useState(false);
  const title = "Favours";

  if (favours.length === 0) {
    return null;
  }

  return (
    <div className="card-type__container">
      <div className="card-type__title">
        <div>
          {title} ({favours.length})
        </div>
        <button className="button" onClick={() => setIsHidden((h) => !h)}>
          {isHidden ? "Show" : "Hide"}
        </button>
      </div>
      {!isHidden && (
        <div className="card-subtype__list">
          {favours.map((card) => (
            <FavourCard card={card} key={card.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavourCardList;
