import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";

const tools: IFarmCard[] = [
  {
    name: "Farming Gloves",
    cost: {
      apples: 0,
      berries: 2,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_APPLE,
      TAGS.SEED_SYNERGY,
      TAGS.SUNLIGHT_ADD,
      TAGS.FAST_TRACK,
    ],
    description: (
      <span>
        Gain +2 🍏.
        <br /> Add 1 <b>☀️Sunlight</b> to each of your <b>🌱Seeds</b>.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Fast-track</b> a <b>🌱Seed</b>.
      </span>
    ),
    flavour: "So you don't get dirt on your paws.",
  },
  {
    name: "Binoculars",
    cost: {
      apples: 2,
      berries: 2,
      carrots: 0,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_CARROT,
      TAGS.FAST_TRACK,
      TAGS.REFRESH,
    ],
    description: (
      <span>
        Gain +2 🥕. <br /> <b>Fast-track</b> a <b>🐾Critter</b>.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Refresh</b> a card.
      </span>
    ),
    flavour:
      "They can be adjusted for Critters with eyes on the sides of their heads.",
  },
  {
    name: "Water Cooler",
    cost: {
      apples: 2,
      berries: 0,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    sellable: true,
    tags: [
      TAGS.ADD_ZZZ,
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_BERRY,
      TAGS.REMOVE_ZZZ,
    ],
    description: (
      <span>
        Gain +2 🫐. <br /> Move 1 💤 from one of your <b>🐾Critters</b> to ANY
        other
        <b>🐾Critter</b>.
      </span>
    ),
    flavour: "It's the talk of the town.",
  },
  {
    name: "Small Backpack",
    cost: {
      apples: 3,
      berries: 0,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    sellable: true,
    tags: [
      TAGS.DISCARD_OWN,
      TAGS.CARD_DRAW,
      TAGS.TRASH,
      TAGS.TRASH_FROM_DISCARD,
    ],
    description: (
      <span>
        <b>Discard</b> a card from hand to draw 2 cards.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Trash</b> a card from your <b>discard</b> pile.
      </span>
    ),
    flavour: `Worms and Bees just call this a "backpack"`,
  },
  {
    name: "Convincing Disguise",
    cost: {
      apples: 0,
      berries: 3,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_STEAL, TAGS.CROP_GENERATION_RANDOM],
    description: (
      <span>
        Gain +2 of a random crop.
        <br /> <b>Steal</b> one of that crop type from each Rival.
      </span>
    ),
    recycle: (
      <span>
        <b>Steal</b> 2 crops from a Rival.
      </span>
    ),
    flavour: "Grandma! What a big nose you have!",
  },
  {
    name: "Watering Can",
    cost: {
      apples: 0,
      berries: 1,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [TAGS.SKEWER],
    holdable: true,
    description: (
      <span>
        <b>Skewer</b> a card from your discard pile.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Skewer</b> this card
      </span>
    ),
    flavour: "You're watering your Compost Bin? Well, okay then...",
  },
  {
    name: "Dustpan",
    cost: {
      apples: 3,
      berries: 2,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [
      TAGS.REFRESH,
      TAGS.RESET_DECK,
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_ALL,
      TAGS.DISCOUNT,
    ],
    description: (
      <span>
        <b>Refresh</b> a row in the Market.
        <br /> Gain{" "}
        <span className="nowrap">
          <b>+1🍏</b>, <b>+1🫐</b>, <b>+1🥕</b>.
        </span>
        <br />
        <b>Discount</b>.
      </span>
    ),
    recycle: (
      <span>
        <b>Reset</b> your deck.
      </span>
    ),
    flavour: "For Spring cleaning, which is what Rabbits call cleaning.",
  },
  {
    name: "Knapsack",
    cost: {
      apples: 3,
      berries: 0,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [
      TAGS.DISCARD_OWN,
      TAGS.CROP_STEAL,
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_RANDOM,
    ],
    description: (
      <span>
        <b>Steal</b> 2 crops from a Rival. <br /> Discard a card from hand to{" "}
        <b>Steal</b> 1 more.
      </span>
    ),
    recycle: "Gain 3 random crops.",
    flavour: "Put the crops in the bag and noone gets sleepy.",
  },
  {
    name: "Compost Bin",
    cost: {
      apples: 1,
      berries: 3,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [TAGS.DISCARD_OWN, TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_ALL],
    description: (
      <span>
        <b>Discard</b> every card from your hand. <br /> Gain{" "}
        <span className="nowrap">
          <b>+1🍏</b>, <b>+1🫐</b>, <b>+1🥕</b>
        </span>{" "}
        for each card discarded.
      </span>
    ),
    recycle: (
      <span>
        Gain{" "}
        <span className="nowrap">
          <b>+1🍏</b>, <b>+1🫐</b>, <b>+1🥕</b>
        </span>
        .
      </span>
    ),
    flavour: "Sure, compost that entire Apple Tree. Go right ahead.",
  },
  {
    name: "Toolbelt",
    cost: {
      apples: 1,
      berries: 3,
      carrots: 0,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [TAGS.CARD_DRAW, TAGS.TOOL_SYNERGY, TAGS.SKEWER],
    holdable: true,
    description: (
      <span>
        <b>Skewer</b> a <b>🛠️Tool</b> from your discard pile.
      </span>
    ),
    recycle: "Draw a card.",
    flavour: "Since Small Backpack is a Tool, do you wear it on your belt?",
  },
  {
    name: "Trusty Trowel",
    cost: {
      apples: 2,
      berries: 2,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_RANDOM,
      TAGS.SEED_SYNERGY,
      TAGS.ADD_TO_HAND,
    ],
    description: (
      <span>
        Gain +3 of a random crop.
        <br /> Put a <b>🌱Seed</b> from your discard pile into your hand.
      </span>
    ),
    flavour: "This Trowel can keep a secret.",
  },
  {
    name: "Dusty Broom",
    cost: {
      apples: 2,
      berries: 1,
      carrots: 0,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [TAGS.DISCOUNT, TAGS.SNATCH_DISCOUNT, TAGS.REFRESH, TAGS.RESET_DECK],
    description: (
      <span>
        <b>Discount</b>.<br />
        <b>Snatch</b> the discounted crops from a card in the Market, then{" "}
        <b>Refresh</b> that card.
      </span>
    ),
    flavour:
      "If you had a Dustpan, you could sweep away the dust from this broom.",
  },
  {
    name: "Charity Case",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.CROWD_FUND,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [],
    description: (
      <span>
        Each of your Rivals must give you a crop or <b>Discard</b> a card from
        their hand.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Skewer</b> this card.
      </span>
    ),
    flavour: "Somewhere to store all your donations.",
  },
  {
    name: "Tipped Scales",
    cost: {
      apples: 3,
      berries: 2,
      carrots: 0,
    },
    qty: 1,
    set: CARD_SET.CROWD_FUND,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [
      TAGS.FAST_TRACK,
      TAGS.LESS_REWARDS,
      TAGS.ADD_TO_HAND,
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_ALL,
    ],
    sellable: true,
    description: (
      <span>
        <b>Fast-track</b> a card.
        <br />
        If you have less <b>🏆Rewards</b> than your Rivals, put the card into
        your hand instead.
      </span>
    ),
    recycle: (
      <span>
        Gain{" "}
        <span className="nowrap">
          <b>+1🍏</b>, <b>+1🫐</b>, <b>+1🥕</b>
        </span>
        .
      </span>
    ),
  },
  {
    name: "Toolbox",
    cost: {
      apples: 0,
      berries: 1,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.CROWD_FUND,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [TAGS.CARD_DRAW, TAGS.SKEWER, TAGS.TOOL_SYNERGY],
    holdable: true,
    description: (
      <span>
        <b>Skewer</b> an <b>🎒Item</b> from your discard pile.
        <br />
        If it was a <b>🛠️Tool</b>, draw it.
      </span>
    ),
  },
];

export default tools;
