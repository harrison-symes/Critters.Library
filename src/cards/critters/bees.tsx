import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import Critter from "../text/Critter";
import FastTrack from "../text/FastTrack";
import Item from "../text/Item";
import Seed from "../text/Seed";

const bees: IFarmCard[] = [
  {
    name: "Worker Bee",
    notes: "A Bee wearing a suit and tie, holding a briefcase",
    qty: 2,
    cost: {
      apples: 3,
      carrots: 3,
      berries: 3,
    },
    description: (
      <span>
        If you have 3 <b>Work Orders</b>, Gain{" "}
        <span className="nowrap">
          <b>+1🍏</b>, <b>+1🫐</b>, <b>+1🥕</b>
        </span>
        .
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
      apples: 3,
      carrots: 3,
      berries: 3,
    },
    description: (
      <span>
        If you have 3 <b>Work Orders</b>, <b>Steal</b>{" "}
        <span className="nowrap">
          <b>1🍏</b>, <b>1🫐</b>, <b>1🥕</b>
        </span>{" "}
        from a Rival.
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
      apples: 3,
      carrots: 3,
      berries: 3,
    },
    description: (
      <span>
        If you have 3 <b>Work Orders</b>, <FastTrack /> a <Critter />, a{" "}
        <Seed /> and an <Item />.
      </span>
    ),
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Bee,
    tags: [TAGS.WORK_ORDERS_3, TAGS.FAST_TRACK],
    set: CARD_SET.BASE,
    flavour: "What if we paint the Apples purple? Do you think they'd notice?",
  },
];

export default bees;
