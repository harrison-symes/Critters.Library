import { CARD_SUBTYPE, CARD_TYPE } from "../../models/cards.models";
import { getFilteredStarterDeck } from "../../store/deck.selectors";
import { useAppSelector } from "../../store/hooks";
import CardSubTypeList from "./CardSubTypeList";
import CardTypeList from "./CardTypeList";
import FavourCardList from "./FavourCardList";
import MaskCardList from "./MaskCardList";
import RewardCardList from "./RewardCardsList";
import VisitorCardList from "./VisitorCardList";
import WorkOrderCardList from "./WorkOrderCardList";

const cardTypes = Object.values(CARD_TYPE);

const Cards = () => {
  const starterCards = useAppSelector(getFilteredStarterDeck);
  return (
    <div className="display__cards">
      {cardTypes.map((type) => (
        <CardTypeList key={type} type={type} />
      ))}
      <RewardCardList />
      <FavourCardList />
      <WorkOrderCardList />
      <CardSubTypeList farmDeck={starterCards} subType={CARD_SUBTYPE.Starter} />
      <VisitorCardList />
      <MaskCardList />
    </div>
  );
};

export default Cards;
