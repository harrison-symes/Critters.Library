import {
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";

const rats: IFarmCard[] = [
  {
    name: "Aristoc-Rat",
    qty: 2,
    cost: {
      apples: 2,
      berries: 3,
      carrots: 0,
    },
    image: "rummager",
    description: (
      <span>
        Get a <b>🤝Favour</b> from the Market for free.
        <br />
        <b>Discount</b>
      </span>
    ),
    buyBonus: (
      <span>
        <b>Refresh</b> a card.
      </span>
    ),
    energy: 3,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rat,
    tags: [TAGS.FREE_FAVOUR, TAGS.DISCOUNT, TAGS.REFRESH],
  },
  {
    name: "Price Hiker",
    qty: 2,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 3,
    },
    image: "rummager",
    description: (
      <span>
        <b>Discount</b>, then <b>Snatch</b> the discounted crops from a card in
        the Market.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Refresh</b> a card.
      </span>
    ),
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rat,
    tags: [TAGS.DISCOUNT, TAGS.SNATCH_DISCOUNT, TAGS.REFRESH],
  },
  {
    name: "Hermes",
    qty: 1,
    cost: {
      apples: 3,
      berries: 1,
      carrots: 3,
    },
    image: "rummager",
    description: (
      <span>
        <b>Sell</b> a card from your hand to draw a card.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Fast-track</b> a card.
      </span>
    ),
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rat,
    tags: [TAGS.CARD_DRAW, TAGS.SELL, TAGS.SELL_FROM_HAND, TAGS.FAST_TRACK],
  },
];

export default rats;
