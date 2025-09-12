import * as React from "react";
import "./new-display.scss";
import { CARD_SUBTYPE, ICard } from "../../models/cards.models";
import ShopCard from "../ShopCard";

interface IProps {
  deck: ICard[];
  subType: CARD_SUBTYPE | undefined;
}

const CardSubTypeList = (props: IProps) => {
  const [isHidden, setIsHidden] = React.useState(false);
  const matchingCards = props.deck.filter(
    (card) => card.subtype === props.subType
  );
  const title = props.subType ?? "No subtype";

  if (matchingCards.length === 0) {
    return null;
  }

  return (
    <div className="card-subtype__container">
      <div className="card-subtype__title">
        <div>
          {title} ({matchingCards.length})
        </div>
        <button className="button" onClick={() => setIsHidden((h) => !h)}>
          {isHidden ? "Show" : "Hide"}
        </button>
      </div>
      {!isHidden && (
        <div className="card-subtype__list">
          {matchingCards.map((card) => (
            <ShopCard card={card} key={card.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardSubTypeList;
