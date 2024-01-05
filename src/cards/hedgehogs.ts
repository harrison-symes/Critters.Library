import { CARD_TYPE, ICard } from "../models/cards.models";

const hedgehogs: ICard[] = [
  {
    name: "Carrot Thief",
    qty: 3,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 4,
    },
    image: "carrot_theif",
    description: "Action: Steal 1 Carrot from a competitor.",
    type: CARD_TYPE.Hedgehog,
    durability: 1,
  },
  {
    name: "Berry Thief",
    qty: 2,
    cost: {
      apples: 1,
      berries: 3,
      carrots: 2,
    },
    image: "berry_theif",
    description: "Action: Steal 1 Berry from a competitor.",
    type: CARD_TYPE.Hedgehog,
    durability: 1,
  },
  {
    name: "Apple Thief",
    qty: 2,
    cost: {
      apples: 3,
      berries: 1,
      carrots: 2,
    },
    image: "apple_theif",
    description: "Action: Steal 1 Apple from a competitor.",
    type: CARD_TYPE.Hedgehog,
    durability: 1,
  },
  {
    name: "Quilly",
    qty: 1,
    cost: {
      apples: 4,
      berries: 4,
      carrots: 4,
    },
    image: "quilly",
    description: "Action: Steal 2 crops from a competitor's work order.",
    type: CARD_TYPE.Hedgehog,
    durability: 2,
  },
];

export default hedgehogs;
