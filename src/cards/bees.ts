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
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_ALL, TAGS.WORK_ORDERS_3],
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
    tags: [TAGS.CARD_DRAW, TAGS.WORK_ORDERS_3],
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
      "If you have 3 Work Orders, put a Tool from your discard pile on top of your deck.",
    energy: 2,
    type: CARD_TYPE.Bee,
    tags: [TAGS.WORK_ORDERS_3],
  },
];

export default bees;
