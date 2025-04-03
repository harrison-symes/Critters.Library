import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const rats: ICard[] = [
  {
    name: "Aristoc-Rat",
    qty: 2,
    cost: {
      apples: 3,
      carrots: 0,
      berries: 2,
    },
    image: "rummager",
    description: "Get a favour from the shop for free",
    energy: 3,
    type: CARD_TYPE.Rat,
    tags: [TAGS.FAVOURS],
  },
  {
    name: "Price Hiker",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 3,
      berries: 1,
    },
    image: "rummager",
    description:
      "Discount 1, then steal the discounted crops from a Farm Card in the shop.",
    energy: 2,
    type: CARD_TYPE.Rat,
    tags: [TAGS.DISCOUNT, TAGS.CROP_GENERATION],
  },
  {
    name: "Hermes",
    qty: 1,
    cost: {
      apples: 1,
      carrots: 3,
      berries: 3,
    },
    image: "rummager",
    description: "Refund a card from your hand to draw a card.",
    energy: 2,
    type: CARD_TYPE.Rat,
    tags: [TAGS.CARD_DRAW, TAGS.REFUND, TAGS.REFUND_FROM_HAND],
  },
];

export default rats;
