import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const worms: ICard[] = [
  {
    name: "Fertiliser",
    qty: 2,
    cost: {
      apples: 0,
      carrots: 1,
      berries: 2,
    },
    image: "rummager",
    description:
      "Instantly harvest one of your seeds and shuffle it back into your deck.",
    energy: 2,
    type: CARD_TYPE.Worm,
  },
  {
    name: "Barista",
    qty: 2,
    cost: {
      apples: 3,
      carrots: 2,
      berries: 0,
    },
    image: "rummager",
    description: "Remove 1 Zzz counter from another critter.",
    energy: 3,
    type: CARD_TYPE.Worm,
  },
  {
    name: "Bookworm",
    qty: 1,
    cost: {
      apples: 3,
      carrots: 3,
      berries: 2,
    },
    image: "rummager",
    description: "Perform the talent of one of your other critters.",
    energy: 3,
    type: CARD_TYPE.Worm,
  },
];

export default worms;
