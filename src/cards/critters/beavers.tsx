import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import Chew from "../text/Chew";
import FastTrack from "../text/FastTrack";
import Seed from "../text/Seed";
import Skewer from "../text/Skewer";

const beavers: IFarmCard[] = [
  {
    name: "Nibblot",
    cost: {
      apples: 1,
      berries: 3,
      carrots: 1,
    },
    qty: 2,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Beaver,
    tags: [TAGS.CHEW, TAGS.TRASH],
    description: (
      <span>
        <Chew count={3} />, then <b>Sell</b> one of the chewed cards.
      </span>
    ),
    recycle: <span></span>,
    energy: 2,
  },
  {
    name: "Gnawer",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 2,
    },
    qty: 2,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Beaver,
    tags: [TAGS.CHEW, TAGS.FAST_TRACK],
    description: (
      <span>
        <Chew count={3} />, then <FastTrack /> one of the chewed cards.
      </span>
    ),
    energy: 2,
  },
  {
    name: "Ava",
    cost: {
      apples: 3,
      berries: 1,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Beaver,
    tags: [TAGS.CHEW, TAGS.SKEWER],
    description: (
      <span>
        <Chew count={3} /> from a Rival's deck, then <Skewer /> one of the
        chewed cards for them.
      </span>
    ),
    energy: 2,
  },
];

export default beavers;
