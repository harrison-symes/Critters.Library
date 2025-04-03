import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const worms: ICard[] = [
  {
    name: "Fertiliser",
    qty: 2,
    cost: {
      apples: 0,
      carrots: 1,
      berries: 3,
    },
    image: "rummager",
    description:
      "Add 1 Sunlight to each of your seeds or shuffle a seed card from your discard pile back into your deck.",
    energy: 3,
    type: CARD_TYPE.Worm,
    tags: [TAGS.SEED_SYNERGY, TAGS.SUNLIGHT_ADD, TAGS.SHUFFLE_CARDS],
  },
  {
    name: "Barista",
    qty: 2,
    cost: {
      apples: 0,
      carrots: 3,
      berries: 2,
    },
    image: "rummager",
    description: "Remove 1 Zzz counter from another critter.",
    energy: 3,
    type: CARD_TYPE.Worm,
    tags: [TAGS.ENERGY_RESTORE],
  },
  {
    name: "Bookworm",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    image: "rummager",
    description: "Perform the talent of one of your other critters.",
    energy: 2,
    type: CARD_TYPE.Worm,
    tags: [],
  },
];

export default worms;
