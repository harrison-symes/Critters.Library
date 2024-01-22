import { CARD_TYPE, ICard } from "../models/cards.models";

const bumblebees: ICard[] = [
  {
    name: "Worker Bee",
    qty: 2,
    cost: {
      apples: 3,
      carrots: 3,
      berries: 0,
    },
    image: "rummager",
    description: "Action: Gain and Pack a crop into your work order.",
    type: CARD_TYPE.BumbleBee,
    energy: 3,
  },
  {
    name: "Pesky Bee",
    qty: 2,
    cost: {
      apples: 0,
      carrots: 3,
      berries: 3,
    },
    image: "rummager",
    description: "Action: Unpack 2 crops from a competitor's work order.",
    type: CARD_TYPE.BumbleBee,
    energy: 3,
  },
  {
    name: "Pollen Spreader",
    qty: 2,
    cost: {
      apples: 4,
      carrots: 2,
      berries: 4,
    },
    image: "rummager",
    description: "Action: Draw a card for each work order your have completed.",
    type: CARD_TYPE.BumbleBee,
    energy: 2,
  },
  {
    name: "The Queen",
    qty: 1,
    cost: {
      apples: 3,
      carrots: 2,
      berries: 4,
    },
    image: "rummager",
    description:
      "Action: Steal 2 crops from a competitor's work order. You may add them to yours.",
    type: CARD_TYPE.BumbleBee,
    energy: 2,
  },
];

export default bumblebees;
