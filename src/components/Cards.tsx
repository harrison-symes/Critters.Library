import * as React from "react";
import items from "../cards/items";
import ShopCard from "./ShopCard";
import constructs from "../cards/constructs";
import seeds from "../cards/seeds";
import rabbits from "../cards/rabbits";
import crows from "../cards/crows";
import hedgehogs from "../cards/hedgehogs";
import rats from "../cards/rats";
import moles from "../cards/moles";
import worms from "../cards/worms";
import caterpillars from "../cards/caterpillars";
import raccoons from "../cards/raccoons";
import nonShop from "../cards/nonshop";
import workOrders from "../cards/workOrders";
import WorkOrder from "./WorkOrder";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Work Orders ({workOrders.length})</h1>
      <div className="card-list">
        {workOrders.map((card) => (
          <WorkOrder order={card} />
        ))}
      </div>
      <h1>Not in the shop ({nonShop.length})</h1>
      <div className="card-list">
        {nonShop.map((card) => (
          <ShopCard card={card} />
        ))}
      </div>
      <hr />
      <h1>Items ({items.length})</h1>
      <div className="card-list">
        {items.map((card) => (
          <ShopCard card={card} />
        ))}
      </div>
      <hr />
      <h1>Constructs ({constructs.length})</h1>
      <div className="card-list">
        {constructs.map((card) => (
          <ShopCard card={card} />
        ))}
      </div>
      <hr />
      <h1>Seeds ({seeds.length})</h1>
      <div className="card-list">
        {seeds.map((card) => (
          <ShopCard card={card} />
        ))}
      </div>
      <hr />
      <h1>Rabbits ({rabbits.length})</h1>
      <div className="card-list">
        {rabbits.map((card) => (
          <ShopCard card={card} />
        ))}
      </div>
      <hr />
      <h1>Crows ({crows.length})</h1>
      <div className="card-list">
        {crows.map((card) => (
          <ShopCard card={card} />
        ))}
      </div>
      <hr />
      <h1>Hedgehog ({hedgehogs.length})</h1>
      <div className="card-list">
        {hedgehogs.map((card) => (
          <ShopCard card={card} />
        ))}
      </div>
      <hr />
      <h1>Rats ({rats.length})</h1>
      <div className="card-list">
        {rats.map((card) => (
          <ShopCard card={card} />
        ))}
      </div>
      <hr />
      <h1>Moles ({moles.length})</h1>
      <div className="card-list">
        {moles.map((card) => (
          <ShopCard card={card} />
        ))}
      </div>
      <hr />
      <h1>Raccoons ({rats.length})</h1>
      <div className="card-list">
        {raccoons.map((card) => (
          <ShopCard card={card} />
        ))}
      </div>
      <hr />
      <h1>Caterpillars ({caterpillars.length})</h1>
      <div className="card-list">
        {caterpillars.map((card) => (
          <ShopCard card={card} />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Cards;
