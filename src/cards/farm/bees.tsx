import {
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";

const bees: IFarmCard[] = [
  {
    name: "Worker Bee",
    qty: 2,
    cost: {
      apples: 3,
      carrots: 3,
      berries: 3,
    },
    image: "rummager",
    description: (
      <span>
        If you have 3 <b>Work Orders</b>, <b>Gain</b>{" "}
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
  },
  {
    name: "Pesky Bee",
    qty: 2,
    cost: {
      apples: 3,
      carrots: 3,
      berries: 3,
    },
    image: "rummager",
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
  },
  {
    name: "Plan Bee",
    qty: 1,
    cost: {
      apples: 3,
      carrots: 3,
      berries: 3,
    },
    image: "rummager",
    description: (
      <span>
        If you have 3 <b>Work Orders</b>, <b>Fast-track</b> a <b>🐾Critter</b>,
        a <b>🌱Seed</b> and an <b>🎒Item</b>.
      </span>
    ),
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Bee,
    tags: [TAGS.WORK_ORDERS_3, TAGS.FAST_TRACK],
  },
];

export default bees;
