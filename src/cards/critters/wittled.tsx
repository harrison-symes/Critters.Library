import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import Chew, { Chewed } from "../text/Chew";
import Discount from "../text/Discount";
import Seed from "../text/Seed";
import Sunlight from "../text/Sunlight";

const whittled: IFarmCard[] = [
  {
    name: "Whittle Rat",
    image: "/whittle_rat.png",
    notes: "A wood carving of a rat",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Whittled,
    energy: 1,
    description: (
      <span>
        <b>Sell</b> a card from your discard pile.
      </span>
    ),
  },
  {
    name: "Whittle Mole",
    image: "/whittle_mole.png",
    notes: "A wood carving of a mole",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Whittled,
    energy: 1,
    description: (
      <span>
        <b>Steal</b>{" "}
        <span className="nowrap">
          <b>1🍏</b>, <b>1🫐</b>, <b>1🥕</b>
        </span>{" "}
        from a Rival.
      </span>
    ),
  },
  {
    name: "Whittle Rabbit",
    image: "/whittle_rabbit.png",
    notes: "A wood carving of a Rabbit",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Whittled,
    energy: 1,
    description: <span>Gain +3 of a crop of your choosing.</span>,
  },
  {
    name: "Whittle Raccoon",
    image: "/whittle_raccoon.png",
    notes: "A wood carving of a Raccoon",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Whittled,
    energy: 1,
    tags: [TAGS.DISCARD_OWN, TAGS.CARD_DRAW],
    description: (
      <span>
        <b>Discard</b> every card from your hand. <br />
        Draw a card for each card discarded.
      </span>
    ),
  },
  {
    name: "Whittle Hog",
    image: "/whittle_hog.png",
    notes: "A wood carving of a hedgehog",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Whittled,
    energy: 1,
    tags: [TAGS.GIFT],
    description: (
      <span>
        <b>Gift</b> a card from your discard pile.
      </span>
    ),
  },
  {
    name: "Whittle Worm",
    image: "/whittle_worm.png",
    notes: "A wood carving of a worm",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Whittled,
    energy: 1,
    tags: [TAGS.SEED_SYNERGY, TAGS.SUNLIGHT_ADD],
    description: (
      <span>
        <b>Plant</b> a <Seed /> from your discard pile. <br />
        Add 2 <Sunlight /> to that <Seed />.
      </span>
    ),
  },
  {
    name: "Whittle Beaver",
    image: "/whittle_beaver.png",
    notes: "A wood carving of a beaver",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Whittled,
    energy: 1,
    tags: [TAGS.CHEW, TAGS.ADD_TO_HAND],
    description: (
      <span>
        <Chew count={3} />, then add one of the <Chewed /> cards to your hand.
      </span>
    ),
  },
  {
    name: "Whittle Bee",
    image: "/whittle_bee.png",
    notes: "A wood carving of a bee",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Whittled,
    energy: 1,
    tags: [TAGS.WORK_ORDERS_3, TAGS.CARD_DRAW],
    description: (
      <span>
        Pack a free <b>📦Crate</b> into a <b>Work Order</b>.
      </span>
    ),
  },
];

export default whittled;
