import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

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
    type: CARD_TYPE.Worm,
    tags: [TAGS.SEED_SYNERGY, TAGS.SUNLIGHT_ADD, TAGS.SHUFFLE_CARDS],
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
    onDiscard: "Gain +3 of a random crop.",
    energy: 2,
    type: CARD_TYPE.Worm,
    tags: [TAGS.ENERGY_RESTORE],
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
      "Remove all of the sunlight from one of your seeds, gain +2 of a random crop for each sunlight removed.",
    energy: 2,
    type: CARD_TYPE.Worm,
    tags: [],
  },
];

export default worms;
