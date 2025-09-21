import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";

const finance: IFarmCard[] = [
  {
    name: "Recycling Bin",
    cost: {
      apples: 0,
      berries: 2,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    description: (
      <span>
        Gain +2 🍏. <br /> <b>Fast-track</b> an <b>🎒Item</b>.<br />
        <b>Discount</b>.
      </span>
    ),
    holdable: true,
    buyBonus: (
      <span>
        Get a <b>Favour</b> from the <b>market</b> for free.
      </span>
    ),
    tags: [
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_APPLE,
      TAGS.FAST_TRACK,
      TAGS.DISCOUNT,
      TAGS.FREE_FAVOUR,
    ],
  },
  {
    name: "Closed Sign",
    cost: {
      apples: 2,
      berries: 2,
      carrots: 0,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    tags: [
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_CARROT,
      TAGS.ADD_ZZZ,
      TAGS.DISCOUNT,
      TAGS.FREE_FAVOUR,
    ],
    description: (
      <span>
        Gain +2 🥕. <br />
        Add 1 💤 to EVERY <b>🐾Critter</b>. <br />
        <b>Discount</b>.
      </span>
    ),
    buyBonus: (
      <span>
        Get a <b>Favour</b> from the <b>market</b> for free.
      </span>
    ),
  },
  {
    name: "Loyalty Card",
    cost: {
      apples: 2,
      berries: 0,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    tags: [
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_BERRY,
      TAGS.DISCOUNT,
      TAGS.FREE_FAVOUR,
    ],
    description: (
      <span>
        Gain +2 🫐. <br />
        Get a <b>Favour</b> from the <b>Market</b> for free. <br />
        <b>Discount</b>.
      </span>
    ),
    buyBonus: (
      <span>
        Get a <b>Favour</b> from the <b>market</b> for free.
      </span>
    ),
  },
  {
    name: "Cooked Books",
    cost: {
      apples: 1,
      berries: 3,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    tags: [
      TAGS.SELL,
      TAGS.SELL_FROM_DISCARD,
      TAGS.FINANCE_SYNERGY,
      TAGS.SKEWER,
    ],
    description: (
      <span>
        <b>Sell</b> a card from your discard pile. <br />
        If it was a <b>🏦Finance</b> card, <b>Skewer</b> it afterwards.
      </span>
    ),
  },
  {
    name: "Instruction manual",
    cost: {
      apples: 1,
      berries: 2,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    tags: [TAGS.DISCARD_OWN, TAGS.FREE_CRATE, TAGS.CARD_DRAW],
    description: (
      <span>
        <b>Discard</b> a card from your hand to pack a free crate into a{" "}
        <b>Work Order</b>.
      </span>
    ),
    recycle: "Draw 2 cards.",
  },
  {
    name: "Damaged Goods",
    cost: {
      apples: 3,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    tags: [
      TAGS.SELL,
      TAGS.SELL_FROM_DISCARD,
      TAGS.TRASH,
      TAGS.TRASH_FROM_DISCARD,
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_ALL,
    ],
    holdable: true,
    description: (
      <span>
        <b>Sell</b> a card from your discard pile
        <br />
        <b>-OR-</b>
        <br />
        <b>Trash</b> 2 cards from your discard pile.
      </span>
    ),
    recycle: (
      <span>
        Gain{" "}
        <span className="nowrap">
          <b>+1🍏</b>, <b>+1🫐</b>, <b>+1🥕</b>
        </span>
      </span>
    ),
  },
  {
    name: "Gift Card",
    cost: {
      apples: 2,
      berries: 2,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    sellable: true,
    tags: [TAGS.SKEWER, TAGS.FREE_CARD],
    description: (
      <span>
        <b>Skewer</b> a Farm card from the <b>Market</b>.
        <br /> Put <b>Gift Card</b> back into the <b>Market</b>.
      </span>
    ),
  },
  {
    name: "Paper Shredder",
    cost: {
      apples: 0,
      berries: 2,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    sellable: true,
    tags: [
      TAGS.ADD_TO_HAND,
      TAGS.TRASH,
      TAGS.TRASH_FROM_DISCARD,
      TAGS.FINANCE_SYNERGY,
    ],
    description: (
      <span>
        Play an <b>🎒Item</b> from your discard pile, and then <b>Trash</b> it.
        <br />
        If it was a <b>🏦Finance</b> card, return it to your discard pile.
      </span>
    ),
  },
  {
    name: "Open Sign",
    cost: {
      apples: 3,
      berries: 0,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    tags: [
      TAGS.REFRESH,
      TAGS.DISCOUNT,
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_RANDOM,
      TAGS.ADD_TO_HAND,
    ],
    description: (
      <span>
        <b>Refresh</b> 2 cards in the Market. <br /> Gain 2 random crops.
        <br />
        <b>Discount</b>.
      </span>
    ),
    buyBonus: "Put this card into your hand.",
  },
  {
    name: "Contrabrand",
    cost: {
      apples: 2,
      berries: 3,
      carrots: 0,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    tags: [TAGS.GIFT, TAGS.TRASH],
    unsellable: true,
    description: (
      <span>
        <b>Gift</b> a card from your discard pile.
      </span>
    ),
    recycle: (
      <span>
        <b>Trash</b> this card.
      </span>
    ),
  },
  {
    name: "Register",
    cost: {
      apples: 2,
      berries: 1,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    tags: [TAGS.CROP_STEAL, TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    description: (
      <span>
        <b>Steal</b> one type of crop from a Rival until you have more of that
        crop than they do.
      </span>
    ),
    recycle: "Gain 3 random crops.",
  },
  {
    name: "Receipts",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    tags: [
      TAGS.SELL,
      TAGS.SELL_FROM_HAND,
      TAGS.CARD_DRAW,
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_RANDOM,
      TAGS.DISCOUNT,
    ],
    description: (
      <span>
        <b>Sell</b> a card from your hand. <br />
        Draw a card.
        <br /> <b>Discount</b>.
      </span>
    ),
    recycle: "Gain +2 of a random crop.",
  },
  {
    set: CARD_SET.CROWD_FUND,
    name: "Bargain Bin",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    description: (
      <span>
        You may <b>Buy</b> a card from ANY <b>Market</b> discard pile{" "}
        <b>this turn</b>.
      </span>
    ),
    buyBonus: (
      <span>
        Get a free <b>Favour</b> from the <b>Market</b>
      </span>
    ),
  },
  {
    set: CARD_SET.CROWD_FUND,
    name: "Money Sink",
    cost: {
      apples: 3,
      berries: 0,
      carrots: 1,
    },
    qty: 1,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    holdable: true,
    tags: [
      TAGS.ADD_TO_HAND,
      TAGS.TRASH,
      TAGS.TRASH_FROM_DISCARD,
      TAGS.FINANCE_SYNERGY,
    ],
    description: (
      <span>
        <b>Trash</b> a card from your discard pile. <br />
        If it was a <b>🏦Finance</b> card, put it into your hand after.
      </span>
    ),
  },
  {
    set: CARD_SET.CROWD_FUND,
    name: "Emergency Fund",
    cost: {
      apples: 0,
      berries: 3,
      carrots: 2,
    },
    qty: 1,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    tags: [
      TAGS.SELL,
      TAGS.SELL_FROM_DISCARD,
      TAGS.LESS_REWARDS,
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_RANDOM,
    ],
    sellable: true,
    description: (
      <span>
        <b>Sell</b> a card from your discard pile. <br />
        If you have less <b>🏆Rewards</b> than your Rivals, it sells for twice
        as much.
      </span>
    ),
    recycle: <span>Gain +3 of a random crop.</span>,
  },
];

export default finance;
