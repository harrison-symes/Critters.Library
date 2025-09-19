import * as React from "react";
import "./new-display.scss";
import { CARD_SUBTYPE, CARD_TYPE } from "../../models/cards.models";
import CardSubTypeList from "./CardSubTypeList";
import { useAppSelector } from "../../store/hooks";
import { getFilteredFarmDeck } from "../../store/deck.selectors";

interface IProps {
  type: CARD_TYPE;
}

const CardTypeList = (props: IProps) => {
  const [isHidden, setIsHidden] = React.useState(false);
  const farmDeck = useAppSelector(getFilteredFarmDeck);
  const matchingCards = farmDeck.filter((card) => card.type === props.type);
  const title = props.type;

  if (matchingCards.length === 0) {
    return null;
  }

  return (
    <div className="card-type__container">
      <div className="card-type__title">
        <div>
          {title} ({matchingCards.length})
        </div>
        <button className="button" onClick={() => setIsHidden((h) => !h)}>
          {isHidden ? "Show" : "Hide"}
        </button>
      </div>
      {!isHidden && (
        <>
          {[undefined, ...Object.values(CARD_SUBTYPE)].map((subType) => (
            <CardSubTypeList farmDeck={matchingCards} subType={subType} />
          ))}
        </>
      )}
    </div>
  );
};

export default CardTypeList;
