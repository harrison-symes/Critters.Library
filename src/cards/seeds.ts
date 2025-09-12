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
    description: "Gains 1 Sunlight at the end of each turn.",
    type: CARD_TYPE.Seeds,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_APPLE],
    sunlight: {
      one: "+2 Apples",
      two: "+4 Apples",
      three: "+5 Apples",
    },
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
    description: "Gains 1 Sunlight at the end of each turn.",
    type: CARD_TYPE.Seeds,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_BERRY],
    sunlight: {
      one: "+2 Berries",
      two: "+4 Berries",
      three: "+5 Berries",
    },
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
    description: "Gains 1 Sunlight at the end of each turn.",
    type: CARD_TYPE.Seeds,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_CARROT],
    sunlight: {
      one: "+2 Carrots",
      two: "+4 Carrots",
      three: "+5 Carrots",
    },
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
    description:
      "Gains 1 Sunlight at the end of each turn. 1 Sunlight: 1 random crop. 2 Sunlight: 3 of a random crop. 3 Sunlight: 4 of a random crop.",
    type: CARD_TYPE.Seeds,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    sunlight: {
      one: "+1 of a random crop.",
      two: "+3 of a random crop.",
      three: "+5 of a random crop.",
    },
  },
  {
    name: "Mixed Seeds",
    qty: 2,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    image: "rummager",
    description:
      "Gains 1 Sunlight at the end of each turn. 1 Sunlight: 2 random crops. 2 Sunlight: 4 random crops. 3 Sunlight: 5 random crops.",
    type: CARD_TYPE.Seeds,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    sunlight: {
      one: "Gain 2 random crops.",
      two: "Gain 4 random crops.",
      three: "Gain 5 random crops.",
    },
  },
  {
    name: "Coffee Seeds",
    qty: 2,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    image: "rummager",
    description: "Gains 1 Sunlight at the end of each turn.",
    type: CARD_TYPE.Seeds,
    tags: [TAGS.CARD_DRAW],
    sunlight: {
      two: "Draw a card.",
      three: "Draw 2 cards.",
    },
  },
  {
    name: "Vanishing Seeds",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 1,
    },
    image: "rummager",
    description: "Gains 1 Sunlight at the end of each turn.",
    type: CARD_TYPE.Seeds,
    tags: [TAGS.SELL, TAGS.SELL_FROM_DISCARD, TAGS.SELL_FROM_HAND],
    sunlight: {
      two: "Sell a card from your hand...",
      three: "...or discard pile.",
    },
  },
  {
    name: "Sunflower Seeds",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 1,
    },
    image: "rummager",
    description: "Gains 1 Sunlight at the end of each turn.",
    type: CARD_TYPE.Seeds,
    tags: [TAGS.SUNLIGHT_ADD, TAGS.TOP_OF_DECK, TAGS.SEED_SYNERGY],
    sunlight: {
      two: "Add 2 Sunlight to each of your Seeds...",
      three: "...And put this card on top of your deck.",
    },
  },
  {
    name: "Magic Seeds",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    image: "rummager",
    description: "Gains 1 Sunlight at the end of each turn.",
    type: CARD_TYPE.Seeds,
    tags: [TAGS.FREE_CARD, TAGS.TOP_OF_DECK],
    sunlight: {
      two: "Put a Farm card from the Market into your discard pile...",
      three: "...or on top of your deck.",
    },
  },
];

export default seeds;
