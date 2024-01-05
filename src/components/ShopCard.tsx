import * as React from "react";
import { ICard } from "../models/cards.models";

interface IProps {
  card: ICard;
  removeCard?: (card: ICard) => void;
}

const ShopCard = ({ card, ...props }: IProps) => {
  return (
    <div
      className="card"
      onClick={() => props.removeCard && props.removeCard(card)}
    >
      <h1 className="card-name">{card.name}</h1>
      <img
        className="card-image"
        src={`/images/${card.image}.png`}
        alt={card.name}
      />
      <div className="card-cost">
        {card.cost.carrots > 0 && (
          <div className="card-cost__item card-cost__carrot">
            {card.cost.carrots}
          </div>
        )}
        {card.cost.apples > 0 && (
          <div className="card-cost__item card-cost__apple">
            {card.cost.apples}
          </div>
        )}
        {card.cost.berries > 0 && (
          <div className="card-cost__item card-cost__berries">
            {card.cost.berries}
          </div>
        )}
      </div>
      <div className="card-description">{card.description}</div>
      <div className="card-footer">
        <div className="card-type">{card.type}</div>
        {card.durability && (
          <div className="card-durability">
            <span className="card-durability__number">{card.durability}</span>
            <img className="card-durability__icon" src="/images/heart.png" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopCard;
