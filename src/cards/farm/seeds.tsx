import { CARD_TYPE, IFarmCard, TAGS } from "../../models/cards.models";

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
      two: (
        <span>
          <b>Sell</b> a card from your hand...
        </span>
      ),
      three: "...or discard pile.",
    },
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
    tags: [TAGS.SUNLIGHT_ADD, TAGS.TOP_OF_DECK, TAGS.SEED_SYNERGY],
    sunlight: {
      two: (
        <span>
          Add <b>2 ☀️Sunlight</b> to each of your <b>🌱Seeds</b>...
        </span>
      ),
      three: "...and put this card onto the top of your deck.",
    },
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
    tags: [TAGS.FREE_CARD, TAGS.TOP_OF_DECK],
    sunlight: {
      two: "Put a Farm card from the Market into your discard pile...",
      three: "...or onto the top of your deck.",
    },
  },
];

export default seeds;
