import {
  CARD_SET,
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
    set: CARD_SET.BASE,
    flavour: "She has a Need for Seeds.",
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
    set: CARD_SET.BASE,
    flavour: "He's always soiling himself.",
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
        Remove 1 <b>☀️Sunlight</b> from a <b className="nowrap">🌱Seed</b> to
        gain +2 of a random crop.
      </span>
    ),
    energy: 3,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Worm,
    tags: [
      TAGS.SEED_SYNERGY,
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_RANDOM,
      TAGS.SUNLIGHT_REMOVE,
    ],
    set: CARD_SET.BASE,
    flavour: `Chlorophyll: It's what makes plants green and helps them absorb Sunlight. Now you know!`,
  },
  {
    name: "Transplanter",
    cost: {
      apples: 2,
      berries: 1,
      carrots: 2,
    },
    qty: 2,
    set: CARD_SET.CROWD_FUND,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Worm,
    energy: 3,
    description: (
      <span>
        Move 1 <b>☀️Sunlight</b> from ANY <b className="nowrap">🌱Seed</b> to
        any other <b className="nowrap">🌱Seed</b>.
      </span>
    ),
    tags: [TAGS.SEED_SYNERGY, TAGS.SUNLIGHT_ADD, TAGS.SUNLIGHT_REMOVE],
  },
];

export default worms;
