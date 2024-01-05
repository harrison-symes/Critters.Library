import * as React from "react";
import { ICard, IWorkOrder } from "../models/cards.models";
import ShopCard from "./ShopCard";
import WorkOrder from "./WorkOrder";

interface IProps {
  cards: ICard[];
  workOrders: IWorkOrder[];
  removeCard: (card: ICard) => void;
  removeWorkOrder: (order: IWorkOrder) => void;
}

const Shop = (props: IProps) => {
  return (
    <>
      <div className="shop">
        <div className="shop-orders">
          {props.workOrders.map((card, i) => (
            <WorkOrder
              key={card.name + i}
              order={card}
              removeWorkOrder={props.removeWorkOrder}
            />
          ))}
        </div>
        <hr />
        <div className="shop-cards">
          {props.cards.map((card, i) => (
            <ShopCard
              key={card.name + i}
              card={card}
              removeCard={props.removeCard}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
