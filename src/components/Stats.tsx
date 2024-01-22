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
  const countCost = (cost: number) => {
    return props.deck.filter(
      (card) =>
        card.cost.apples + card.cost.carrots + card.cost.berries === cost
    ).length;
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

  const cardsThatCostAllThree = props.deck.reduce(
    (accum, card) =>
      card.cost.apples > 0 && card.cost.berries > 0 && card.cost.berries > 0
        ? accum + 1
        : accum,
    0
  );
  const appleAndCarrot = props.deck.reduce(
    (accum, card) =>
      card.cost.apples > 0 && card.cost.berries === 0 && card.cost.carrots > 0
        ? accum + 1
        : accum,
    0
  );
  const berryAndCarrot = props.deck.reduce(
    (accum, card) =>
      card.cost.apples === 0 && card.cost.berries > 0 && card.cost.carrots > 0
        ? accum + 1
        : accum,
    0
  );
  const appleAndBerry = props.deck.reduce(
    (accum, card) =>
      card.cost.apples > 0 && card.cost.berries > 0 && card.cost.carrots === 0
        ? accum + 1
        : accum,
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
      <hr />
      <div>
        Cards that cost all 3 crops: {cardsThatCostAllThree} /{" "}
        {props.deck.length}.
      </div>
      <div>
        Apple and Berry: {appleAndBerry} / {props.deck.length}.
      </div>
      <div>
        Carrot and Berry: {berryAndCarrot} / {props.deck.length}.
      </div>
      <div>
        Apple and Carrot: {appleAndCarrot} / {props.deck.length}.
      </div>
      <hr />
      <div>Work Order Total: {workOrderTotal}.</div>
      <div>Work Order VP Total: {workOrderTotalVP}.</div>

      <hr />
      <div>Cost (1 - 3): {countCost(1) + countCost(2) + countCost(3)}</div>
      <div>Cost (4 - 6): {countCost(4) + countCost(5) + countCost(6)}</div>
      <div>Cost (7 - 9): {countCost(7) + countCost(8) + countCost(9)}</div>
      <div>Cost (10 - 15): {countCost(10) + countCost(11) + countCost(12)}</div>
      <div>Cost (1): {countCost(1)}</div>
      <div>Cost (2): {countCost(2)}</div>
      <div>Cost (3): {countCost(3)}</div>
      <div>Cost (4): {countCost(4)}</div>
      <div>Cost (5): {countCost(5)}</div>
      <div>Cost (6): {countCost(6)}</div>
      <div>Cost (7): {countCost(7)}</div>
      <div>Cost (8): {countCost(8)}</div>
      <div>Cost (9): {countCost(9)}</div>
      <div>Cost (10): {countCost(10)}</div>
      <div>Cost (11): {countCost(11)}</div>
      <div>Cost (12): {countCost(12)}</div>
      <div>Cost (13): {countCost(13)}</div>
      <div>Cost (14): {countCost(14)}</div>
      <hr />
      <div>Items: {countType(CARD_TYPE.Item)}</div>
      <div>Seeds: {countType(CARD_TYPE.Seeds)}</div>
      <div>Constructs: {countType(CARD_TYPE.Construct)}</div>
      <div>Rabbits: {countType(CARD_TYPE.Rabbit)}</div>
      <div>Rats: {countType(CARD_TYPE.Rat)}</div>
      <div>Moles: {countType(CARD_TYPE.Mole)}</div>
      <div>Hedgehogs: {countType(CARD_TYPE.Hedgehog)}</div>
      <div>Bees: {countType(CARD_TYPE.BumbleBee)}</div>
      <div>Raccoons: {countType(CARD_TYPE.Raccoon)}</div>
      <div>Caterpillars: {countType(CARD_TYPE.Caterpillar)}</div>
    </div>
  );
};

export default Stats;
