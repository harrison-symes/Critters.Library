import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import Chew from "../text/Chew";

const gifts: IFarmCard[] = [
  {
    name: "Goldfish",
    cost: {
      apples: 2,
      berries: 2,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Gift,
    tags: [TAGS.GIFT],
    unsellable: true,
    image: "/goldfish.png",
    ai_image: "/ai/goldfish.png",
    description: (
      <span>
        This does nothing. <br />
        You cannot <b>Sell</b> or <b>Trash</b> this card...
      </span>
    ),
    buyBonus: (
      <span>
        <b>Gift</b> this to a Rival.
      </span>
    ),
  },
  {
    name: "Birthday Present",
    cost: {
      apples: 0,
      berries: 0,
      carrots: 2,
    },
    qty: 1,
    image: "/birthday_present.png",
    ai_image: "/ai/birthday_present.png",
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Gift,
    unsellable: true,
    tags: [TAGS.GIFT, TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    description: (
      <span>
        Gain 3 random crops. <br /> <b>Gift</b> this card.
      </span>
    ),
  },
  {
    name: "Hot Potato",
    cost: {
      apples: 2,
      berries: 0,
      carrots: 0,
    },
    image: "/hot_potato.png",
    ai_image: "/ai/hot_potato.png",
    notes:
      "A potato with drawn on eyes (with long eyelashes and eyeliner) and seductive lips ;)",
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Gift,
    tags: [TAGS.GIFT, TAGS.CROP_DESTROY],
    unsellable: true,
    description: (
      <span>
        Destroy 2 of your crops to <b>Gift</b> this to a Rival.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Gift</b> this to a Rival.
      </span>
    ),
  },
  {
    name: "Rotten Crops",
    cost: {
      apples: 0,
      berries: 2,
      carrots: 0,
    },
    image: "/rotten_crops.png",
    ai_image: "/ai/rotten_crops.png",
    notes: "A pile of rotten berries.",
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Gift,
    tags: [TAGS.GIFT, TAGS.CROP_DESTROY, TAGS.CARD_DRAW],
    unsellable: true,
    description: <span>Destroy 2 of your crops to draw a card.</span>,
    buyBonus: (
      <span>
        <b>Gift</b> this to a Rival.
      </span>
    ),
  },
  {
    name: "Nightshade",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.CROWD_FUND,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Gift,
    tags: [TAGS.GIFT, TAGS.SUNLIGHT_REMOVE, TAGS.CARD_DRAW],
    unsellable: true,
    description: (
      <span>
        Remove 1 <b>☀️Sunlight</b> from one of your <b>🌱Seeds</b> to draw a
        card.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Gift</b> this to a Rival.
      </span>
    ),
  },
  {
    name: "Plank",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Gift,
    tags: [TAGS.GIFT, TAGS.CHEW, TAGS.CARD_DRAW],
    unsellable: true,
    description: (
      <span>
        <Chew count={2} />. <br />
        Draw a card.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Gift</b> this to a Rival.
      </span>
    ),
  },
];

export default gifts;
