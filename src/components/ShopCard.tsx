import * as React from "react";
import { ICard } from "../models/cards.models";

interface IProps {
  card: ICard;
  removeCard?: (card: ICard) => void;
}

const ShopCard = ({ card, ...props }: IProps) => {
  const totalCost =
    (card.cost.apples ?? 0) +
    (card.cost.carrots ?? 0) +
    (card.cost.berries ?? 0);
  return (
    <div
      className="card"
      onClick={() => props.removeCard && props.removeCard(card)}
    >
      <h1 className="card-name">
        {card.name} - x{card.qty}
      </h1>
      <img
        className="card-image"
        src={`/images/${card.image}.png`}
        alt={card.name}
      />
      <div className="card-cost">
        {card.cost.apples > 0 && (
          <div className="card-cost__item card-cost__apple">
            {card.cost.apples}
          </div>
        )}
        {card.cost.carrots > 0 && (
          <div className="card-cost__item card-cost__carrot">
            {card.cost.carrots}
          </div>
        )}
        {card.cost.berries > 0 && (
          <div className="card-cost__item card-cost__berries">
            {card.cost.berries}
          </div>
        )}
        {(card.cost.any ?? 0) > 0 && (
          <div className="card-cost__item card-cost__any">{card.cost.any}</div>
        )}
      </div>
      <div className="card-description">
        <div>{card.description}</div>
      </div>
      {card.sunlight && (
        <ul className="">
          {card.sunlight?.one && <li>1 ☀️: {card.sunlight.one}</li>}
          {card.sunlight?.two && <li>2 ☀️: {card.sunlight.two}</li>}
          {card.sunlight?.three && <li>3 ☀️: {card.sunlight.three}</li>}
        </ul>
      )}
      <div className="card-footer">
        <div className="card-type">{card.type}</div>
        {card.subtype && <div className="card-type">{card.subtype}</div>}
        {card.energy && (
          <div className="card-durability">
            <span className="card-durability__number">{card.energy}</span>
            <img className="card-durability__icon" src="/images/heart.png" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopCard;
