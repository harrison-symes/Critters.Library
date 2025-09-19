import {
  CARD_TYPE,
  IFarmCard,
  IFavourCard,
  IRewardCard,
} from "../../models/cards.models";
import CardTypeList from "./CardTypeList";
import FavourCardList from "./FavourCardList";
import RewardCardList from "./RewardCardsList";

const cardTypes = Object.values(CARD_TYPE);

const Cards = () => {
  return (
    <div className="display__cards">
      {cardTypes.map((type) => (
        <CardTypeList key={type} type={type} />
      ))}
      <RewardCardList />
      <FavourCardList />
    </div>
  );
};

export default Cards;
