import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";

const treats: IFarmCard[] = [
  {
    name: "Rat Food",
    cost: {
      apples: 3,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_APPLE, TAGS.REFRESH],
    sellable: true,
    description: (
      <span>
        Gain +3🍏. <br />
        <b>Refresh</b> 2 cards.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Sell</b> a <b>🏠Starter</b> card from your discard pile.
      </span>
    ),
  },
  {
    name: "Rabbit Food",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_CARROT,
      TAGS.REMOVE_ZZZ,
      TAGS.CARD_DRAW,
    ],
    description: (
      <span>
        Gain +3 🥕. <br />
        Remove 1 💤 from 3 of your <b>🐾Critters</b>.
      </span>
    ),
    recycle: <span>Draw a card.</span>,
  },
  {
    name: "Hog Food",
    cost: {
      apples: 1,
      berries: 3,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_BERRY,
      TAGS.TREAT_SYNERGY,
      TAGS.FAST_TRACK,
      TAGS.TRASH,
      TAGS.TRASH_FROM_DISCARD,
    ],
    description: (
      <span>
        Gain +3 🫐. <br /> <b>Fast-track</b> this or another <b>🧁Treat</b>.
      </span>
    ),
    recycle: (
      <span>
        <b>Trash</b> a card from your discard pile.
      </span>
    ),
  },
  {
    name: "Picnic Basket",
    cost: {
      apples: 2,
      berries: 3,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_ALL,
      TAGS.CROP_GENERATION_RANDOM,
    ],
    description: (
      <span>
        Gain +2 of a random crop. <br /> Gain +1 of each other crop.
      </span>
    ),
    recycle: (
      <span>
        Gain{" "}
        <span className="nowrap">
          <b>+1🍏</b>, <b>+1🫐</b>, <b>+1🥕</b>
        </span>
      </span>
    ),
  },
  {
    name: "Award Winning Crop",
    cost: {
      apples: 3,
      berries: 2,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    sellable: true,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM, TAGS.CARD_DRAW],
    description: "Gain +5 of a random crop.",
    recycle: "Draw 2 cards.",
  },
  {
    name: "Gift Basket",
    cost: {
      apples: 4,
      berries: 4,
      carrots: 4,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_ALL],
    description: (
      <span>
        Gain{" "}
        <span className="nowrap">
          <b>+2🍏</b>, <b>+2🫐</b>, <b>+2🥕</b>
        </span>
      </span>
    ),
    buyBonus: (
      <span>
        Your Rivals each gain{" "}
        <span className="nowrap">
          <b>+1🍏</b>, <b>+1🫐</b>, <b>+1🥕</b>
        </span>
      </span>
    ),
  },
  {
    name: "Pot of Feed",
    cost: {
      apples: 3,
      berries: 3,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [TAGS.CARD_DRAW],
    description: "Draw 2 cards",
  },
  {
    name: "Midnight Snack",
    cost: {
      apples: 2,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [TAGS.CROP_GENERATION, TAGS.CARD_DRAW, TAGS.CROP_GENERATION_RANDOM],
    description: "Gain a random crop. Draw a card.",
    buyBonus: "Each player gains a random crop",
  },
  {
    name: "Pik'n'mix",
    cost: {
      apples: 0,
      berries: 3,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    description: "Gain 3 random crops, then gain a crop of your choosing.",
  },
  {
    name: "Morning Cuppa'",
    cost: {
      apples: 1,
      berries: 2,
      carrots: 0,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    holdable: true,
    tags: [TAGS.REMOVE_ZZZ],
    description: (
      <span>
        Remove all 💤 from one of your <b>🐾Critters</b>.
      </span>
    ),
    recycle: (
      <span>
        <b>Exhaust</b> a Rival's <b>🐾Critter</b>.
      </span>
    ),
  },
  {
    name: "Sharing Plate",
    cost: {
      apples: 2,
      berries: 2,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    description:
      "Gain +4 of a crop of your choosing. Your Rivals each gain +1 of that crop.",
    buyBonus: (
      <span>
        <b>Gift</b> a card from your discard pile.
      </span>
    ),
  },
  {
    name: "Plant Food",
    cost: {
      apples: 3,
      berries: 0,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [TAGS.SEED_SYNERGY, TAGS.ADD_TO_HAND, TAGS.SUNLIGHT_ADD],
    holdable: true,
    description: (
      <span>
        Plant all <b>🌱Seed</b> cards from your discard pile. <br /> Add 1{" "}
        <b>☀️Sunlight</b> to each of your <b>🌱Seeds</b>.
      </span>
    ),
  },
  {
    set: CARD_SET.CROWD_FUND,
    name: "Energy Drink",
    cost: {
      apples: 2,
      berries: 0,
      carrots: 3,
    },
    qty: 1,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_RANDOM,
      TAGS.LESS_REWARDS,
      TAGS.CARD_DRAW,
    ],
    sellable: true,
    description: (
      <span>
        Gain 3 random crops. <br />
        If you have less <b>🏆Rewards</b> than your Rivals, gain 3 more.
      </span>
    ),
    recycle: <span>Draw a card.</span>,
  },
  {
    set: CARD_SET.CROWD_FUND,
    name: "Leftovers",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    holdable: true,
    tags: [TAGS.TREAT_SYNERGY, TAGS.FAST_TRACK],
    description: (
      <span>
        <b>Fast-track</b> this card, and every other <b>🧁Treat</b> from your
        discard pile.
      </span>
    ),
    buyBonus: (
      <span>
        Remove 1 💤 from one of your <b>🐾Critters</b>.
      </span>
    ),
  },
  {
    set: CARD_SET.CROWD_FUND,
    name: "Potluck",
    cost: {
      apples: 1,
      berries: 3,
      carrots: 0,
    },
    qty: 1,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [],
    description: (
      <span>
        Gain +3 of a random crop. <br />
        Your Rivals each gain +1 of that crop type.
      </span>
    ),
  },
];

export default treats;
