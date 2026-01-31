import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import Chew from "../text/Chew";
import Critter from "../text/Critter";
import Shuffle from "../text/Shuffle";
import Item from "../text/Item";
import Seed from "../text/Seed";
import TrickOrTreat from "../text/TrickOrTreat";

const bees: IFarmCard[] = [
  {
    name: "Worker Bee",
    notes: "A Bee wearing a suit and tie, holding a briefcase",
    qty: 2,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    description: (
      <span>
        Gain 1 random crop for each <b>Work Order</b> you have.
      </span>
    ),
    energy: 3,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Bee,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_ALL, TAGS.WORK_ORDERS_3],
    set: CARD_SET.BASE,
    flavour: "On Fridays he gets to wear a silly tie.",
  },
  {
    name: "Pesky Bee",
    notes: "",
    qty: 2,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    description: (
      <span>
        <b>Steal</b> 1 crop from a Rival for each <b>Work Order</b> you have.
      </span>
    ),
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Bee,
    tags: [TAGS.CROP_STEAL, TAGS.WORK_ORDERS_3],
    set: CARD_SET.BASE,
    flavour: "Don't be scared, he just wants to hug you.",
  },
  {
    name: "Plan Bee",
    notes: "A bee wearing glasses, holding up and looking at some blueprints.",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    description: (
      <span>
        <Shuffle /> a card for each <b>Work Order</b> you have.
      </span>
    ),
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Bee,
    tags: [TAGS.WORK_ORDERS_3, TAGS.SHUFFLE],
    set: CARD_SET.BASE,
    flavour: "What if we paint the Apples purple? Do you think they'd notice?",
  },
  {
    name: "Architect",
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Bee,
    tags: [TAGS.CHEW, TAGS.WORK_ORDERS_3, TAGS.CARD_DRAW],
    description: (
      <span>
        <Chew count={3} />, then draw a card. <br />
        <Chew /> one less card for each <b>Work Order</b> you have.
      </span>
    ),
    energy: 2,
  },
  {
    name: "Jester",
    cost: {
      apples: 3,
      carrots: 3,
      berries: 3,
    },
    qty: 1,
    set: CARD_SET.AUTUMN_HARVEST,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Bee,
    tags: [TAGS.CHEW, TAGS.WORK_ORDERS_3, TAGS.CARD_DRAW],
    description: (
      <span>
        <TrickOrTreat />. This <Critter /> has +1 <b>Energy</b> for each{" "}
        <b>Work Orders</b> you have.
      </span>
    ),
    energy: 2,
  },
];

export default bees;
