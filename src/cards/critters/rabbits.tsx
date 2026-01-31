import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import Apple from "../text/Apple";
import Berry from "../text/Berry";
import Carrot from "../text/Carrot";
import Chew, { Chewed } from "../text/Chew";
import Critter from "../text/Critter";
import Discount from "../text/Discount";
import TrickOrTreat from "../text/TrickOrTreat";

const rabbits: IFarmCard[] = [
  {
    name: "Carrot Grower",
    notes:
      "A rabbit in overalls picking a carrot from a carrot patch. Could be struggling to pull it out.",
    qty: 2,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 4,
    },
    description: "Gain +2 🥕",
    energy: 3,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rabbit,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_CARROT],
    set: CARD_SET.BASE,
    flavour: "He's rooting for you!",
  },
  {
    name: "Berry Grower",
    notes:
      "A rabbit in a vintage dress picking berries from a berry bush. Holding a basket.",
    qty: 2,
    cost: {
      apples: 1,
      berries: 4,
      carrots: 1,
    },
    description: "Gain +2 🫐",
    energy: 3,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rabbit,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_BERRY],
    set: CARD_SET.BASE,
    flavour: "She's Berry good at her job.",
  },
  {
    name: "Apple Grower",
    notes:
      "A rabbit wearing a farm hat, standing on a step ladder to reach an apple from a tree",
    qty: 2,
    cost: {
      apples: 4,
      berries: 1,
      carrots: 1,
    },
    description: "Gain +2 🍏",
    energy: 3,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rabbit,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_APPLE],
    set: CARD_SET.BASE,
    flavour: "How do you like them Apples?",
  },
  {
    name: "Agriculturist",
    notes:
      "A rabbit in a farm hat and overalls, holding a basket with all 3 crops in it",
    qty: 1,
    cost: {
      apples: 3,
      carrots: 3,
      berries: 3,
    },
    description: "Gain 3 random crops",
    buyBonus: "Each other player gains a random crop.",
    energy: 3,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rabbit,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    set: CARD_SET.BASE,
    flavour: "My manager wouldn't be too happy if I produced random results.",
  },
  {
    name: "Clodhopper",
    notes: "A large rabbit in overalls. He has MASSIVE gumboots on",
    qty: 1,
    cost: {
      apples: 5,
      carrots: 5,
      berries: 5,
    },
    description: "Gain +5 of a random crop.",
    buyBonus: (
      <span>
        Pack a free <b>📦Crate</b> into each of your <b>Work Orders</b>.
      </span>
    ),
    energy: 3,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rabbit,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM, TAGS.FREE_CRATE],
    set: CARD_SET.BASE,
    flavour: "Do you sell these boots in size 100?",
  },
  {
    name: "Crop Picker",
    notes:
      "A rabbit in a vintage dress, holding an empty basket. In motion / walking somewhere.",
    qty: 2,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    description: (
      <span>
        Gain +3 of a random crop. <br />
        Each other player gain +1 of the same crop.
      </span>
    ),
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rabbit,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    set: CARD_SET.BASE,
    flavour: "You can't be TOO picky.",
  },
  {
    name: "Volunteer",
    qty: 2,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    description: (
      <span>
        <Discount />. <br />
        Gain +2 of the discounted crop type.
      </span>
    ),
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rabbit,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_CHOOSE, TAGS.FREE_FAVOUR],
    set: CARD_SET.CHARITY_DRIVE,
    flavour: "He's here to lend a paw.",
    recycle: (
      <span>
        Get a free <b>Favour</b> from the <b>Market</b>
      </span>
    ),
  },
  {
    name: "Benefactor",
    qty: 1,
    cost: {
      apples: 4,
      carrots: 4,
      berries: 4,
    },
    description: (
      <span>
        Pack a free <b>📦Crate</b> into a <b>Work Order</b>.
      </span>
    ),
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rabbit,
    tags: [],
    set: CARD_SET.CHARITY_DRIVE,
    flavour: "",
    buyBonus: (
      <span>
        <b>Burrow</b> a card.
      </span>
    ),
  },
  {
    name: "Wood Worker",
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    qty: 2,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rabbit,
    tags: [TAGS.CHEW, TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    description: (
      <span>
        <Chew count={3} />. <br /> Gain a random crop for each card <Chewed />.
      </span>
    ),
    energy: 2,
  },
  {
    name: "Trick or Treater",
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    qty: 2,
    set: CARD_SET.AUTUMN_HARVEST,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rabbit,
    tags: [TAGS.TRICK_OR_TREAT],
    description: (
      <span>
        <TrickOrTreat />
      </span>
    ),
    energy: 2,
  },
  {
    name: "Berry Seeker",
    cost: {
      apples: 1,
      carrots: 1,
      berries: 4,
    },
    qty: 1,
    set: CARD_SET.AUTUMN_HARVEST,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rabbit,
    tags: [TAGS.WATCHER, TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_BERRY],
    isWatcher: true,
    description: (
      <span>
        When a <Berry /> is <b>rolled</b> on a die <br />
        Gain +2 <Berry />.
      </span>
    ),
    energy: 3,
  },
  {
    name: "Carrot Seeker",
    cost: {
      apples: 1,
      carrots: 4,
      berries: 1,
    },
    qty: 1,
    set: CARD_SET.AUTUMN_HARVEST,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rabbit,
    tags: [TAGS.WATCHER, TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_CARROT],
    isWatcher: true,
    description: (
      <span>
        When a <Carrot /> is <b>rolled</b> on a die <br />
        Gain +2 <Carrot />.
      </span>
    ),
    energy: 3,
  },
  {
    name: "Apple Seeker",
    cost: {
      apples: 4,
      carrots: 1,
      berries: 1,
    },
    qty: 1,
    set: CARD_SET.AUTUMN_HARVEST,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rabbit,
    tags: [TAGS.WATCHER, TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_APPLE],
    isWatcher: true,
    description: (
      <span>
        When a <Apple /> is <b>rolled</b> on a die <br />
        Gain +2 <Apple />.
      </span>
    ),
    energy: 3,
  },
];

export default rabbits;
