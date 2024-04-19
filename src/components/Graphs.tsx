import * as React from "react";
import { createDeck } from "../cards";
import { CARD_TYPE } from "../models/cards.models";
import CostGraph from "./CostGraph";

const Graphs = () => {
  const fullDeck = createDeck();

  const items = fullDeck.filter((card) => card.type === CARD_TYPE.Item);
  const critters = fullDeck.filter((card) => card.type !== CARD_TYPE.Item);
  return (
    <>
      <div>
        <h1>Full Deck</h1>
        <CostGraph deck={fullDeck} />
        <hr />
      </div>
      <div>
        <h1>Items</h1>
        <CostGraph deck={items} />
        <hr />
      </div>
      <div>
        <h1>Critters</h1>
        <CostGraph deck={critters} />
        <hr />
      </div>
    </>
  );
};

export default Graphs;
