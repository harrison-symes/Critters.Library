import { CARD_TYPE, IRewardCard, TAGS } from "../models/cards.models";

const rewards: IRewardCard[] = [
  {
    name: "Apple Stall",
    qty: 2,
    description: (
      <span>
        Instantly Gain +2 🍏
        <br />
        From now on, you may <b>Trade</b> 2🍏 for any 1 crop.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_APPLE, TAGS.TRADE],
  },
  {
    name: "Berry Stall",
    qty: 2,
    description: (
      <span>
        Instantly Gain +2 🫐
        <br />
        From now on, you may <b>Trade</b> 2🫐 for any 1 crop.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_BERRY, TAGS.TRADE],
  },
  {
    name: "Carrot Stall",
    qty: 2,
    description: (
      <span>
        Instantly Gain +2 🥕
        <br />
        From now on, you may <b>Trade</b> 2🥕 for any 1 crop.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_CARROT, TAGS.TRADE],
  },
  {
    name: "Gold Locket",
    qty: 1,
    description: (
      <span>
        Your <b>🏠Starter</b> cards <b>Sell</b> for twice as much.
        <br />
        Instantly <b>Sell</b> a <b>🏠Starter</b> card from your discard pile.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.SELL, TAGS.SELL_FROM_DISCARD],
  },
  {
    name: "To-do List",
    qty: 1,
    description: (
      <span>
        Instantly, and whenever you complete a <b>Work Order</b>, get a free{" "}
        <b>Work Order</b>.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.FREE_CARD, TAGS.WORK_ORDER_COMPLETION],
  },
  {
    name: "Toolbox",
    qty: 1,
    description: (
      <span>
        Instantly, and whenever you complete a <b>Work Order</b>, put a card
        from your discard pile onto the top of your deck.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.TOP_OF_DECK, TAGS.WORK_ORDER_COMPLETION],
  },
  {
    name: "Wrapping Paper",
    qty: 1,
    description: (
      <span>
        Instantly, and whenever you complete a <b>Work Order</b>, you may{" "}
        <b>Gift</b> a card from your discard pile.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.WORK_ORDER_COMPLETION, TAGS.GIFT],
  },
  {
    name: "Greenhouse",
    qty: 1,
    description: (
      <span>
        Whenever you <b>Harvest</b> a <b>🌱Seed</b> with 3 <b>☀️Sunlight</b>,
        put a different <b>🌱Seed</b> from your discard pile into your hand.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.SEED_SYNERGY, TAGS.ADD_TO_HAND],
  },
  {
    name: "Seed Fnd",
    qty: 1,
    description: (
      <span>
        Whenever you <b>Sell</b> or <b>Trash</b> a card, add 1 <b>☀️Sunlight</b>{" "}
        to each of your <b>🌱Seeds</b>.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.SEED_SYNERGY, TAGS.SUNLIGHT_ADD, TAGS.SELL, TAGS.TRASH],
  },
  {
    name: "Coffee Grinds",
    qty: 1,
    description: (
      <span>
        Whenever you <b>Harvest</b> a <b>🌱Seed</b> with 3 <b>☀️Sunlight</b>,
        draw a card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.SEED_SYNERGY, TAGS.CARD_DRAW],
  },
  {
    name: "Magnifying Glass",
    qty: 1,
    description: (
      <span>
        Your <b>🌱Seeds</b> gain 1 <b>☀️Sunlight</b> when planted.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.SEED_SYNERGY, TAGS.SUNLIGHT_ADD],
  },
  {
    name: "Utility Belt",
    qty: 1,
    description: (
      <span>
        Whenever you <b>Fast-track</b> a <b>🐾Critter</b>, you may also{" "}
        <b>Fast-track</b> an <b>🎒Item</b>.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.FAST_TRACK],
  },
  {
    name: "Rusty Rake",
    qty: 1,
    description: (
      <span>
        Whenever you deck is <b>Reset</b>, draw a card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.RESET_DECK, TAGS.CARD_DRAW],
  },
  {
    name: "Vault",
    qty: 1,
    description: (
      <span>
        At the start of your turn, if you have at least 3 of each crop, draw a
        card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.CARD_DRAW],
  },
  {
    name: "Tax Return",
    qty: 1,
    description: (
      <span>
        After you <b>Buy</b> or <b>Sell</b> a Farm card, draw a card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.CARD_DRAW, TAGS.SELL],
  },
  {
    name: "Broken Compass",
    qty: 1,
    description: (
      <span>
        Card that you <b>Fast-track</b> are put onto the top of your deck
        instead.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.FAST_TRACK, TAGS.TOP_OF_DECK],
  },
  {
    name: "Skewer",
    qty: 1,
    description: (
      <span>
        Whenever you put a card onto the top of your deck, draw a card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.CARD_DRAW, TAGS.TOP_OF_DECK],
  },
  {
    name: "V.I.P Pass",
    qty: 1,
    description: (
      <span>
        After you <b>Buy</b> a Farm card, <b>Fast-track</b> it.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.FAST_TRACK],
  },
  {
    name: "Feather Duster",
    qty: 1,
    description: (
      <span>
        Whenever you play a <b>🛠️Tool</b>, you may <b>Trash</b> a card from your
        discard pile.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.TOOL_SYNERGY, TAGS.TRASH, TAGS.TRASH_FROM_DISCARD],
  },
  {
    name: "Tool Shed",
    qty: 1,
    description: (
      <span>
        Whenever you play a <b>🛠️Tool</b>, you may <b>Fast-track</b> a different
        card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.TOOL_SYNERGY, TAGS.FAST_TRACK],
  },
  {
    name: "Coffee Mug",
    qty: 1,
    description: (
      <span>
        Whenever you play a <b>🧁Treat</b>, remove 1 💤 from one of your{" "}
        <b>🐾Critters</b>.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.REMOVE_ZZZ, TAGS.TREAT_SYNERGY],
  },
  {
    name: "Satchel",
    qty: 1,
    description: (
      <span>
        Whenever you play a <b>🧁Treat</b>, <b>Steal</b> a crop from a Rival.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.CROP_STEAL, TAGS.TREAT_SYNERGY],
  },
  {
    name: "Burnt Ledger",
    qty: 1,
    description: (
      <span>
        Whenever you <b>Sell</b> a <b>🏦Finance</b> card, you may put it back
        onto the top of your deck.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.FINANCE_SYNERGY, TAGS.SELL, TAGS.TOP_OF_DECK],
  },
  {
    name: "Rainy Day Savings",
    qty: 1,
    description: (
      <span>
        Whenever you play a <b>🏦Finance</b> card, gain +2 of a random crop.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [
      TAGS.FINANCE_SYNERGY,
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_RANDOM,
    ],
  },
  {
    name: "Merchant Scales",
    qty: 1,
    description: (
      <span>
        Whenever you <b>Discount</b>, gain +2 of the discounted crop type.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.DISCOUNT, TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
  },
  {
    name: "Black Gloves",
    qty: 1,
    description: (
      <span>
        Whenever you <b>Discard</b> a card from your hand, draw a card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.DISCARD_OWN, TAGS.CARD_DRAW],
  },
  {
    name: "Jam Jar",
    qty: 1,
    description: (
      <span>
        Whenever you <b>Discard</b> a card from your hand, you may{" "}
        <b>Fast-track</b> a different card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.DISCARD_OWN, TAGS.FAST_TRACK],
  },
  {
    name: "Packing Slip",
    qty: 1,
    description: (
      <span>
        At the end of your turn, if you have only 1 <b>Work Order</b>, draw an
        extra card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.CARD_DRAW],
  },
  {
    name: "Heavy Bushel",
    qty: 1,
    description: (
      <span>
        You draw 1 less card at the end of your turns. <br />
        Whenever your deck is <b>Reset</b>, gain{" "}
        <span className="nowrap">
          <b>+2🍏</b>, <b>+2🫐</b>, <b>+2🥕</b>
        </span>
        .
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_ALL, TAGS.RESET_DECK],
  },
  {
    name: "Friendship Bracelet",
    qty: 1,
    description: (
      <span>
        Your <b>Friendship Charm</b> cards can instead copy the <b>⤵️Talent</b>{" "}
        of one of your <b>🐾Critters</b>.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [],
  },
  {
    name: "Tip Jar",
    qty: 1,
    description: (
      <span>
        Whenever you <b>Buy</b> a Farm card, you may pay{" "}
        <span className="nowrap">
          <b>1🍏</b> <b>1🫐</b> <b>1🥕</b>
        </span>{" "}
        to put that card into you hand.
      </span>
    ),
    type: CARD_TYPE.Reward,
    tags: [TAGS.ADD_TO_HAND],
  },
];

export default rewards;
