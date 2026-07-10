import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import Burrow from "../text/Burrow";
import Chew from "../text/Chew";
import Critter from "../text/Critter";
import Skewer from "../text/Skewer";

const debris: IFarmCard[] = [
  {
    name: "Tree Stump",
    image: "/tree_stump.png",
    cost: {
      apples: 2,
      berries: 2,
      carrots: 2,
    },
    qty: 4,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.DEBRIS,
    debris: true,
    description: (
      <span>
        When you <b>Buy</b> this card, <b>Refresh</b> it and <Skewer /> a random <Critter whittle /> instead.
      </span>
    ),
  },
  {
    name: "Fallen Log",
    image: "/fallen_log.png",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 4,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.DEBRIS,
    debris: true,
    description: (
      <span>
        <b>Trash</b> this card. <br /> <Burrow /> a random <Critter whittle />.
      </span>
    ),
  },
  {
    name: "Infini-log",
    image: "/infini_log.png",
    cost: {
      apples: 3,
      berries: 3,
      carrots: 3,
    },
    qty: 4,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.DEBRIS,
    debris: true,
    description: (
      <span>
        <Skewer /> a random <Critter whittle />.
      </span>
    ),
  },
];

export default debris;
