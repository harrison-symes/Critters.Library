import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import Discount from "../text/Discount";

const starter: IFarmCard[] = [
  {
    name: "Apple Tree",
    image: "/apple_tree.png",
    ai_image: "/ai/apple_tree.png",
    cost: {
      apples: 2,
      berries: 0,
      carrots: 0,
    },
    notes: "An apple tree with lots of green apples on it",
    set: CARD_SET.BASE,
    description: <span>Gain +1 🍏.</span>,
    qty: 8,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Starter,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_APPLE],
  },
  {
    name: "Berry Bush",
    image: "/berry_bush.png",
    ai_image: "/ai/berry_bush.png",
    notes: "A berry bush with lots of purple berries on it",
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
    image: "/carrot_patch.png",
    ai_image: "/carrot_patch.png",
    notes: "A carrot patch with lots of grown carrots poking out",
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
    image: "/friendship_charm.png",
    ai_image: "/ai/friendship_charm.png",
    notes:
      "A heart shaped necklace with two letters enscribed. 8 combinations of letters. R+P. D+C. A+H. Z+S. A+P. T+M. M+R. H+I.",
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
    image: "/pick_of_the_crop.png",
    ai_image: "/ai/pick_of_the_crop.png",
    notes:
      "A picnic table with one of each crop laid out, like professor oak's table in pokemon.",
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
        <Discount />.
      </span>
    ),
    qty: 4,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Starter,
    tags: [TAGS.DISCOUNT, TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
  },
];

export default starter;
