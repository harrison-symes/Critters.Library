import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import Chew from "../text/Chew";
import Discount from "../text/Discount";
import Seed from "../text/Seed";
import Sunlight from "../text/Sunlight";

const wittled: IFarmCard[] = [
  {
    name: "Wittle Rat",
    notes: "A wood carving of a rat",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Wittled,
    energy: 1,
    description: (
      <span>
        <b>Refresh</b> a row in the <b>Market</b>. <br />
        Draw a card.
      </span>
    ),
  },
  {
    name: "Wittle Mole",
    notes: "A wood carving of a mole",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Wittled,
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
    name: "Wittle Rabbit",
    notes: "A wood carving of a Rabbit",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Wittled,
    energy: 1,
    description: <span>Gain +3 of a crop of your choosing.</span>,
  },
  {
    name: "Wittle Raccoon",
    notes: "A wood carving of a Raccoon",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Wittled,
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
    name: "Wittle Hog",
    notes: "A wood carving of a hedgehog",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Wittled,
    energy: 1,
    tags: [TAGS.GIFT],
    description: (
      <span>
        <b>Gift</b> a card from your discard pile.
      </span>
    ),
  },
  {
    name: "Wittle Worm",
    notes: "A wood carving of a worm",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Wittled,
    energy: 1,
    tags: [TAGS.SEED_SYNERGY, TAGS.SUNLIGHT_ADD],
    description: (
      <span>
        Add 3 <Sunlight /> to a <Seed />.
      </span>
    ),
  },
  {
    name: "Wittle Beaver",
    notes: "A wood carving of a beaver",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Wittled,
    energy: 1,
    tags: [TAGS.CHEW, TAGS.ADD_TO_HAND],
    description: (
      <span>
        <Chew count={3} />, then add one of the chewed cards to your hand.
      </span>
    ),
  },
  {
    name: "Wittle Bee",
    notes: "A wood carving of a bee",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Wittled,
    energy: 1,
    tags: [TAGS.WORK_ORDERS_3, TAGS.CARD_DRAW],
    description: (
      <span>
        If you have 3 <b>Work Orders</b>, draw 2 cards.
      </span>
    ),
  },
];

export default wittled;
