import { CARD_TYPE, ICard } from "../models/cards.models";
import ShopCard from "./ShopCard";

interface IProps {
  title: string;
  cardType: CARD_TYPE;
  deck: ICard[];
}

const CardList = (props: IProps) => {
  const cardList = props.deck.filter((c) => c.type === props.cardType);

  return (
    <div>
      <h1>
        {props.title} ({cardList.length})
      </h1>
      <div className="card-list">
        {cardList.map((card, i) => (
          <ShopCard key={`{card.name}-${i}`} card={card} />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default CardList;
