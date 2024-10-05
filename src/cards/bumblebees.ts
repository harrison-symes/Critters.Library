import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const bumblebees: ICard[] = [
  {
    name: "Worker Bee",
    qty: 2,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 3,
    },
    image: "rummager",
    description: "Action: Gain and Pack a crop into your work order.",
    type: CARD_TYPE.BumbleBee,
    energy: 3,
    tags: [TAGS.PACK_WORK_ORDER_1, TAGS.GAIN_CROP_1],
  },
  {
    name: "Pesky Bee",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 3,
      berries: 2,
    },
    image: "rummager",
    description: "Action: Unpack 2 crops from a competitor's work order.",
    type: CARD_TYPE.BumbleBee,
    energy: 2,
    tags: [TAGS.DISRUPT_WORK_ORDER_2],
  },
  {
    name: "The Queen",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 3,
    },
    image: "rummager",
    description:
      "Action: Add a crop from your rival's stash to your work order. Repeat for every 2 Victory Points you have.",
    type: CARD_TYPE.BumbleBee,
    energy: 2,
    tags: [TAGS.TITULAR, TAGS.DRAW_2_CARDS, TAGS.CONDITIONAL_MED],
  },
];

export default bumblebees;
