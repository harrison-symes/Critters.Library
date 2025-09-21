import {
  CARD_SET,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";

const seeds: IFarmCard[] = [
  {
    name: "Apple Seeds",
    qty: 3,
    cost: {
      apples: 3,
      carrots: 0,
      berries: 0,
    },
    image: "rummager",
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
    qty: 3,
    cost: {
      apples: 0,
      carrots: 0,
      berries: 3,
    },
    image: "rummager",
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
    qty: 3,
    cost: {
      apples: 0,
      carrots: 3,
      berries: 0,
    },
    image: "rummager",
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
    qty: 2,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 1,
    },
    image: "rummager",
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    sunlight: {
      one: "Gain a random crop.",
      two: "Gain +3 of a random crop.",
      three: "Gain +4 of a random crop.",
    },
    set: CARD_SET.BASE,
  },
  {
    name: "Mixed Seeds",
    qty: 2,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    image: "rummager",
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    sunlight: {
      one: "Gain 2 random crops.",
      two: "Gain 4 random crops.",
      three: "Gain 5 random crops.",
    },
    set: CARD_SET.BASE,
  },
  {
    name: "Coffee Seeds",
    qty: 2,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    image: "rummager",
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
    name: "Vanishing Seeds",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 1,
    },
    image: "rummager",
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.SELL, TAGS.SELL_FROM_DISCARD, TAGS.SELL_FROM_HAND],
    sunlight: {
      one: (
        <span>
          <b>Trash</b> a card from your hand.
        </span>
      ),
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
    qty: 2,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 1,
    },
    image: "rummager",
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
          ...and <b>Skewer</b> this card.
        </span>
      ),
    },
    set: CARD_SET.BASE,
  },
  {
    name: "Magic Seeds",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    image: "rummager",
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.FREE_CARD, TAGS.SKEWER],
    sunlight: {
      two: (
        <span>
          Put a Farm card from the <b>Market</b> into your discard pile...
        </span>
      ),
      three: (
        <span>
          ...<b>Skewer</b> that card instead.
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
    image: "rummager",
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.ADD_ZZZ],
    sunlight: {
      one: (
        <span>
          Add 1 💤 to a Rival's <b className="nowrap">🐾Critter</b>.
        </span>
      ),
      two: "",
      three: (
        <span>
          Add 1 💤 to each of a Rival's <b className="nowrap">🐾Critters</b>.
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
    image: "rummager",
    description: <span>Gains 1 ☀️ at the end of your turn.</span>,
    type: CARD_TYPE.Seeds,
    tags: [TAGS.DISCOUNT, TAGS.SNATCH_DISCOUNT],
    sunlight: {
      two: (
        <span>
          <b>Discount</b>...
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
    image: "rummager",
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
