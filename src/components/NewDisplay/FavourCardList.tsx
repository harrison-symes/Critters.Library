import * as React from "react";
import "./new-display.scss";
import {
  CARD_SUBTYPE,
  CARD_TYPE,
  ICard,
  IFarmCard,
  IFavourCard,
} from "../../models/cards.models";
import CardSubTypeList from "./CardSubTypeList";
import RewardCard from "../Cards/RewardCard";
import FavourCard from "../Cards/FavourCard";

interface IProps {
  rewards: IFavourCard[];
}

const FavourCardList = (props: IProps) => {
  const [isHidden, setIsHidden] = React.useState(false);
  const title = "Favours";

  if (props.rewards.length === 0) {
    return null;
  }

  return (
    <div className="card-type__container">
      <div className="card-type__title">
        <div>
          {title} ({props.rewards.length})
        </div>
        <button className="button" onClick={() => setIsHidden((h) => !h)}>
          {isHidden ? "Show" : "Hide"}
        </button>
      </div>
      {!isHidden && (
        <div className="card-subtype__list">
          {props.rewards.map((card) => (
            <FavourCard card={card} key={card.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavourCardList;
