import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const rabbits: ICard[] = [
  {
    name: "Carrot Grower",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 4,
      berries: 1,
    },
    image: "rummager",
    description: "Gain +2 Carrots",
    energy: 3,
    type: CARD_TYPE.Rabbit,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_CARROT],
  },
  {
    name: "Berry Grower",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 4,
    },
    image: "rummager",
    description: "+2 Berries",
    energy: 3,
    type: CARD_TYPE.Rabbit,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_BERRY],
  },
  {
    name: "Apple Grower",
    qty: 2,
    cost: {
      apples: 4,
      carrots: 1,
      berries: 1,
    },
    image: "rummager",
    description: "+2 Apples",
    energy: 3,
    type: CARD_TYPE.Rabbit,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_APPLE],
  },
  {
    name: "Agriculturiest",
    qty: 2,
    cost: {
      apples: 3,
      carrots: 3,
      berries: 3,
    },
    image: "rummager",
    description: "Gain 3 random crops",
    energy: 3,
    type: CARD_TYPE.Rabbit,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
  },
  {
    name: "Clodhopper",
    qty: 1,
    cost: {
      apples: 5,
      carrots: 5,
      berries: 5,
    },
    image: "rummager",
    description: "Gain 5 random crops",
    energy: 3,
    type: CARD_TYPE.Rabbit,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
  },
  {
    name: "Crop Picker",
    qty: 3,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    image: "rummager",
    description: "Gain +2 of a random crop",
    energy: 3,
    type: CARD_TYPE.Rabbit,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
  },
];

export default rabbits;
