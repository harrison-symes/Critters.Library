import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const raccoons: ICard[] = [
  {
    name: "Rummager",
    qty: 2,
    cost: {
      apples: 2,
      berries: 0,
      carrots: 3,
    },
    image: "rummager",
    description: "Discard a card from your hand to draw a card",
    buyBonus: "Fast-track a Starter card",
    energy: 2,
    type: CARD_TYPE.Raccoon,
    tags: [TAGS.CARD_DRAW, TAGS.DISCARD_OWN],
  },
  {
    name: "Dumpster Diver",
    qty: 2,
    cost: {
      apples: 2,
      berries: 3,
      carrots: 0,
    },
    image: "rummager",
    description:
      "Discard a card from hand to Sell a different card from your discard pile.",
    energy: 2,
    type: CARD_TYPE.Raccoon,
    tags: [TAGS.REFUND, TAGS.REFUND_FROM_DISCARD, TAGS.DISCARD_OWN],
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
    onDiscard: "Return this to your hand.",
    energy: 3,
    type: CARD_TYPE.Raccoon,
    tags: [TAGS.SHUFFLE_CARDS, TAGS.DISCARD_OWN],
  },
];

export default raccoons;
