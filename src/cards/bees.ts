import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const bees: ICard[] = [
  {
    name: "Worker Bee",
    qty: 2,
    cost: {
      apples: 3,
      carrots: 3,
      berries: 3,
    },
    image: "rummager",
    description: "If you have 3 work orders, gain +1 of each crop.",
    energy: 3,
    type: CARD_TYPE.Bee,
  },
  {
    name: "Busy Bee",
    qty: 2,
    cost: {
      apples: 3,
      carrots: 3,
      berries: 3,
    },
    image: "rummager",
    description: "If you have 3 work orders, draw a card.",
    energy: 3,
    type: CARD_TYPE.Bee,
  },
  {
    name: "Plan Bee",
    qty: 1,
    cost: {
      apples: 3,
      carrots: 3,
      berries: 3,
    },
    image: "rummager",
    description:
      "If you have 3 work orders, steal a crate from one of your Rival's Work Orders and add it to one of yours.",
    energy: 2,
    type: CARD_TYPE.Bee,
  },
];

export default bees;
