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
    description:
      "Gains 1 Sunlight at the end of each turn. 1 Sunlight: +2 Apples. 2 Sunlight: +3 Apples. 3 Sunlight: +5 Apples.",
    type: CARD_TYPE.Seeds,
    tags: [TAGS.CROP_GENERATION_APPLE],
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
    description:
      "Gains 1 Sunlight at the end of each turn. 1 Sunlight: +2 Berries. 2 Sunlight: +3 Berries. 3 Sunlight: +5 Berries.",
    type: CARD_TYPE.Seeds,
    tags: [TAGS.CROP_GENERATION_BERRY],
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
    description:
      "Gains 1 Sunlight at the end of each turn. 1 Sunlight: +2 Carrots. 2 Sunlight: +3 Carrots. 3 Sunlight: +5 Carrots.",
    type: CARD_TYPE.Seeds,
    tags: [TAGS.CROP_GENERATION_CARROT],
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
    tags: [TAGS.CROP_GENERATION_RANDOM],
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
    tags: [TAGS.CROP_GENERATION_RANDOM],
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
    description:
      "Gains 1 Sunlight at the end of each turn. 1 Sunlight: Draw a card. 2 Sunlight: Draw 2 cards.",
    type: CARD_TYPE.Seeds,
    tags: [TAGS.CARD_DRAW],
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
    description:
      "Gains 1 Sunlight at the end of each turn. 1 Sunlight: Refund a card from hand. 2 Sunlight: Or discard pile",
    type: CARD_TYPE.Seeds,
    tags: [TAGS.REFUND, TAGS.REFUND_FROM_DISCARD, TAGS.REFUND_FROM_HAND],
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
    description:
      "Gains 1 Sunlight at the end of each turn. 2 Sunlight: put a farm card from the shop to your discard pile. 3 Sunlight: Or your hand.",
    type: CARD_TYPE.Seeds,
    tags: [TAGS.FREE_CARD],
  },
];

export default seeds;
