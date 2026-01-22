import {
  CARD_SET,
  CARD_TYPE,
  IVisitorCard,
  TAGS,
} from "../models/cards.models";
import Critter from "./text/Critter";
import Discount from "./text/Discount";
import Sleepy from "./text/Sleepy";

const visitors: IVisitorCard[] = [
  {
    name: "<PH>, Travelling Salesman",
    qty: 1,
    set: CARD_SET.CHARITY_DRIVE,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When <b>PH</b> arrives, <Discount /> twice.
      </span>
    ),
    tags: [TAGS.DISCOUNT],
  },
  {
    name: "<PH>, Kickstarter",
    qty: 1,
    set: CARD_SET.CHARITY_DRIVE,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When PH arrives, all players <b>Reset</b> their decks and then draw 2
        cards.
      </span>
    ),
    tags: [TAGS.RESET_DECK, TAGS.CARD_DRAW],
  },
  {
    name: "Jemima, Coffee Lover",
    qty: 1,
    set: CARD_SET.CHARITY_DRIVE,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When <b>Jemima</b> arrives, remove 1 <Sleepy /> from each
        <Critter plural />.
      </span>
    ),
    tags: [TAGS.REMOVE_ZZZ],
  },
  {
    name: "<PH>, the Sponsor",
    qty: 1,
    set: CARD_SET.CHARITY_DRIVE,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When <b>PH</b> arrives, each player gains{" "}
        <span className="nowrap">
          <b>1🍏</b>, <b>1🫐</b>, <b>1🥕</b>
        </span>
        .
      </span>
    ),
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_ALL],
  },
  {
    name: "<PH>, Carrot Donor",
    qty: 1,
    set: CARD_SET.CHARITY_DRIVE,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When <b>PH</b> arrives, each player gains +2 🥕.
      </span>
    ),
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_CARROT],
  },
  {
    name: "<PH>, Apple Donor",
    qty: 1,
    set: CARD_SET.CHARITY_DRIVE,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When <b>PH</b> arrives, each player gains +2 🍏.
      </span>
    ),
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_APPLE],
  },
  {
    name: "<PH>, Berry Donor",
    qty: 1,
    set: CARD_SET.CHARITY_DRIVE,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When <b>PH</b> arrives, each player gains +2 🫐.
      </span>
    ),
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_BERRY],
  },
  {
    name: "<PH>, Workaholic",
    qty: 1,
    set: CARD_SET.CHARITY_DRIVE,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When <b>PH</b> arrives, each player can get a free <b>Work Order</b>.{" "}
        <br /> (In turn order)
      </span>
    ),
    tags: [TAGS.FREE_CRATE],
  },
  {
    name: "<PH>, Generous Donor",
    qty: 1,
    set: CARD_SET.CHARITY_DRIVE,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When <b>PH</b> arrives, each player gains{" "}
        <span className="nowrap">
          <b>1🍏</b>, <b>1🫐</b>, <b>1🥕</b>
        </span>
        .
      </span>
    ),
    tags: [TAGS.FREE_CRATE],
  },
];

export default visitors;
