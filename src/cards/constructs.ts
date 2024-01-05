import { CARD_TYPE, ICard } from "../models/cards.models";

const constructs: ICard[] = [
  {
    name: "Scare-crow",
    qty: 3,
    cost: {
      apples: 2,
      berries: 2,
      carrots: 2,
    },
    image: "scare_crow",
    description: "Crows can't destroy your crops.",
    type: CARD_TYPE.Construct,
    durability: 3,
  },
  {
    name: "Scare-Hog",
    qty: 3,
    cost: {
      apples: 2,
      berries: 2,
      carrots: 2,
    },
    image: "scare_hog",
    description: "Hedgehogs can't steal your crops.",
    type: CARD_TYPE.Construct,
    durability: 3,
  },
  {
    name: "Patio",
    qty: 2,
    cost: {
      apples: 3,
      berries: 3,
      carrots: 3,
    },
    image: "patio",
    description: "Moles can't affect your critters.",
    type: CARD_TYPE.Construct,
    durability: 3,
  },
  {
    name: "Combine Harvester",
    qty: 1,
    cost: {
      apples: 2,
      berries: 2,
      carrots: 2,
    },
    image: "combine_harvester",
    description: "Your rabbits harvest +1 crops.",
    type: CARD_TYPE.Construct,
    durability: 3,
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
    description: "Cards you buy are added directly to your hand.",
    type: CARD_TYPE.Construct,
    durability: 2,
  },
];

export default constructs;
