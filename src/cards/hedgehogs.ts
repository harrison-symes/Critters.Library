import { CARD_TYPE, ICard } from "../models/cards.models";

const hedgehogs: ICard[] = [
  {
    name: "Crop Thief",
    qty: 2,
    cost: {
      apples: 2,
      berries: 0,
      carrots: 3,
    },
    image: "carrot_theif",
    description: "Action: Steal any 1 crop from a competitor.",
    type: CARD_TYPE.Hedgehog,
    energy: 3,
  },
  {
    name: "Deviant Hog",
    qty: 2,
    cost: {
      apples: 0,
      carrots: 4,
      berries: 5,
    },
    image: "carrot_theif",
    description: "Action: Steal any 2 crops from a competitor.",
    type: CARD_TYPE.Hedgehog,
    energy: 3,
  },
  {
    name: "The Head Chog",
    qty: 1,
    cost: {
      apples: 5,
      carrots: 4,
      berries: 3,
    },
    image: "quilly",
    description: "Action: Steal any 3 crops from a competitor.",
    type: CARD_TYPE.Hedgehog,
    energy: 3,
  },
  // {
  //   name: "Carrot Thief",
  //   qty: 2,
  //   cost: {
  //     apples: 2,
  //     berries: 0,
  //     carrots: 3,
  //   },
  //   image: "carrot_theif",
  //   description: "Action: Steal 1 Carrot from a competitor.",
  //   type: CARD_TYPE.Hedgehog,
  //   energy: 3,
  // },
  // {
  //   name: "Berry Thief",
  //   qty: 2,
  //   cost: {
  //     apples: 0,
  //     berries: 3,
  //     carrots: 2,
  //   },
  //   image: "berry_theif",
  //   description: "Action: Steal 1 Berry from a competitor.",
  //   type: CARD_TYPE.Hedgehog,
  //   energy: 3,
  // },
  // {
  //   name: "Apple Thief",
  //   qty: 2,
  //   cost: {
  //     apples: 3,
  //     berries: 2,
  //     carrots: 0,
  //   },
  //   image: "apple_theif",
  //   description: "Action: Steal 1 Apple from a competitor.",
  //   type: CARD_TYPE.Hedgehog,
  //   energy: 3,
  // },
];

export default hedgehogs;
