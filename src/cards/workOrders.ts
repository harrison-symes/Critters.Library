import { IWorkOrder } from "../models/cards.models";

const workOrders: IWorkOrder[] = [
  {
    name: "Carrot Craving",
    image: "carrot_craving",
    requirement: {
      apples: 0,
      berries: 0,
      carrots: 6,
    },
    cost: {
      apples: 0,
      berries: 0,
      carrots: 1,
    },
    qty: 5,
    reward: "Cards you buy cost -1 Carrot.",
    turnLimit: 5,
    victoryPoints: 1,
  },
  {
    name: "Apple Craving",
    image: "apple_craving",
    requirement: {
      apples: 6,
      berries: 0,
      carrots: 0,
    },
    cost: {
      apples: 1,
      berries: 0,
      carrots: 0,
    },
    qty: 5,
    reward: "Cards you buy cost -1 Apple.",
    turnLimit: 5,
    victoryPoints: 1,
  },
  {
    name: "Berry Craving",
    image: "berry_craving",
    requirement: {
      apples: 0,
      berries: 6,
      carrots: 0,
    },
    cost: {
      apples: 0,
      berries: 1,
      carrots: 0,
    },
    qty: 5,
    reward: "Cards you buy cost -1 Berry.",
    turnLimit: 5,
    victoryPoints: 1,
  },
  {
    name: "Jam Pack",
    image: "jam_pack",
    requirement: {
      apples: 3,
      berries: 6,
      carrots: 3,
    },
    cost: {
      apples: 0,
      berries: 2,
      carrots: 0,
    },
    qty: 3,
    reward: "You draw an additional card each turn.",
    turnLimit: 5,
    victoryPoints: 2,
  },
  {
    name: "School Lunch",
    image: "school_lunch",
    requirement: {
      apples: 6,
      berries: 3,
      carrots: 3,
    },
    cost: {
      apples: 2,
      berries: 0,
      carrots: 0,
    },
    qty: 3,
    reward: "You draw an additional card each turn.",
    turnLimit: 5,
    victoryPoints: 2,
  },
  {
    name: "Farm Supplies",
    image: "farm_supplies",
    requirement: {
      apples: 3,
      berries: 3,
      carrots: 6,
    },
    cost: {
      apples: 0,
      berries: 0,
      carrots: 2,
    },
    qty: 3,
    reward: "You draw an additional card each turn.",
    turnLimit: 5,
    victoryPoints: 2,
  },
  {
    name: "Gift Basket",
    image: "gift_basket",
    requirement: {
      apples: 4,
      berries: 4,
      carrots: 4,
    },
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 3,
    reward: "You draw an additional card each turn.",
    turnLimit: 5,
    victoryPoints: 2,
  },
  {
    name: "Creature Comforts",
    image: "creature_comforts",
    requirement: {
      apples: 6,
      berries: 6,
      carrots: 8,
    },
    cost: {
      apples: 2,
      berries: 0,
      carrots: 0,
    },
    qty: 3,
    reward: "Whenever you buy a critter, add it to your hand.",
    turnLimit: 5,
    victoryPoints: 3,
  },
  {
    name: "Spiritual Offering",
    image: "spiritual_offering",
    requirement: {
      apples: 7,
      berries: 7,
      carrots: 6,
    },
    cost: {
      apples: 0,
      berries: 0,
      carrots: 2,
    },
    qty: 1,
    reward: "Your seeds return to your hand when they harvest.",
    turnLimit: 5,
    victoryPoints: 2,
  },
  {
    name: "Tall Order",
    image: "tall_order",
    requirement: {
      apples: 13,
      berries: 11,
      carrots: 6,
    },
    cost: {
      apples: 1,
      berries: 3,
      carrots: 1,
    },
    qty: 1,
    reward: "You draw an extra card each turn.",
    turnLimit: 5,
    victoryPoints: 3,
  },
  {
    name: "Wonky Box",
    image: "wonky_box",
    requirement: {
      apples: 4,
      berries: 8,
      carrots: 18,
    },
    cost: {
      apples: 0,
      berries: 1,
      carrots: 2,
    },
    qty: 1,
    reward: "Whenever you discard a card, draw another one.",
    turnLimit: 5,
    victoryPoints: 3,
  },
  {
    name: "Fair Trade",
    image: "fair_trade",
    requirement: {
      apples: 6,
      berries: 6,
      carrots: 6,
    },
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 2,
    reward: "Cards in the shop cost -1 Carrot, -1 Apple and -1 Berry.",
    turnLimit: 5,
    victoryPoints: 3,
  },
  {
    name: "Family Pack",
    image: "family_pack",
    requirement: {
      apples: 15,
      berries: 15,
      carrots: 20,
    },
    cost: {
      apples: 2,
      berries: 2,
      carrots: 2,
    },
    qty: 1,
    reward: "You draw an extra 2 cards each turn.",
    turnLimit: 5,
    victoryPoints: 3,
  },
];

export default workOrders;
