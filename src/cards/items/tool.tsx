import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import Chew from "../text/Chew";
import Critter from "../text/Critter";
import Discount from "../text/Discount";
import FastTrack from "../text/FastTrack";
import Seed from "../text/Seed";
import Skewer from "../text/Skewer";
import Sleepy from "../text/Sleepy";

const tools: IFarmCard[] = [
  {
    name: "Farming Gloves",
    image: "/farming_gloves.png",
    ai_image: "/ai/farming_gloves.png",
    notes: "A pair of thick gloves.",
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
        <FastTrack /> a <b>🌱Seed</b>.
      </span>
    ),
    flavour: "So you don't get dirt on your paws.",
  },
  {
    name: "Binoculars",
    image: "/binoculars.png",
    ai_image: "/ai/binoculars.png",
    notes: "A classic pair of binoculars",
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
        Gain +2 🥕. <br /> <FastTrack /> a <Critter /> or a <Seed />.
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
    image: "/water_cooler.png",
    ai_image: "/ai/water_cooler.png",
    notes:
      "A water cooler with a single nozzle. A paper cut sits on the lip. Maybe a drop of water coming from the spout?",
    cost: {
      apples: 2,
      berries: 0,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    refundable: true,
    tags: [
      TAGS.ADD_ZZZ,
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_BERRY,
      TAGS.REMOVE_ZZZ,
    ],
    description: (
      <span>
        Gain +2 🫐. <br /> Move 1 <Sleepy /> from a friendly <Critter /> to any
        other <Critter />.
      </span>
    ),
    flavour: "It's the talk of the town.",
  },
  {
    name: "Small Backpack",
    image: "/small_backpack.png",
    ai_image: "/ai/small_backpack.png",
    notes:
      "A colourful backpack, like for a school kid. The bag is too full of contents that the zipper won't close. Put various things inside the bag.",
    cost: {
      apples: 3,
      berries: 0,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    refundable: true,
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
    name: "Care Package",
    image: "/care_package.png",
    ai_image: "/ai/care_package.png",
    notes:
      "A delivery package, with postage stamps and tape. Etchings of a heart on one side (kinda like the companion cube from portal)",
    cost: {
      apples: 0,
      berries: 3,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [TAGS.FAST_TRACK, TAGS.SELL, TAGS.SELL_FROM_DISCARD],
    description: (
      <span>
        <FastTrack /> 2 cards.
      </span>
    ),
    recycle: (
      <span>
        <b>Sell</b> a card from your discard pile.
      </span>
    ),
    flavour: "Hermes wants you to know how much he cares.",
  },
  {
    name: "Watering Can",
    image: "/watering_can.png",
    ai_image: "/ai/watering_can.png",
    cost: {
      apples: 1,
      berries: 3,
      carrots: 0,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [TAGS.SKEWER, TAGS.ADD_TO_HAND, TAGS.CHOOSE_ONE],
    holdable: true,
    description: (
      <span>
        <Skewer /> a card from your discard pile. <br />
        <b>-OR-</b>
        <br />
        Put 2 <b>🏠Starter</b> cards from your discard pile into your hand.
      </span>
    ),
    flavour: "You're watering your Compost Bin? Well, okay then...",
  },
  {
    name: "Dustpan",
    image: "/dustpan.png",
    ai_image: "/ai/dustpan.png",
    notes: "A classic dustpan, not much else to say",
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
        <b>Refresh</b> a row in the <b>Market</b>.
        <br /> Gain{" "}
        <span className="nowrap">
          <b>+1🍏</b>, <b>+1🫐</b>, <b>+1🥕</b>.
        </span>
        <br />
        <Discount />.
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
    image: "/knapsack.png",
    ai_image: "/ai/knapsack.png",
    notes: "A sack with a drawstring. Avoid making it look like leather.",
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
    image: "/compost_bin.png",
    ai_image: "/ai/compost_bin.png",
    notes: "An open bin filled with soil and old crops.",
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
        <b>Discard</b> every card from your hand. <br />
        Gain{" "}
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
    image: "/toolbelt.png",
    ai_image: "/ai/toolbelt.png",
    notes: "A belt with a hammer, a trowel and a garden fork in little slots",
    cost: {
      apples: 0,
      berries: 1,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [TAGS.CARD_DRAW, TAGS.TOOL_SYNERGY, TAGS.SKEWER],
    holdable: true,
    description: (
      <span>
        <Skewer /> a <b>🛠️Tool</b> from your discard pile.
      </span>
    ),
    recycle: "Draw a card.",
    flavour: "Since Small Backpack is a Tool, do you wear it on your belt?",
  },
  {
    name: "Trusty Trowel",
    image: "/trusty_trowel.png",
    ai_image: "/ai/trusty_trowel.png",
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
      TAGS.PLANT_FROM_DISCARD,
    ],
    description: (
      <span>
        Gain +3 of a random crop.
        <br /> <b>Plant</b> all <Seed plural /> from your discard pile.
      </span>
    ),
    flavour: "This Trowel can keep a secret.",
  },
  {
    name: "Dusty Broom",
    image: "/dusty_broom.png",
    ai_image: "/ai/dusty_broom.png",
    notes:
      "A wooden broom with thick bristles. Lines and spots indicating it is covered in dust",
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
        <Discount />.<br />
        <b>Snatch</b> the discounted crops from a card in the Market, then{" "}
        <b>Refresh</b> that card.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Refresh</b> a card.
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
        <Skewer /> this card.
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
    refundable: true,
    description: (
      <span>
        <FastTrack /> a card.
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
        <Skewer /> an <b>🎒Item</b> from your discard pile.
        <br />
        If it was a <b>🛠️Tool</b>, draw it.
      </span>
    ),
  },
  {
    set: CARD_SET.WOOD_WORK,
    name: "Sandpaper",
    cost: {
      apples: 2,
      berries: 1,
      carrots: 3,
    },
    qty: 1,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [TAGS.CHEW, TAGS.ADD_TO_HAND],
    description: (
      <span>
        <Chew count={3} />, then add one of the chewed cards to your hand.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Trash</b> a card from your discard pile.
      </span>
    ),
  },
  {
    set: CARD_SET.WOOD_WORK,
    name: "Chisel",
    cost: {
      apples: 1,
      berries: 3,
      carrots: 2,
    },
    qty: 1,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [TAGS.FAST_TRACK, TAGS.SKEWER],
    description: (
      <span>
        <FastTrack /> a card, then <Skewer /> a card from your discard pile.
      </span>
    ),
    recycle: (
      <span>
        <Chew count={2} /> from a Rival's deck.
      </span>
    ),
  },
  {
    set: CARD_SET.WOOD_WORK,
    name: "Measuring Tape",
    cost: {
      apples: 3,
      berries: 2,
      carrots: 1,
    },
    qty: 1,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [TAGS.CARD_DRAW],
    holdable: true,
    description: (
      <span>
        Draw a card. If you have less than 3 cards in your deck, draw another
        card.
      </span>
    ),
  },
];

export default tools;
