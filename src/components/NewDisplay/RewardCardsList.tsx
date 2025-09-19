import * as React from "react";
import "./new-display.scss";
import RewardCard from "../Cards/RewardCard";
import { useAppSelector } from "../../store/hooks";
import { getFilteredRewardDeck } from "../../store/deck.selectors";

const RewardCardList = () => {
  const rewards = useAppSelector(getFilteredRewardDeck);
  const [isHidden, setIsHidden] = React.useState(false);
  const title = "Rewards";

  if (rewards.length === 0) {
    return null;
  }

  return (
    <div className="card-type__container">
      <div className="card-type__title">
        <div>
          {title} ({rewards.length})
        </div>
        <button className="button" onClick={() => setIsHidden((h) => !h)}>
          {isHidden ? "Show" : "Hide"}
        </button>
      </div>
      {!isHidden && (
        <div className="card-subtype__list">
          {rewards.map((card) => (
            <RewardCard card={card} key={card.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RewardCardList;
