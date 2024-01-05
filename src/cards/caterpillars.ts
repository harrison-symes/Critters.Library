import { CARD_TYPE, ICard } from "../models/cards.models";

const caterpillars: ICard[] = [
  {
    name: "Hungry",
    qty: 2,
    cost: {
      apples: 4,
      berries: 0,
      carrots: 0,
    },
    image: "caterpillar_2",
    description: "Evolves in 2 turns. Evolved: Action: draw a card.",
    type: CARD_TYPE.Caterpillar,
    durability: 2,
  },
  {
    name: "Pilly",
    qty: 2,
    cost: {
      apples: 2,
      berries: 2,
      carrots: 2,
    },
    image: "caterpillar_1",
    description: "Evolves in 2 turns. Evolved: Action: Gain 2 of any crop.",
    type: CARD_TYPE.Caterpillar,
    durability: 2,
  },
];

export default caterpillars;
