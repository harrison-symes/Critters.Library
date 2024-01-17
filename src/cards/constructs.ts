import { CARD_TYPE, ICard } from "../models/cards.models";

const constructs: ICard[] = [
  {
    name: "Scare-crow",
    qty: 1,
    cost: {
      apples: 2,
      berries: 0,
      carrots: 1,
    },
    image: "scare_crow",
    description: "Block a crow from destroying your crops. -1 Durability.",
    type: CARD_TYPE.Construct,
    energy: 3,
  },
  {
    name: "Scare-Hog",
    qty: 1,
    cost: {
      apples: 1,
      berries: 2,
      carrots: 0,
    },
    image: "scare_hog",
    description: "Block a hedgehog from stealing your crops. -1 Durability.",
    type: CARD_TYPE.Construct,
    energy: 3,
  },
  {
    name: "Patio",
    qty: 1,
    cost: {
      apples: 0,
      berries: 1,
      carrots: 2,
    },
    image: "patio",
    description: "Block a Mole's action. -1 Durability.",
    type: CARD_TYPE.Construct,
    energy: 3,
  },
  {
    name: "Break Room",
    qty: 1,
    cost: {
      apples: 2,
      berries: 2,
      carrots: 2,
    },
    image: "break_room",
    description:
      "When a critter is exhausted, you may place it on top of your deck. -1 Durability.",
    type: CARD_TYPE.Construct,
    energy: 3,
  },
  {
    name: "Rat-God Shrine",
    qty: 1,
    cost: {
      apples: 3,
      berries: 3,
      carrots: 3,
    },
    image: "rat_god_shrine",
    description:
      "When you buy a card, you may add it to your hand. -1 Durability.",
    type: CARD_TYPE.Construct,
    energy: 3,
  },
];

export default constructs;
