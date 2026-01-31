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
    name: "Travelling Salesman",
    qty: 1,
    set: CARD_SET.CHARITY_DRIVE,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When I arrive, <b>Refresh</b> the Farm card row in the <b>Market</b>,
        then <Discount /> twice.
        <br />
        Then I leave.
      </span>
    ),
    tags: [TAGS.DISCOUNT],
  },
  {
    name: "Investor",
    qty: 1,
    set: CARD_SET.CHARITY_DRIVE,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When I arrive, all players <b>Reset</b> their decks and then draw 2
        cards. <br />
        Then I leave.
      </span>
    ),
    tags: [TAGS.RESET_DECK, TAGS.CARD_DRAW],
  },
  {
    name: "Coffee Donor",
    qty: 1,
    set: CARD_SET.CHARITY_DRIVE,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When I arrive, remove 1 <Sleepy /> from each
        <Critter />.<br />
        Then I leave.
      </span>
    ),
    tags: [TAGS.REMOVE_ZZZ],
  },
  {
    name: "Generous Donor",
    qty: 1,
    set: CARD_SET.CHARITY_DRIVE,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When I arrive, each player gains{" "}
        <span className="nowrap">
          <b>1🍏</b>, <b>1🫐</b>, <b>1🥕</b>
        </span>
        .<br />
        Then I leave.
      </span>
    ),
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_ALL],
  },
  {
    name: "Carrot Donor",
    qty: 1,
    set: CARD_SET.CHARITY_DRIVE,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When I arrive, each player gains +2 🥕.
        <br />
        Then I leave.
      </span>
    ),
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_CARROT],
  },
  {
    name: "Apple Donor",
    qty: 1,
    set: CARD_SET.CHARITY_DRIVE,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When I arrive, each player gains +2 🍏.
        <br />
        Then I leave.
      </span>
    ),
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_APPLE],
  },
  {
    name: "Berry Donor",
    qty: 1,
    set: CARD_SET.CHARITY_DRIVE,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When I arrive, each player gains +2 🫐.
        <br />
        Then I leave.
      </span>
    ),
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_BERRY],
  },
  {
    name: "Workaholic",
    qty: 1,
    set: CARD_SET.CHARITY_DRIVE,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When I arrive, each player can get a free <b>Work Order</b>. <br /> (In
        turn order)
        <br />
        Then I leave.
      </span>
    ),
    tags: [TAGS.FREE_CRATE],
  },
];

export default visitors;
