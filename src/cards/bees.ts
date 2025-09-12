import { CARD_SUBTYPE, CARD_TYPE, ICard, TAGS } from "../models/cards.models";

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
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Bee,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_ALL, TAGS.WORK_ORDERS_3],
  },
  {
    name: "Pesky Bee",
    qty: 2,
    cost: {
      apples: 3,
      carrots: 3,
      berries: 3,
    },
    image: "rummager",
    description:
      "If you have 3 work orders, Steal 1 of each crop from a Rival.",
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Bee,
    tags: [TAGS.CROP_STEAL, TAGS.WORK_ORDERS_3],
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
      "If you have 3 Work Orders, Fast-track a Critter, Seed and Item card.",
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Bee,
    tags: [TAGS.WORK_ORDERS_3, TAGS.FAST_TRACK],
  },
];

export default bees;
