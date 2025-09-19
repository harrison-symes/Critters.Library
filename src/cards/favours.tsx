import { CARD_TYPE, ICard, IFavourCard, TAGS } from "../models/cards.models";

const favours: IFavourCard[] = [
  {
    name: "Pickpocket",
    qty: 2,
    image: "rummager",
    description: (
      <span>
        <b>Steal</b> a crop from a Rival.
      </span>
    ),
    tags: [TAGS.CROP_STEAL],
    type: CARD_TYPE.Favour,
  },
  {
    name: "Helping Hand",
    qty: 2,
    image: "rummager",
    description: (
      <span>
        Gain +3 of a random crop. <br />
        Each Rival gains 1 of the same crop.
      </span>
    ),
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    type: CARD_TYPE.Favour,
  },
  {
    name: "Delegate",
    qty: 2,
    image: "rummager",
    description: (
      <span>
        Add 1 💤 to a Rival's <b>🐾Critter</b>
        <br />
        <b>-OR-</b>
        <br />
        Remove 1 💤 from one of your <b>🐾Critters</b>
        <br />
      </span>
    ),
    tags: [TAGS.ADD_ZZZ, TAGS.REMOVE_ZZZ],
    type: CARD_TYPE.Favour,
  },
  {
    name: "Throw it away",
    qty: 2,
    image: "rummager",
    description: (
      <span>
        <b>Trash</b> a card from your discard pile.
      </span>
    ),
    tags: [TAGS.TRASH, TAGS.TRASH_FROM_DISCARD],
    type: CARD_TYPE.Favour,
  },
  {
    name: "Sell it off",
    qty: 2,
    image: "rummager",
    description: (
      <span>
        <b>Sell</b> a card from your hand.
      </span>
    ),
    tags: [TAGS.SELL, TAGS.SELL_FROM_HAND],
    type: CARD_TYPE.Favour,
  },
  {
    name: "Rotate Stock",
    qty: 2,
    image: "rummager",
    description: (
      <span>
        <b>Refresh</b> 2 cards in the <b>Market</b>.
      </span>
    ),
    tags: [TAGS.REFRESH],
    type: CARD_TYPE.Favour,
  },
  {
    name: "Barter",
    qty: 1,
    image: "rummager",
    description: (
      <span>
        <b>Discard</b> a card from your hand to <b>Sell</b> a different card
        from your discard pile.
      </span>
    ),
    tags: [TAGS.DISCARD_OWN, TAGS.SELL, TAGS.SELL_FROM_DISCARD],
    type: CARD_TYPE.Favour,
  },
  {
    name: "Restock",
    qty: 1,
    image: "rummager",
    description: (
      <span>
        <b>Refresh</b> a row in the <b>Market</b>.<br />
        <b>Discount</b>.
      </span>
    ),
    tags: [TAGS.DISCOUNT, TAGS.REFRESH],
    type: CARD_TYPE.Favour,
  },
  {
    name: "Express Delivery",
    qty: 1,
    image: "rummager",
    description: (
      <span>
        <b>Fast-track</b> a card.
      </span>
    ),
    tags: [TAGS.FAST_TRACK],
    type: CARD_TYPE.Favour,
  },
  {
    name: "Collect Tips",
    qty: 1,
    image: "rummager",
    description: (
      <span>
        Gain a random crop for each <b>Work Order</b> you have.
      </span>
    ),
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    type: CARD_TYPE.Favour,
  },
  {
    name: "Feed the Seeds",
    qty: 1,
    image: "rummager",
    description: (
      <span>
        Add 1 <b>☀️Sunlight</b> to each of your <b>🌱Seeds</b>.
      </span>
    ),
    tags: [TAGS.SEED_SYNERGY, TAGS.SUNLIGHT_ADD],
    type: CARD_TYPE.Favour,
  },
  {
    name: "Piggy-back Ride",
    qty: 1,
    image: "rummager",
    description: (
      <span>
        Move 1 💤 from one of your <b>🐾Critters</b> to any other{" "}
        <b>🐾Critter</b>.
      </span>
    ),
    tags: [TAGS.ADD_ZZZ, TAGS.REMOVE_ZZZ],
    type: CARD_TYPE.Favour,
  },
  {
    name: "Exchange",
    qty: 1,
    image: "rummager",
    description: (
      <span>
        <b>Discard</b> a card from your hand to gain{" "}
        <span className="nowrap">
          <b>+1🍏</b>, <b>+1🫐</b>, <b>+1🥕</b>
        </span>
        .
      </span>
    ),
    tags: [TAGS.DISCARD_OWN, TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_ALL],
    type: CARD_TYPE.Favour,
  },
  {
    name: "Slim Pickings",
    qty: 1,
    image: "rummager",
    description: <span>Gain a crop of your choosing.</span>,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_CHOOSE],
    type: CARD_TYPE.Favour,
  },
];

export default favours;
