import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const raccoons: ICard[] = [
  {
    name: "Rummager",
    qty: 2,
    cost: {
      apples: 0,
      carrots: 4,
      berries: 1,
    },
    image: "rummager",
    description: "Discard a card from your hand to draw a card",
    energy: 3,
    type: CARD_TYPE.Raccoon,
    tags: [TAGS.CARD_DRAW, TAGS.DISCARD_OWN],
  },
  {
    name: "Dumpster Diver",
    qty: 2,
    cost: {
      apples: 2,
      carrots: 0,
      berries: 3,
    },
    image: "rummager",
    description: "Refund a starting card from your discard pile.",
    energy: 2,
    type: CARD_TYPE.Raccoon,
    tags: [TAGS.REFUND, TAGS.REFUND_FROM_DISCARD],
  },
  {
    name: "Sticky Fingers",
    qty: 1,
    cost: {
      apples: 5,
      carrots: 1,
      berries: 1,
    },
    image: "rummager",
    description: "Shuffle a card from your discard pile into your deck.",
    energy: 3,
    type: CARD_TYPE.Raccoon,
    tags: [TAGS.SHUFFLE_CARDS],
  },
];

export default raccoons;
