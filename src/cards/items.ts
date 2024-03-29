import { CARD_TYPE, ICard } from "../models/cards.models";

const items: ICard[] = [
  {
    name: "Fertiliser",
    qty: 1,
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
    qty: 1,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    image: "typhoon",
    description: "Shuffle a critter or seeds back into their owner's deck.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Rotten Crops",
    qty: 1,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    image: "rotten_crops",
    description:
      "Shuffle this into a competitor's deck when purchased. When drawn, destroys any 2 crops and discard this.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Growth Spurt",
    qty: 1,
    cost: {
      apples: 2,
      berries: 1,
      carrots: 3,
    },
    image: "growth_spurt",
    description: "Draw 2 cards.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Recycling",
    qty: 1,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 0,
    },
    image: "recycling",
    description:
      "Shuffle a card from your discard pile into your deck, then draw a card.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Receipts",
    qty: 1,
    cost: {
      apples: 3,
      carrots: 0,
      berries: 3,
    },
    image: "receipts",
    description: "Refund a card from your hand, then draw a card.",
    type: CARD_TYPE.Item,
  },
  // {
  //   name: "Drought",
  //   qty: 1,
  //   cost: {
  //     apples: 2,
  //     berries: 1,
  //     carrots: 0,
  //   },
  //   image: "drought",
  //   description: "-1 energy from each of a competitor's critters.",
  //   type: CARD_TYPE.Item,
  // },
  {
    name: "Hot Potato",
    qty: 1,
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
  // {
  //   name: "Boycott",
  //   qty: 1,
  //   cost: {
  //     apples: 1,
  //     berries: 1,
  //     carrots: 1,
  //   },
  //   image: "protest",
  //   description:
  //     "Place this card on top of a card in the shop. This card must be bought to unblock it.",
  //   type: CARD_TYPE.Item,
  // },
  {
    name: "Snatch",
    qty: 1,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 0,
    },
    image: "snatch",
    description: "Steal a crop from a competitor's work order.",
    type: CARD_TYPE.Item,
  },
  // {
  //   name: "Downpour",
  //   qty: 1,
  //   cost: {
  //     apples: 0,
  //     berries: 2,
  //     carrots: 3,
  //   },
  //   image: "downpour",
  //   description: "Destroy 1 of each crop from each competitor.",
  //   type: CARD_TYPE.Item,
  // },
  {
    name: "Morning Cuppa",
    qty: 1,
    cost: {
      apples: 4,
      berries: 2,
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
      carrots: 0,
    },
    image: "jumper_cables",
    description: "Refresh all of your critters.",
    type: CARD_TYPE.Item,
  },
  // {
  //   name: "Exchange Program",
  //   qty: 1,
  //   cost: {
  //     apples: 3,
  //     berries: 3,
  //     carrots: 3,
  //   },
  //   image: "exchange_program",
  //   description: "Swap one of your critters with a competitor's critter.",
  //   type: CARD_TYPE.Item,
  // },
  // {
  //   name: "Black Market",
  //   qty: 1,
  //   cost: {
  //     apples: 3,
  //     berries: 4,
  //     carrots: 0,
  //   },
  //   image: "blackmail",
  //   description:
  //     "Replace a card in the shop with a card from a competitor's discard pile.",
  //   type: CARD_TYPE.Item,
  // },
  {
    name: "Bountiful harvest",
    qty: 1,
    cost: {
      apples: 3,
      berries: 3,
      carrots: 3,
    },
    image: "bountiful_harvest",
    description: "Gain 3 of each crop.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Machine Claw",
    qty: 1,
    cost: {
      apples: 3,
      berries: 2,
      carrots: 3,
    },
    image: "machine_claw",
    description:
      "Put the top card of a competitor's deck onto the top of your deck (without looking!).",
    type: CARD_TYPE.Item,
  },
  {
    name: "Morning Tea",
    qty: 1,
    cost: {
      apples: 2,
      berries: 2,
      carrots: 0,
    },
    image: "morning_tea",
    description: "+ 1 Energy to all your critters. Draw a card.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Gift Card",
    qty: 1,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    image: "morning_tea",
    description: "The next card you buy costs -1 of each crop.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Feeding Frenzy",
    qty: 1,
    cost: {
      apples: 3,
      berries: 2,
      carrots: 0,
    },
    image: "morning_tea",
    description: "Draw a card for each of your active critters.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Winds of change",
    qty: 1,
    cost: {
      apples: 3,
      berries: 0,
      carrots: 1,
    },
    image: "morning_tea",
    description:
      "-1 Energy to all of a competitor's critters. +1 Energy to all of yours.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Damaged Goods",
    qty: 1,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 3,
    },
    image: "morning_tea",
    description: "Refund a card from your hand or discard pile",
    type: CARD_TYPE.Item,
  },
  {
    name: "Rummage",
    qty: 1,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    image: "rummager",
    description: "Draw 2 cards, then discard a card.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Time out",
    qty: 1,
    cost: {
      apples: 2,
      berries: 1,
      carrots: 0,
    },
    image: "rummager",
    description:
      "Exhaust one of your critters, draw a card for each energy they had left.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Spring Cleaning",
    qty: 1,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 0,
    },
    image: "rummager",
    description:
      "Look at the top card of your deck, you may refund it or draw it.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Stash",
    qty: 1,
    cost: {
      apples: 0,
      berries: 3,
      carrots: 1,
    },
    image: "rummager",
    description: "Gain any 2 crops and add them to your work order.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Haul",
    qty: 1,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    image: "rummager",
    description: "Gain +1 of each crop.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Fire Sale!",
    qty: 1,
    cost: {
      apples: 0,
      berries: 1,
      carrots: 1,
    },
    image: "rummager",
    description: "Whenever you buy a card this turn, draw a card.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Companion Crop",
    qty: 1,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 0,
    },
    image: "rummager",
    description:
      "Place this card under one of your seeds. The seed will harvest twice!",
    type: CARD_TYPE.Item,
  },
  {
    name: "Survey",
    qty: 1,
    cost: {
      apples: 0,
      berries: 1,
      carrots: 1,
    },
    image: "rummager",
    description:
      "Look at the top 3 cards of your deck. Draw one and discard the others.",
    type: CARD_TYPE.Item,
  },
];

export default items;
