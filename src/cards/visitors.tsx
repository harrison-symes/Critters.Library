import {
  CARD_SET,
  CARD_TYPE,
  IVisitorCard,
  TAGS,
} from "../models/cards.models";
import Critter from "./text/Critter";
import Discount from "./text/Discount";
import Seed from "./text/Seed";
import Sleepy from "./text/Sleepy";
import Sunlight from "./text/Sunlight";

const visitors: IVisitorCard[] = [
  {
    name: "Travelling Salesman",
    image: "/travelling_salesman.png",
    qty: 1,
    set: CARD_SET.CROWD_FUND,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When I <b>Arrive</b>, <b>Refresh</b> EVERY card in the <b>Market</b>,
        then <Discount /> twice.
        <br />
        Then I leave.
      </span>
    ),
    tags: [TAGS.DISCOUNT],
  },
  {
    name: "Investor",
    image: "/investor.png",
    qty: 1,
    set: CARD_SET.CROWD_FUND,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When I <b>Arrive</b>, each player draws 2 cards. <br />
        Then I leave.
      </span>
    ),
    tags: [TAGS.CARD_DRAW],
  },
  {
    name: "Coffee Donor",
    image: "/coffee_donor.png",
    qty: 1,
    set: CARD_SET.CROWD_FUND,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When I <b>Arrive</b>, remove 1 <Sleepy /> from each
        <Critter />.<br />
        Then I leave.
      </span>
    ),
    tags: [TAGS.REMOVE_ZZZ],
  },
  {
    name: "Generous Donor",
    image: "/generous_donor.png",
    qty: 1,
    set: CARD_SET.CROWD_FUND,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When I <b>Arrive</b>, each player gains{" "}
        <span className="nowrap">
          <b>+1🍏</b>, <b>+1🫐</b>, <b>+1🥕</b>
        </span>
        .<br />
        Then I leave.
      </span>
    ),
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_ALL],
  },
  {
    name: "Carrot Donor",
    image: "/carrot_donor.png",
    qty: 1,
    set: CARD_SET.CROWD_FUND,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When I <b>Arrive</b>, each player gains +3 🥕.
        <br />
        Then I leave.
      </span>
    ),
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_CARROT],
  },
  {
    name: "Apple Donor",
    image: "/apple_donor.png",
    qty: 1,
    set: CARD_SET.CROWD_FUND,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When I <b>Arrive</b>, each player gains +3 🍏.
        <br />
        Then I leave.
      </span>
    ),
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_APPLE],
  },
  {
    name: "Berry Donor",
    image: "/berry_donor.png",
    qty: 1,
    set: CARD_SET.CROWD_FUND,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When I <b>Arrive</b>, each player gains +3 🫐.
        <br />
        Then I leave.
      </span>
    ),
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_BERRY],
  },
  {
    name: "Workaholic",
    image: "/workaholic.png",
    qty: 1,
    set: CARD_SET.CROWD_FUND,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When I <b>Arrive</b>, each player can pack a free <b>📦Crate</b> into one of their <b>Work Orders</b>.
        <br />
        Then I leave.
      </span>
    ),
    tags: [TAGS.FREE_CRATE],
  },
  {
    name: "Seed Funder",
    image: "/seed_funder.png",
    qty: 1,
    set: CARD_SET.CROWD_FUND,
    type: CARD_TYPE.Visitor,
    description: (
      <span>
        When I <b>Arrive</b>, add 1 <Sunlight /> to ALL <Seed plural />.
        <br />
        Then I leave.
      </span>
    ),
    tags: [TAGS.FREE_CRATE],
  },
];

export default visitors;
