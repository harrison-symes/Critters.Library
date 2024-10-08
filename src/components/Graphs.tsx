import * as React from "react";
import { createDeck } from "../cards";
import { CARD_TYPE } from "../models/cards.models";
import CostGraph from "./CostGraph";

const Graphs = () => {
  const fullDeck = createDeck();

  return (
    <>
      <div>
        <h1>Full Deck</h1>
        <CostGraph deck={fullDeck} />
        <hr />
      </div>
    </>
  );
};

export default Graphs;
