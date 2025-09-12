import { CARD_SUBTYPE, CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const worms: ICard[] = [
  {
    name: "Fertiliser",
    qty: 2,
    cost: {
      apples: 2,
      berries: 2,
      carrots: 0,
    },
    image: "rummager",
    description: "Add 1 Sunlight to each of your seeds",
    buyBonus: "Fast-track a Seed",
    energy: 3,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Worm,
    tags: [TAGS.SEED_SYNERGY, TAGS.SUNLIGHT_ADD, TAGS.FAST_TRACK],
  },
  {
    name: "Top-Soiler",
    qty: 2,
    cost: {
      apples: 0,
      berries: 2,
      carrots: 3,
    },
    image: "rummager",
    description: "Put a Seeds card from your discard pile into your hand.",
    recycle: "Gain +3 of a random crop.",
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Worm,
    tags: [
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_RANDOM,
      TAGS.SEED_SYNERGY,
      TAGS.ADD_TO_HAND,
    ],
  },
  {
    name: "Chloro Phil",
    qty: 1,
    cost: {
      apples: 3,
      berries: 3,
      carrots: 1,
    },
    image: "rummager",
    description:
      "Remove all of the sunlight from a seed card, gain a random crop for each sunlight removed. If the Seed was yours, add 2 Sunlight to it.",
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Worm,
    tags: [
      TAGS.SEED_SYNERGY,
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_RANDOM,
      TAGS.SUNLIGHT_ADD,
    ],
  },
];

export default worms;
