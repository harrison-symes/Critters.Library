import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";

const rabbits: IFarmCard[] = [
  {
    name: "Carrot Grower",
    qty: 2,
    cost: {
      apples: 2,
      berries: 2,
      carrots: 4,
    },
    image: "/critters/carrot_grower.png",
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
    qty: 2,
    cost: {
      apples: 2,
      berries: 4,
      carrots: 2,
    },
    image: "/critters/berry_grower.png",
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
    qty: 2,
    cost: {
      apples: 4,
      berries: 2,
      carrots: 2,
    },
    image: "/critters/apple_grower.png",
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
    qty: 1,
    cost: {
      apples: 3,
      carrots: 3,
      berries: 3,
    },
    image: "/critters/agriculturist.png",
    description: "Gain 3 random crops",
    buyBonus: "Your Rivals each gain a random crop.",
    energy: 3,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rabbit,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    set: CARD_SET.BASE,
    flavour: "My manager wouldn't be too happy if I produced random results.",
  },
  {
    name: "Clodhopper",
    qty: 1,
    cost: {
      apples: 5,
      carrots: 5,
      berries: 5,
    },
    image: "/critters/clodhopper.png",
    description: "Gain +5 of a random crop.",
    buyBonus: (
      <span>
        Pack a <b>📦Crate</b> into each of your <b>Work Orders</b>.
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
    qty: 2,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    image: "/critters/crop_picker.png",
    description: (
      <span>
        Gain +3 of a random crop. <br />
        Your Rivals each gain +1 of that same crop.
      </span>
    ),
    buyBonus: "Your Rivals each gain a random crop.",
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
    image: "/critters/crop_picker.png",
    description: (
      <span>
        Gain a crop of your choosing.
        <br />
        <b>Discount</b> by that crop type.
      </span>
    ),
    energy: 3,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rabbit,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_CHOOSE, TAGS.FREE_FAVOUR],
    set: CARD_SET.CROWD_FUND,
    flavour: "He's here to lend a paw.",
    recycle: (
      <span>
        Get a free <b>Favour</b> from the <b>Market</b>
      </span>
    ),
  },
];

export default rabbits;
