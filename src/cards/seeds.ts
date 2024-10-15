import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const seeds: ICard[] = [
  {
    name: "Apple Seeds",
    qty: 3,
    cost: {
      apples: 3,
      carrots: 0,
      berries: 0,
    },
    image: "rummager",
    description: "After 2 turns gain +4 Apples",
    type: CARD_TYPE.Seeds,
  },
  {
    name: "Berry Seeds",
    qty: 3,
    cost: {
      apples: 0,
      carrots: 0,
      berries: 3,
    },
    image: "rummager",
    description: "After 2 turns gain +4 Berries",
    type: CARD_TYPE.Seeds,
  },
  {
    name: "Carrot Seeds",
    qty: 3,
    cost: {
      apples: 0,
      carrots: 3,
      berries: 0,
    },
    image: "rummager",
    description: "After 2 turns gain +4 Carrots",
    type: CARD_TYPE.Seeds,
  },
  {
    name: "Mystery Seeds",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 1,
    },
    image: "rummager",
    description: "After 2 turns, gain +4 of a random crop",
    type: CARD_TYPE.Seeds,
  },
  {
    name: "Mixed Seeds",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 1,
    },
    image: "rummager",
    description: "After 2 turns, gain 4 random crops.",
    type: CARD_TYPE.Seeds,
  },
  {
    name: "Coffee Seeds",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 1,
    },
    image: "rummager",
    description: "After 2 turns, draw 2 cards.",
    type: CARD_TYPE.Seeds,
  },
  {
    name: "Jumbo Seeds",
    qty: 2,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    image: "rummager",
    description: "After 2 turns, gain +2 of each crop.",
    type: CARD_TYPE.Seeds,
  },
  {
    name: "Magic Seeds",
    qty: 1,
    cost: {
      apples: 3,
      carrots: 3,
      berries: 3,
    },
    image: "rummager",
    description: "After 2 turns, Gain +3 of a random crop, 3 times.",
    type: CARD_TYPE.Seeds,
  },
];

export default seeds;
