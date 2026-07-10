import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import Chew from "../text/Chew";
import Critter from "../text/Critter";
import Sleepy from "../text/Sleepy";

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
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Gift,
    unsellable: true,
    tags: [TAGS.GIFT, TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    description: (
      <span>
        Gain +4 of a random crop. <br /> <b>Gift</b> this card.
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
        <b>Gift</b> this to a Rival. <br />
        Draw a card.
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
    image: "/nightshade.png",
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
    image: "/plank.png",
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
  {
    name: "Healthy Snack",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.AUTUMN_HARVEST,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Gift,
    tags: [TAGS.GIFT, TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    unsellable: true,
    description: (
      <span>
        Each player gains +1 of the same random crop. <br />
      </span>
    ),
    buyBonus: (
      <span>
        <b>Gift</b> this card.
      </span>
    ),
  },
  {
    name: "Scarecrow",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.AUTUMN_HARVEST,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Gift,
    tags: [TAGS.GIFT, TAGS.ADD_ZZZ, TAGS.CARD_DRAW],
    unsellable: true,
    description: (
      <span>
        If you have a <b>Masked</b> <Critter />, draw a card.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Gift</b> this card.
      </span>
    ),
  },
  {
    name: "Pet Rock",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.HOLIDAY,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Gift,
    tags: [TAGS.GIFT, TAGS.ADD_ZZZ, TAGS.CARD_DRAW],
    unsellable: true,
    energy: 5,
    description: (
      <span>
        Do nothing...
      </span>
    ),
    clockOut: (
      <span>
        Draw 3 cards.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Gift</b> this card... Or keep it for yourself.
      </span>
    ),
  },
];

export default gifts;
