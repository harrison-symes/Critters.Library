import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";

const starter: IFarmCard[] = [
  {
    name: "Apple Tree",
    cost: {
      apples: 2,
      berries: 0,
      carrots: 0,
    },
    set: CARD_SET.BASE,
    description: <span>Gain +1 🍏.</span>,
    qty: 8,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Starter,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_APPLE],
  },
  {
    name: "Berry Bush",
    cost: {
      apples: 0,
      berries: 2,
      carrots: 0,
    },
    set: CARD_SET.BASE,
    description: <span>Gain +1 🫐.</span>,
    qty: 8,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Starter,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_BERRY],
  },
  {
    name: "Carrot Patch",
    cost: {
      apples: 0,
      berries: 0,
      carrots: 2,
    },
    set: CARD_SET.BASE,
    description: <span>Gain +1 🥕.</span>,
    qty: 8,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Starter,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_CARROT],
  },
  {
    name: "Friendship Charm",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    set: CARD_SET.BASE,
    description: (
      <span>
        Get a <b>Favour</b> from the <b>Market</b> for free.
      </span>
    ),
    qty: 8,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Starter,
    tags: [TAGS.FREE_FAVOUR],
  },
  {
    name: "Pick of the Crop",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    set: CARD_SET.BASE,
    description: (
      <span>
        Gain 2 random crops.
        <br />
        <b>Discount</b>.
      </span>
    ),
    qty: 4,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Starter,
    tags: [TAGS.DISCOUNT, TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
  },
];

export default starter;
