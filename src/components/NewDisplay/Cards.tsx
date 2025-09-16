import { CARD_TYPE, ICard, IFarmCard } from "../../models/cards.models";
import CardTypeList from "./CardTypeList";

interface IProps {
  farmDeck: IFarmCard[];
}

const cardTypes = Object.values(CARD_TYPE);

const Cards = (props: IProps) => {
  return (
    <div className="display__cards">
      {cardTypes.map((type) => (
        <CardTypeList key={type} farmDeck={props.farmDeck} type={type} />
      ))}
    </div>
  );
};

export default Cards;
