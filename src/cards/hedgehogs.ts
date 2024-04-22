import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const hedgehogs: ICard[] = [
  {
    name: "Crop Thief",
    qty: 2,
    cost: {
      apples: 2,
      carrots: 3,
      berries: 0,
    },
    image: "carrot_theif",
    description: "Action: Steal any 1 crop from a competitor.",
    type: CARD_TYPE.Hedgehog,
    energy: 3,
    tags: [TAGS.DESTROY_1_CROP, TAGS.GAIN_CROP_1, TAGS.DIVERSE_CROPS],
  },
  {
    name: "Deviant Hog",
    qty: 2,
    cost: {
      apples: 5,
      carrots: 4,
      berries: 0,
    },
    image: "carrot_theif",
    description: "Action: Steal any 2 crops from a competitor.",
    type: CARD_TYPE.Hedgehog,
    energy: 2,
    tags: [TAGS.DESTROY_2_CROP, TAGS.GAIN_CROP_2, TAGS.DIVERSE_CROPS],
  },
  {
    name: "The Head Chog",
    qty: 1,
    cost: {
      apples: 4,
      carrots: 5,
      berries: 5,
    },
    image: "quilly",
    description:
      "Action: Steal any 2 crops from a competitor's stash or work order.",
    type: CARD_TYPE.Hedgehog,
    energy: 2,
    tags: [
      TAGS.GAIN_CROP_2,
      TAGS.DIVERSE_CROPS,
      TAGS.TITULAR,
      TAGS.DISRUPT_WORK_ORDER_2,
    ],
  },
];

export default hedgehogs;
