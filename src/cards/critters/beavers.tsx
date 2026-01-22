import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import Burrow from "../text/Burrow";
import Chew, { Chewed } from "../text/Chew";
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
    tags: [TAGS.CHEW, TAGS.SELL],
    description: (
      <span>
        <Chew count={3} />. <br /> You may <b>Sell</b> one of the <Chewed />{" "}
        cards.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Gift</b> a card.
      </span>
    ),
    energy: 2,
  },
  {
    name: "Carpenter",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 2,
    },
    qty: 2,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Beaver,
    tags: [TAGS.CHEW, TAGS.BURROW],
    description: (
      <span>
        <Chew count={3} />. <br />
        <Burrow /> one of the <Chewed /> cards.
      </span>
    ),
    recycle: (
      <span>
        <Skewer /> a card.
      </span>
    ),
    energy: 3,
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
