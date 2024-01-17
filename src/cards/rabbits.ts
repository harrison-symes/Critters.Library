import { CARD_TYPE, ICard } from "../models/cards.models";

const rabbits: ICard[] = [
  {
    name: "Carrot Tender",
    qty: 3,
    cost: {
      apples: 0,
      berries: 0,
      carrots: 3,
    },
    image: "carrot_tender",
    description: "Action: Gain 1 Carrots.",
    type: CARD_TYPE.Rabbit,
    energy: 3,
  },
  {
    name: "Carrot Grower",
    qty: 2,
    cost: {
      apples: 0,
      berries: 2,
      carrots: 5,
    },
    image: "carrot_grower",
    description: "Action: Gain 2 Carrots.",
    type: CARD_TYPE.Rabbit,
    energy: 3,
  },
  {
    name: "Carrot Rancher",
    qty: 2,
    cost: {
      apples: 2,
      berries: 2,
      carrots: 7,
    },
    image: "carrot_rancher",
    description: "Action: Gain 3 Carrots.",
    type: CARD_TYPE.Rabbit,
    energy: 3,
  },
  {
    name: "Apple Tender",
    qty: 3,
    cost: {
      apples: 3,
      berries: 0,
      carrots: 0,
    },
    image: "apple_tender",
    description: "Action: Gain 1 Apple.",
    type: CARD_TYPE.Rabbit,
    energy: 3,
  },
  {
    name: "Apple Grower",
    qty: 2,
    cost: {
      apples: 5,
      berries: 0,
      carrots: 2,
    },
    image: "apple_grower",
    description: "Action: Gain 2 Apples.",
    type: CARD_TYPE.Rabbit,
    energy: 3,
  },
  {
    name: "Apple Rancher",
    qty: 2,
    cost: {
      apples: 7,
      berries: 2,
      carrots: 2,
    },
    image: "apple_rancher",
    description: "Action: Gain 3 Apples.",
    type: CARD_TYPE.Rabbit,
    energy: 3,
  },
  {
    name: "Berry Tender",
    qty: 3,
    cost: {
      apples: 0,
      berries: 3,
      carrots: 0,
    },
    image: "berry_tender",
    description: "Action: Gain 1 Berry.",
    type: CARD_TYPE.Rabbit,
    energy: 3,
  },
  {
    name: "Berry Grower",
    qty: 2,
    cost: {
      apples: 2,
      berries: 5,
      carrots: 0,
    },
    image: "berry_grower",
    description: "Action: Gain 2 Berries.",
    type: CARD_TYPE.Rabbit,
    energy: 3,
  },
  {
    name: "Berry Rancher",
    qty: 2,
    cost: {
      apples: 2,
      berries: 7,
      carrots: 2,
    },
    image: "berry_rancher",
    description: "Action: Gain 3 Berries.",
    type: CARD_TYPE.Rabbit,
    energy: 3,
  },
  {
    name: "Agriculturist",
    qty: 3,
    cost: {
      apples: 3,
      berries: 3,
      carrots: 3,
    },
    image: "agriculturist",
    description: "Action: Gain 1 of each crop.",
    type: CARD_TYPE.Rabbit,
    energy: 3,
  },
  {
    name: "Clodhopper",
    qty: 1,
    cost: {
      apples: 6,
      berries: 6,
      carrots: 6,
    },
    image: "clodhopper",
    description: "Action: Gain 2 of each crop.",
    type: CARD_TYPE.Rabbit,
    energy: 3,
  },
];

export default rabbits;
