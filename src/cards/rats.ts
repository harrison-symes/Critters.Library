import { CARD_SUBTYPE, CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const rats: ICard[] = [
  {
    name: "Aristoc-Rat",
    qty: 2,
    cost: {
      apples: 2,
      berries: 3,
      carrots: 0,
    },
    image: "rummager",
    description: "Get a favour from the shop for free. -OR- Discount.",
    buyBonus: "Refresh a card.",
    energy: 3,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rat,
    tags: [TAGS.FREE_FAVOUR, TAGS.DISCOUNT, TAGS.REFRESH],
  },
  {
    name: "Price Hiker",
    qty: 2,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 3,
    },
    image: "rummager",
    description:
      "Discount 1, then steal the discounted crops from a Farm Card in the shop.",
    buyBonus: "Refresh a card.",
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rat,
    tags: [TAGS.DISCOUNT, TAGS.SNATCH_DISCOUNT, TAGS.REFRESH],
  },
  {
    name: "Hermes",
    qty: 1,
    cost: {
      apples: 3,
      berries: 1,
      carrots: 3,
    },
    image: "rummager",
    description: "Sell a card from your hand to draw a card.",
    buyBonus: "Fast-track a card.",
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rat,
    tags: [TAGS.CARD_DRAW, TAGS.SELL, TAGS.SELL_FROM_HAND, TAGS.FAST_TRACK],
  },
];

export default rats;
