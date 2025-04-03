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
    energy: 2,
    type: CARD_TYPE.Hedgehog,
    tags: [TAGS.TOP_OF_DECK],
  },
  {
    name: "Picky Eater",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 3,
      berries: 0,
    },
    image: "rummager",
    energy: 2,
    description: "Shuffle a Treat from your discard pile back into your deck.",
    type: CARD_TYPE.Hedgehog,
    tags: [TAGS.SHUFFLE_CARDS, TAGS.TREAT_SYNERGY],
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
    tags: [TAGS.TOP_OF_DECK, TAGS.GIFT],
  },
];

export default hedgehogs;
