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
    image: "/nibblot.png",
    cost: {
      apples: 1,
      berries: 2,
      carrots: 1,
    },
    qty: 2,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Beaver,
    tags: [TAGS.CHEW, TAGS.TRASH],
    description: (
      <span>
        <Chew count={3} />. <br /> You may <b>Trash</b> one of the <Chewed />{" "}
        cards.
      </span>
    ),

    energy: 2,
  },
  {
    name: "Carpenter",
    image: "/carpenter.png",
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
    image: "/ava.png",
    cost: {
      apples: 3,
      berries: 1,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Beaver,
    tags: [TAGS.CHEW, TAGS.GIFT],
    description: (
      <span>
        <Chew count={3} />. <br />
        Get a free <b>Favour</b> from the <b>Market</b>.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Gift</b> a card.
      </span>
    ),
    energy: 3,
  },
];

export default beavers;
