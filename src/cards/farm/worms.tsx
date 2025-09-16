import {
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";

const worms: IFarmCard[] = [
  {
    name: "Fertiliser",
    qty: 2,
    cost: {
      apples: 2,
      berries: 2,
      carrots: 0,
    },
    image: "rummager",
    description: (
      <span>
        Add 1 <b>☀️Sunlight</b> to each of your <b>🌱Seeds</b>.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Fast-track</b> a <b>Seed</b>.
      </span>
    ),
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
    description: (
      <span>
        Put a <b>🌱Seed</b> from your discard pile into your hand.
      </span>
    ),
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
    description: (
      <span>
        Remove 1 <b>☀️Sunlight</b> from ALL <b className="nowrap">🌱Seeds</b>.{" "}
        <br /> Gain a random crop for each <b>☀️Sunlight</b> removed.
      </span>
    ),
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
