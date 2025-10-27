import {
  CARD_SET,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import Critter from "../text/Critter";
import Discount from "../text/Discount";
import Skewer from "../text/Skewer";
import Sleepy from "../text/Sleepy";

const seeds: IFarmCard[] = [
  {
    name: "Apple Seeds",
    flavour: "If you thought Apples were crunchy, wait until you try these!",
    notes:
      "A big open canvas bag of seeds, with an apple logo on the front. The seeds are light.",
    qty: 3,
    cost: {
      apples: 3,
      carrots: 0,
      berries: 0,
    },
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_APPLE],
    sunlight: {
      one: (
        <span className="nowrap">
          Gain +2 <b>🍏</b>
        </span>
      ),
      two: (
        <span className="nowrap">
          Gain +4 <b>🍏</b>
        </span>
      ),
      three: (
        <span className="nowrap">
          Gain +5 <b>🍏</b>
        </span>
      ),
    },
    set: CARD_SET.BASE,
  },
  {
    name: "Berry Seeds",
    flavour: "You must be Berry patient with these",
    notes:
      "A big open canvas bag of seeds, with a berry logo on the front. The seeds are dark.",
    qty: 3,
    cost: {
      apples: 0,
      carrots: 0,
      berries: 3,
    },
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_BERRY],
    sunlight: {
      one: (
        <span className="nowrap">
          Gain +2 <b>🫐</b>
        </span>
      ),
      two: (
        <span className="nowrap">
          Gain +4 <b>🫐</b>
        </span>
      ),
      three: (
        <span className="nowrap">
          Gain +5 <b>🫐</b>
        </span>
      ),
    },
    set: CARD_SET.BASE,
  },
  {
    name: "Carrot Seeds",
    flavour: "Otherwise known as baby baby Carrots",
    notes:
      "A big open canvas bag of seeds, with a carrot logo on the front, the seeds are shaded.",
    qty: 3,
    cost: {
      apples: 0,
      carrots: 3,
      berries: 0,
    },
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_CARROT],
    sunlight: {
      one: (
        <span className="nowrap">
          Gain +2 <b>🥕</b>
        </span>
      ),
      two: (
        <span className="nowrap">
          Gain +4 <b>🥕</b>
        </span>
      ),
      three: (
        <span className="nowrap">
          Gain +5 <b>🥕</b>
        </span>
      ),
    },
    set: CARD_SET.BASE,
  },
  {
    name: "Mystery Seeds",
    flavour: "When you're as blind as a Mole, all seeds are Mystery Seeds",
    notes:
      "A big closed canvas bag of seeds, with big question mark on the front",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 1,
    },
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    sunlight: {
      two: "Gain +3 of a random crop.",
      three: "Gain +4 of a random crop.",
    },
    set: CARD_SET.BASE,
  },
  {
    name: "Mixed Seeds",
    flavour: "These seeds are like a box of chocolates...",
    notes:
      "A big open canvas bag of seeds, with an circle logo split into thirds the front. Inside each third is an icon of carrot, berry and apple. The seeds are 3 different shades. Light, shaded and dark.",
    qty: 2,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    sunlight: {
      one: "Gain +2 of a random crop.",
      two: "Gain +2 of a random crop, twice.",
      three: "Gain +2 of a random crop, thrice.",
    },
    set: CARD_SET.BASE,
  },
  {
    name: "Coffee Seeds",
    flavour:
      "You plant Coffee Seeds to grow Coffee BEANS. Why are you planting the beans?",
    notes:
      "A big open canvas bag of seeds, with an coffe mug logo on the front. The seeds are dark brown, like coffee beans.",
    qty: 2,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.CARD_DRAW],
    sunlight: {
      two: "Draw a card.",
      three: "Draw 2 cards.",
    },
    set: CARD_SET.BASE,
  },
  {
    name: "Golden Seeds",
    flavour: "What do they grow into? Deals!",
    notes:
      "A big open canvas bag of seeds, with a $ logo on the front. The seeds are shiny.",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 1,
    },
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.SELL, TAGS.SELL_FROM_DISCARD, TAGS.SELL_FROM_HAND],
    sunlight: {
      two: (
        <span>
          <b>Trash</b> a card from your discard pile.
        </span>
      ),
      three: (
        <span>
          <b>Sell</b> a card from your discard pile.
        </span>
      ),
    },
    set: CARD_SET.BASE,
  },
  {
    name: "Sunflower Seeds",
    flavour: "A certain Worm's favourite snack.",
    notes: "A big canvas bag of seeds, with a Sunflower logo on the front",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 1,
    },
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.SUNLIGHT_ADD, TAGS.SKEWER, TAGS.SEED_SYNERGY],
    sunlight: {
      two: (
        <span>
          Add <b>2 ☀️Sunlight</b> to each of your <b>🌱Seeds</b>...
        </span>
      ),
      three: (
        <span>
          ...and then <Skewer /> this card.
        </span>
      ),
    },
    set: CARD_SET.BASE,
  },
  {
    name: "Magic Seeds",
    flavour: "You could trade a Cow for these, if you had one...",
    notes:
      "A big canvas bag of seeds, with no logo on the front. The bag is open and the seeds are glowing.",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.FREE_CARD, TAGS.SKEWER],
    sunlight: {
      three: (
        <span>
          <Skewer /> a Farm card from the <b>Market</b>.
        </span>
      ),
    },
    set: CARD_SET.BASE,
  },
  {
    name: "Rotten Seeds",
    qty: 2,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.ADD_ZZZ],
    sunlight: {
      one: (
        <span>
          Add 1 <Sleepy /> to a Rival's <Critter />.
        </span>
      ),
      two: "",
      three: (
        <span>
          Add 1 <Sleepy /> to each of a Rival's <Critter plural />.
        </span>
      ),
    },
    set: CARD_SET.CROWD_FUND,
  },
  {
    name: "Shiny Seeds",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 1,
    },
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.DISCOUNT, TAGS.SNATCH_DISCOUNT],
    sunlight: {
      two: (
        <span>
          <Discount />
          ...
        </span>
      ),
      three: (
        <span>
          ...and snatch the discounted crops from a card in the <b>Market</b>.
        </span>
      ),
    },
    set: CARD_SET.CROWD_FUND,
  },
  {
    name: "Flower Seeds",
    qty: 1,
    cost: {
      apples: 3,
      carrots: 3,
      berries: 3,
    },
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.FREE_CRATE],
    sunlight: {
      three: (
        <span>
          Pack a free crate into one of your <b>Work Orders</b>.
        </span>
      ),
    },
    set: CARD_SET.CROWD_FUND,
  },
];

export default seeds;
