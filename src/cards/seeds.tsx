import { CARD_SET, CARD_TYPE, IFarmCard, TAGS } from "./../models/cards.models";
import Chew from "./text/Chew";
import Critter from "./text/Critter";
import Discount from "./text/Discount";
import Seed from "./text/Seed";
import Skewer from "./text/Skewer";
import Sleepy from "./text/Sleepy";
import Sunlight from "./text/Sunlight";

const seeds: IFarmCard[] = [
  {
    name: "Apple Seeds",
    image: "/apple_seeds.png",
    ai_image: "/ai/apple_seeds.png",
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
    image: "/berry_seeds.png",
    ai_image: "/ai/berry_seeds.png",
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
    image: "/carrot_seeds.png",
    ai_image: "/ai/carrot_seeds.png",
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
    image: "/mystery_seeds.png",
    ai_image: "/ai/mystery_seeds.png",
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
    image: "/mixed_seeds.png",
    ai_image: "/ai/mixed_seeds.png",
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
    image: "/coffee_seeds.png",
    ai_image: "/ai/coffee_seeds.png",
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
    image: "/golden_seeds.png",
    ai_image: "/ai/golden_seeds.png",
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
    image: "/sunflower_seeds.png",
    ai_image: "/ai/sunflower_seeds.png",
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
    tags: [TAGS.SUNLIGHT_ADD, TAGS.SEED_SYNERGY],
    sunlight: {
      two: (
        <span>
          Add <b>1 ☀️Sunlight</b> to each of your <b>🌱Seeds</b>.
        </span>
      ),
      three: (
        <span>
          Add <b>2 ☀️Sunlight</b> to each of your <b>🌱Seeds</b>.
        </span>
      ),
    },
    set: CARD_SET.BASE,
  },
  {
    name: "Magic Seeds",
    image: "/magic_seeds.png",
    ai_image: "/ai/magic_seeds.png",
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
    name: "Lavender Seeds",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 1,
    },
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.ADD_ZZZ],
    sunlight: {
      two: (
        <span>
          Add 1 <Sleepy /> to a <Critter />.
        </span>
      ),
      three: (
        <span>
          Add 2 <Sleepy /> to a <Critter />.
        </span>
      ),
    },
    set: CARD_SET.CHARITY_DRIVE,
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
          ...and then <b>Snatch</b> the discounted crops from a card in the{" "}
          <b>Market</b>.
        </span>
      ),
    },
    set: CARD_SET.CHARITY_DRIVE,
  },
  {
    name: "Flower Seeds",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
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
    set: CARD_SET.CHARITY_DRIVE,
  },
  {
    name: "Oak Seeds",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 1,
    },
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.SEED_SYNERGY, TAGS.SUNLIGHT_ADD, TAGS.PLANT_FROM_DISCARD],
    sunlight: {
      one: (
        <span>
          <b>Plant</b> a <Seed /> from your discard pile...
        </span>
      ),
      three: (
        <span>
          ...and add 2 <Sunlight /> to it.
        </span>
      ),
    },
    set: CARD_SET.WOOD_WORK,
  },
  {
    name: "Birch Seeds",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 1,
    },
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.CHEW, TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    sunlight: {
      one: (
        <span>
          <Chew count={3} />, gain 3 random crops.
        </span>
      ),
      two: (
        <span>
          <Chew count={2} />, gain 3 random crops.
        </span>
      ),
      three: (
        <span>
          <Chew count={1} />, gain 3 random crops.
        </span>
      ),
    },
    set: CARD_SET.WOOD_WORK,
  },
  {
    name: "Maple Seeds",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.SUGAR_RUSH],
    sunlight: {
      three: (
        <span>
          Perform a friendly <Critter ownership /> <b>Talent</b> twice. <br />
          (Without adding any <Sleepy />)
        </span>
      ),
    },
    set: CARD_SET.WOOD_WORK,
  },
];

export default seeds;
