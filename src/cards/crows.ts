import { CARD_TYPE, ICard } from "../models/cards.models";

const crows: ICard[] = [
  {
    name: "Carrot Cruncher",
    qty: 3,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 5,
    },
    image: "carrot_cruncher",
    description: "Action: destroy 2 of a competitor's Carrots.",
    type: CARD_TYPE.Crow,
    durability: 2,
  },
  {
    name: "Apple Gourger",
    qty: 3,
    cost: {
      apples: 4,
      berries: 1,
      carrots: 3,
    },
    image: "apple_gourger",
    description: "Action: destroy 2 of a competitor's Apples.",
    type: CARD_TYPE.Crow,
    durability: 2,
  },
  {
    name: "Berry Pecker",
    qty: 3,
    cost: {
      apples: 1,
      berries: 4,
      carrots: 3,
    },
    image: "berry_pecker",
    description: "Action: destroy 2 of a competitor's Berries.",
    type: CARD_TYPE.Crow,
    durability: 2,
  },
  {
    name: "Corvus",
    qty: 1,
    cost: {
      apples: 4,
      berries: 4,
      carrots: 6,
    },
    image: "corvus",
    description: "Action: destroy any 3 of a competitor's crops.",
    type: CARD_TYPE.Crow,
    durability: 2,
  },
];

export default crows;
