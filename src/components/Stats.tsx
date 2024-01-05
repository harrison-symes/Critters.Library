import * as React from "react";
import { CARD_TYPE, ICard } from "../models/cards.models";
import { createWorkOrderDeck } from "../cards";

interface IProps {
  deck: ICard[];
  shopDeck: ICard[];
  recreate: () => void;
}

const Stats = (props: IProps) => {
  const countType = (type: CARD_TYPE) => {
    return props.deck.filter((card) => card.type === type).length;
  };

  const carrotCostTotal = props.deck.reduce(
    (accum, card) => accum + (card.cost.carrots ?? 0),
    0
  );
  const berryCostTotal = props.deck.reduce(
    (accum, card) => accum + (card.cost.berries ?? 0),
    0
  );
  const appleCostTotal = props.deck.reduce(
    (accum, card) => accum + (card.cost.apples ?? 0),
    0
  );
  const workOrderTotal = createWorkOrderDeck().length;
  const workOrderTotalVP = createWorkOrderDeck().reduce(
    (accum, card) => accum + card.victoryPoints,
    0
  );

  return (
    <div className="stats">
      <button className="button button__big" onClick={props.recreate}>
        Re-create
      </button>
      <div>Deck total: {props.deck.length}</div>
      <div>Deck remaining: {props.shopDeck.length}</div>
      <hr />
      <div>
        Carrot cost: {carrotCostTotal}. Avg{" "}
        {Math.round((carrotCostTotal / props.deck.length) * 100) / 100}
      </div>
      <div>
        Berry cost: {berryCostTotal}. Avg{" "}
        {Math.round((berryCostTotal / props.deck.length) * 100) / 100}
      </div>
      <div>
        Apples cost: {appleCostTotal}. Avg{" "}
        {Math.round((appleCostTotal / props.deck.length) * 100) / 100}
      </div>
      <div>Work Order Total: {workOrderTotal}.</div>
      <div>Work Order VP Total: {workOrderTotalVP}.</div>
      <hr />

      <hr />
      <div>Items: {countType(CARD_TYPE.Item)}</div>
      <div>Seeds: {countType(CARD_TYPE.Seeds)}</div>
      <div>Constructs: {countType(CARD_TYPE.Construct)}</div>
      <div>Rabbits: {countType(CARD_TYPE.Rabbit)}</div>
      <div>Rats: {countType(CARD_TYPE.Rat)}</div>
      <div>Moles: {countType(CARD_TYPE.Mole)}</div>
      <div>Hedgehogs: {countType(CARD_TYPE.Hedgehog)}</div>
      <div>Crows: {countType(CARD_TYPE.Crow)}</div>
      <div>Raccoons: {countType(CARD_TYPE.Raccoon)}</div>
      <div>Caterpillars: {countType(CARD_TYPE.Caterpillar)}</div>
    </div>
  );
};

export default Stats;
