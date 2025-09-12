import { CARD_SUBTYPE, CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const raccoons: ICard[] = [
  {
    name: "Rummager",
    qty: 2,
    cost: {
      apples: 1,
      berries: 3,
      carrots: 1,
    },
    image: "rummager",
    description: "Discard a card from your hand to draw a card",
    buyBonus: "Fast-track a Starter card",
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Raccoon,
    tags: [TAGS.CARD_DRAW, TAGS.DISCARD_OWN, TAGS.FAST_TRACK],
  },
  {
    name: "Dumpster Diver",
    qty: 2,
    cost: {
      apples: 3,
      berries: 0,
      carrots: 2,
    },
    image: "rummager",
    description:
      "Discard a card from hand to Sell a different card from your discard pile.",
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Raccoon,
    tags: [TAGS.SELL, TAGS.SELL_FROM_DISCARD, TAGS.DISCARD_OWN],
  },
  {
    name: "Sticky Fingers",
    qty: 1,
    cost: {
      apples: 1,
      berries: 3,
      carrots: 3,
    },
    image: "rummager",
    description:
      "Discard a card from hand, then return that card to your hand.",
    recycle: "Put this card into your hand.",
    energy: 3,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Raccoon,
    tags: [TAGS.DISCARD_OWN, TAGS.ADD_TO_HAND],
  },
];

export default raccoons;
