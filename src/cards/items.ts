import { CARD_TYPE, ICard } from "../models/cards.models";

const items: ICard[] = [
  {
    name: "Fertiliser",
    qty: 3,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 0,
    },
    image: "worm",
    description:
      "Advance your seeds by 1 turn or add a seed card from your discard pile to your hand.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Typhoon",
    qty: 3,
    cost: {
      apples: 1,
      berries: 0,
      carrots: 2,
    },
    image: "typhoon",
    description: "Shuffle a critter back into their owner's deck.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Rotten Crops",
    qty: 3,
    cost: {
      apples: 0,
      berries: 1,
      carrots: 2,
    },
    image: "rotten_crops",
    description:
      "Shuffle this into a competitor's deck when purchased. When drawn, destroys any 2 crops and discard this.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Growth Spurt",
    qty: 3,
    cost: {
      apples: 0,
      berries: 2,
      carrots: 4,
    },
    image: "growth_spurt",
    description: "Draw 2 cards.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Recycling",
    qty: 3,
    cost: {
      apples: 0,
      berries: 1,
      carrots: 1,
    },
    image: "recycling",
    description:
      "Shuffle a card from your discard pile into your deck, then draw a card.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Receipts",
    qty: 3,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 4,
    },
    image: "receipts",
    description: "Refund a card from your hand, then draw a card.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Pesticide",
    qty: 2,
    cost: {
      apples: 2,
      berries: 0,
      carrots: 1,
    },
    image: "pesticide",
    description: "-1 durability to all of a competitor's critters.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Hot Potato",
    qty: 2,
    cost: {
      apples: 0,
      berries: 1,
      carrots: 0,
    },
    image: "hot_potato",
    description:
      "Shuffle this into a competitor's deck when purchased. When drawn, destroy any 3 crops and then shuffle this into a competitor's deck.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Boycott",
    qty: 2,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    image: "protest",
    description:
      "Place this card on top of a card in the shop. This card must be bought to unblock it.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Snatch",
    qty: 2,
    cost: {
      apples: 2,
      berries: 2,
      carrots: 1,
    },
    image: "snatch",
    description: "Steal a crop from a competitor's work order.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Downpour",
    qty: 2,
    cost: {
      apples: 3,
      berries: 3,
      carrots: 3,
    },
    image: "downpour",
    description: "Destroy 1 of each crop from each competitor.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Morning Cuppa",
    qty: 2,
    cost: {
      apples: 3,
      berries: 3,
      carrots: 0,
    },
    image: "morning_cuppa",
    description: "Refresh one of your critters. Draw a card.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Jumper Cables",
    qty: 1,
    cost: {
      apples: 3,
      berries: 3,
      carrots: 4,
    },
    image: "jumper_cables",
    description: "Refresh all of your critters.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Exchange Program",
    qty: 1,
    cost: {
      apples: 2,
      berries: 0,
      carrots: 3,
    },
    image: "exchange_program",
    description: "Swap one of your critters with a competitor's critter.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Blackmail",
    qty: 1,
    cost: {
      apples: 2,
      berries: 2,
      carrots: 3,
    },
    image: "blackmail",
    description:
      "Look at the top card of a competitor's deck. You may buy it from them for the card's shop price.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Bountiful harvest",
    qty: 1,
    cost: {
      apples: 4,
      berries: 4,
      carrots: 4,
    },
    image: "bountiful_harvest",
    description: "Gain any 4 crops.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Machine Claw",
    qty: 1,
    cost: {
      apples: 3,
      berries: 1,
      carrots: 2,
    },
    image: "machine_claw",
    description:
      "Put the top card of a competitor's deck onto the top of your deck (without looking!).",
    type: CARD_TYPE.Item,
  },
];

export default items;
