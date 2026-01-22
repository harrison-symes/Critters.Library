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

const debris: IFarmCard[] = [
  // {
  //   name: "Stump",
  //   cost: {
  //     apples: 2,
  //     berries: 2,
  //     carrots: 2,
  //   },
  //   qty: 4,
  //   set: CARD_SET.WOOD_WORK,
  //   type: CARD_TYPE.STUMP,
  //   fixed: true,
  //   description: (
  //     <span>
  //       When you <b>Buy</b> or <b>Refresh</b> this card, draw 2 cards. <br />
  //       (Then remove this from the game).
  //     </span>
  //   ),
  // },
  {
    name: "Fallen Log",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 8,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.DEBRIS,
    debris: true,
    description: (
      <span>
        <b>Trash</b> this card. <br /> <Burrow /> a random <Critter wittle />.
      </span>
    ),
  },
];

export default debris;
