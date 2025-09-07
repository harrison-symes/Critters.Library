import { CARD_TYPE, ICard } from "../models/cards.models";
import ShopCard from "./ShopCard";

interface IProps {
  title: string;
  cardType: CARD_TYPE;
  deck: ICard[];
}

const CardList = (props: IProps) => {
  const cardList = props.deck.filter((c) => c.type === props.cardType);
  const totalCount = cardList.reduce((accum, card) => accum + card.qty, 0);

  return (
    <div>
      <h1>
        {props.title} ({cardList.length} unique) ({totalCount} total)
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
