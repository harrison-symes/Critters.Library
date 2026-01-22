import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import Chew, { Chewed } from "../text/Chew";
import Shuffle from "../text/Shuffle";
import Seed from "../text/Seed";

const worms: IFarmCard[] = [
  {
    name: "Fertiliser",
    notes: "A worm wearing a sunhat, looking at a sprouted seedling proudly.",
    qty: 2,
    cost: {
      apples: 2,
      berries: 2,
      carrots: 0,
    },
    description: (
      <span>
        Add 1 <b>☀️Sunlight</b> to each of your <b>🌱Seeds</b>.
      </span>
    ),
    buyBonus: (
      <span>
        <Shuffle /> a <Seed />.
      </span>
    ),
    energy: 3,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Worm,
    tags: [TAGS.SEED_SYNERGY, TAGS.SUNLIGHT_ADD, TAGS.SHUFFLE],
    set: CARD_SET.BASE,
    flavour: "She has a Need for Seeds.",
  },
  {
    name: "Top-Soiler",
    notes:
      "A worm holding a shovel with the end of his tail. Standing over some soil mounds.",
    qty: 2,
    cost: {
      apples: 0,
      berries: 2,
      carrots: 3,
    },
    description: (
      <span>
        <b>Plant</b> a <Seed /> from your discard pile.
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
      TAGS.PLANT_FROM_DISCARD,
    ],
    set: CARD_SET.BASE,
    flavour: "He's always soiling himself.",
  },
  {
    name: "Chloro Phil",
    notes: "A big worm taking a bite out of a Sunflower",
    qty: 1,
    cost: {
      apples: 3,
      berries: 3,
      carrots: 1,
    },
    description: (
      <span>
        Remove 1 <b>☀️Sunlight</b> from ANY one <b className="nowrap">🌱Seed</b>{" "}
        to gain +2 of a random crop.
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
    set: CARD_SET.CHARITY_DRIVE,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Worm,
    energy: 3,
    description: (
      <span>
        Move 1 <b>☀️Sunlight</b> from ANY one <b className="nowrap">🌱Seed</b>{" "}
        to any other <b className="nowrap">🌱Seed</b>.
      </span>
    ),
    tags: [TAGS.SEED_SYNERGY, TAGS.SUNLIGHT_ADD, TAGS.SUNLIGHT_REMOVE],
  },
  {
    name: "Wood Worm",
    cost: {
      apples: 2,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Worm,
    tags: [TAGS.CHEW, TAGS.SEED_SYNERGY, TAGS.PLANT_FROM_DISCARD, TAGS.SHUFFLE],
    description: (
      <span>
        <Chew count={2} />. <br /> <b>Plant</b> any <Seed plural /> that were{" "}
        <Chewed />.
      </span>
    ),
    recycle: (
      <span>
        <Shuffle /> a <Seed />.
      </span>
    ),
    energy: 3,
  },
];

export default worms;
