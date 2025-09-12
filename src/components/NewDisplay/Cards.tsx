import { CARD_TYPE, ICard } from "../../models/cards.models";
import CardTypeList from "./CardTypeList";

interface IProps {
  deck: ICard[];
}

const cardTypes = Object.values(CARD_TYPE);

const Cards = (props: IProps) => {
  return (
    <div className="display__cards">
      {cardTypes.map((type) => (
        <CardTypeList key={type} deck={props.deck} type={type} />
      ))}
    </div>
  );
};

export default Cards;
