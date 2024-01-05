import * as React from "react";
import { IWorkOrder } from "../models/cards.models";

interface IProps {
  order: IWorkOrder;
  removeWorkOrder?: (order: IWorkOrder) => void;
}

const WorkOrder = ({ order, removeWorkOrder }: IProps) => {
  return (
    <div
      className="work-order"
      onClick={() => removeWorkOrder && removeWorkOrder(order)}
    >
      <h1 className="card-name">{order.name}</h1>
      <img
        className="card-image"
        src={`/images/${order.image}.png`}
        alt={order.name}
      />
      <hr />
      <h1 className="card-name">Cost:</h1>
      <div className="card-cost">
        {order.cost.carrots > 0 && (
          <div className="card-cost__item card-cost__carrot">
            {order.cost.carrots}
          </div>
        )}
        {order.cost.apples > 0 && (
          <div className="card-cost__item card-cost__apple">
            {order.cost.apples}
          </div>
        )}
        {order.cost.berries > 0 && (
          <div className="card-cost__item card-cost__berries">
            {order.cost.berries}
          </div>
        )}
      </div>
      <hr />
      <h1 className="card-name">Objective:</h1>
      <div className="card-cost">
        {order.requirement.carrots > 0 && (
          <div className="card-cost__item card-cost__carrot">
            {order.requirement.carrots}
          </div>
        )}
        {order.requirement.apples > 0 && (
          <div className="card-cost__item card-cost__apple">
            {order.requirement.apples}
          </div>
        )}
        {order.requirement.berries > 0 && (
          <div className="card-cost__item card-cost__berries">
            {order.requirement.berries}
          </div>
        )}
      </div>
      <hr />
      <div className="card-description">Reward: {order.reward}</div>
      <h1 className="card-name">+ {order.victoryPoints} Victory points</h1>
    </div>
  );
};

export default WorkOrder;
