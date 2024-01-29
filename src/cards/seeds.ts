import { CARD_TYPE, ICard } from "../models/cards.models";

const seeds: ICard[] = [
  {
    name: "Carrot Seeds",
    qty: 3,
    cost: {
      apples: 0,
      berries: 0,
      carrots: 2,
    },
    image: "carrot_seeds",
    description: "After 2 turns, Harvest 3 Carrots.",
    type: CARD_TYPE.Seeds,
  },
  {
    name: "Apple Seeds",
    qty: 3,
    cost: {
      apples: 2,
      berries: 0,
      carrots: 0,
    },
    image: "apple_seeds",
    description: "After 2 turns, Harvest 3 Apples.",
    type: CARD_TYPE.Seeds,
  },
  {
    name: "Berry Seeds",
    qty: 3,
    cost: {
      apples: 0,
      berries: 2,
      carrots: 0,
    },
    image: "berry_seeds",
    description: "After 2 turns, Harvest 3 Berries.",
    type: CARD_TYPE.Seeds,
  },
  {
    name: "Jumbo Seeds",
    qty: 2,
    cost: {
      apples: 2,
      berries: 2,
      carrots: 2,
    },
    image: "mixed_seeds",
    description: "After 2 turns, Harvest 2 of each crop.",
    type: CARD_TYPE.Seeds,
  },
  {
    name: "Coffee Seeds",
    qty: 2,
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
      apples: 3,
      berries: 3,
      carrots: 3,
    },
    image: "magic_seeds",
    description: "After 2 turns, Harvest 3 of each crop.",
    type: CARD_TYPE.Seeds,
  },
  {
    name: "Infinite Seeds",
    qty: 1,
    cost: {
      apples: 3,
      berries: 3,
      carrots: 3,
    },
    image: "magic_seeds",
    description:
      "After 2 turns, Harvest 2 of each crop then place this on top of your deck.",
    type: CARD_TYPE.Seeds,
  },
];

export default seeds;
