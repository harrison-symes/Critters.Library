import {
  CARD_SET,
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
        Get a <b>Favour</b> from the <b>market</b> for free.
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
    set: CARD_SET.BASE,
    flavour: "Say hello to his little friends.",
  },
  {
    name: "Price Hiker",
    qty: 2,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 3,
    },
    image: "/critters/price_hiker.jpeg",
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
    set: CARD_SET.BASE,
    flavour:
      "At the tippy top of the mountain is where the best deals can be found.",
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
    set: CARD_SET.BASE,
    flavour:
      "The wings on his boots don't make him run faster, but let's not spoil his fun.",
  },
  {
    name: "Tax Collector",
    qty: 2,
    cost: {
      apples: 2,
      berries: 2,
      carrots: 1,
    },
    image: "rummager",
    description: (
      <span>
        <b>Discount</b>. <br />
        <b>Steal</b> 1 of the discounted crop type from each Rival.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Fast-track</b> a card.
      </span>
    ),
    energy: 3,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Rat,
    tags: [TAGS.DISCOUNT, TAGS.CROP_STEAL, TAGS.FAST_TRACK],
    set: CARD_SET.CROWD_FUND,
  },
];

export default rats;
