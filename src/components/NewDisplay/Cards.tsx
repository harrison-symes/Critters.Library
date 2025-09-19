import {
  CARD_TYPE,
  IFarmCard,
  IFavourCard,
  IRewardCard,
} from "../../models/cards.models";
import CardTypeList from "./CardTypeList";
import FavourCardList from "./FavourCardList";
import RewardCardList from "./RewardCardsList";

interface IProps {
  farmDeck: IFarmCard[];
  rewards: IRewardCard[];
  favours: IFavourCard[];
}

const cardTypes = Object.values(CARD_TYPE);

const Cards = (props: IProps) => {
  return (
    <div className="display__cards">
      {cardTypes.map((type) => (
        <CardTypeList key={type} farmDeck={props.farmDeck} type={type} />
      ))}
      <RewardCardList rewards={props.rewards} />
      <FavourCardList rewards={props.favours} />
    </div>
  );
};

export default Cards;
