import { CARD_TYPE, ICard } from "../models/cards.models";

const seeds: ICard[] = [
  {
    name: "Carrot Seeds",
    qty: 4,
    cost: {
      carrots: 3,
      apples: 0,
      berries: 0,
    },
    image: "carrot_seeds",
    description: "After 2 turns, Harvest 3 Carrots.",
    type: CARD_TYPE.Seeds,
  },
  {
    name: "Apple Seeds",
    qty: 4,
    cost: {
      apples: 2,
      berries: 0,
      carrots: 1,
    },
    image: "apple_seeds",
    description: "After 2 turns, Harvest 3 Apples.",
    type: CARD_TYPE.Seeds,
  },
  {
    name: "Berry Seeds",
    qty: 4,
    cost: {
      apples: 0,
      berries: 2,
      carrots: 1,
    },
    image: "berry_seeds",
    description: "After 2 turns, Harvest 3 Berries.",
    type: CARD_TYPE.Seeds,
  },
  {
    name: "Mixed Seeds",
    qty: 4,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    image: "mixed_seeds",
    description: "After 2 turns, Harvest 1 of each crop.",
    type: CARD_TYPE.Seeds,
  },
  {
    name: "Coffee Seeds",
    qty: 3,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    image: "coffee_seeds",
    description: "After 2 turns, draw 2 cards.",
    type: CARD_TYPE.Seeds,
  },
  {
    name: "Magic Seeds",
    qty: 1,
    cost: {
      apples: 2,
      berries: 2,
      carrots: 2,
    },
    image: "magic_seeds",
    description: "After 2 turns, Harvest any 5 crops.",
    type: CARD_TYPE.Seeds,
  },
];

export default seeds;
