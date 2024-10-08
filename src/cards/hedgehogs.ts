import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const hedgehogs: ICard[] = [
  {
    name: "Snuffler",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 0,
      berries: 2,
    },
    image: "rummager",
    description:
      "Place a card from your Rival's discard pile on top of their deck.",
    energy: 3,
    type: CARD_TYPE.Hedgehog,
  },
  {
    name: "Skewer-er",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 3,
      berries: 0,
    },
    image: "rummager",
    energy: 2,
    description: "Discard one of the top 3 cards of your Rival's deck.",
    type: CARD_TYPE.Hedgehog,
  },
  {
    name: "The Head Chog",
    qty: 1,
    cost: {
      apples: 3,
      carrots: 1,
      berries: 3,
    },
    image: "rummager",
    energy: 2,
    description:
      "Put a card from your discard pile on top of your Rival's deck.",
    type: CARD_TYPE.Hedgehog,
  },
];

export default hedgehogs;
