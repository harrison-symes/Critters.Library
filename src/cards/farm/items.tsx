import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";

const items: IFarmCard[] = [
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
        Get a <b>Favour</b> from the Market for free.
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
        Get a <b>Favour</b> from the Market for free.
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
        Get a <b>Favour</b> from the Market for free.
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
      TAGS.TOP_OF_DECK,
    ],
    description: (
      <span>
        <b>Sell</b> a card from your discard pile. <br />
        If it was a <b>🏦Finance</b> card, put it back onto the top of your deck
        after.
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
    tags: [TAGS.TOP_OF_DECK, TAGS.FREE_CARD],
    description: (
      <span>
        Put a Farm card from the Market onto the top of your deck. <br /> Put{" "}
        <b>Gift Card</b> back into the Market.
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
      TAGS.FAST_TRACK,
    ],
    description: (
      <span>
        Play an <b>🎒Item</b> from your discard pile, and then <b>Trash</b> it.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Fast-track</b> a card.
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
    name: "Farming Gloves",
    cost: {
      apples: 0,
      berries: 2,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_APPLE,
      TAGS.SEED_SYNERGY,
      TAGS.SUNLIGHT_ADD,
      TAGS.FAST_TRACK,
    ],
    description: (
      <span>
        Gain +2 🍏.
        <br /> Add 1 <b>☀️Sunlight</b> to each of your <b>🌱Seeds</b>.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Fast-track</b> a <b>🌱Seed</b>.
      </span>
    ),
  },
  {
    name: "Binoculars",
    cost: {
      apples: 2,
      berries: 2,
      carrots: 0,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_CARROT,
      TAGS.FAST_TRACK,
      TAGS.REFRESH,
    ],
    description: (
      <span>
        Gain +2 🥕. <br /> <b>Fast-track</b> a <b>🐾Critter</b>.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Refresh</b> a card.
      </span>
    ),
  },
  {
    name: "Water Cooler",
    cost: {
      apples: 2,
      berries: 0,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    sellable: true,
    tags: [
      TAGS.ADD_ZZZ,
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_BERRY,
      TAGS.REMOVE_ZZZ,
    ],
    description: (
      <span>
        Gain +2 🫐. <br /> Move 1 💤 from one of your <b>🐾Critters</b> to ANY
        other
        <b>🐾Critter</b>.
      </span>
    ),
    buyBonus: (
      <span>
        Add 1 💤 to a Rival's <b>🐾Critter</b>.
      </span>
    ),
  },
  {
    name: "Small Backpack",
    cost: {
      apples: 3,
      berries: 0,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    sellable: true,
    tags: [
      TAGS.DISCARD_OWN,
      TAGS.CARD_DRAW,
      TAGS.TRASH,
      TAGS.TRASH_FROM_DISCARD,
    ],
    description: (
      <span>
        <b>Discard</b> a card from hand to draw 2 cards.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Trash</b> a card from your <b>discard</b> pile.
      </span>
    ),
  },
  {
    name: "Convincing Disguise",
    cost: {
      apples: 0,
      berries: 3,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_STEAL, TAGS.CROP_GENERATION_RANDOM],
    description: (
      <span>
        Gain +2 of a random crop.
        <br /> <b>Steal</b> one of that crop type from each Rival.
      </span>
    ),
    recycle: (
      <span>
        <b>Steal</b> 2 crops from a Rival.
      </span>
    ),
  },
  {
    name: "Watering Can",
    cost: {
      apples: 0,
      berries: 1,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [TAGS.TOP_OF_DECK],
    holdable: true,
    description: (
      <span>Put a card from your discard pile onto the top of your deck.</span>
    ),
    buyBonus: "Put this card onto the top of your deck.",
  },
  {
    name: "Dustpan",
    cost: {
      apples: 3,
      berries: 2,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [
      TAGS.REFRESH,
      TAGS.RESET_DECK,
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_ALL,
      TAGS.DISCOUNT,
    ],
    description: (
      <span>
        <b>Refresh</b> a row in the Market.
        <br /> Gain{" "}
        <span className="nowrap">
          <b>+1🍏</b>, <b>+1🫐</b>, <b>+1🥕</b>.
        </span>
        <br />
        <b>Discount</b>.
      </span>
    ),
    recycle: (
      <span>
        <b>Reset</b> your deck.
      </span>
    ),
  },
  {
    name: "Knapsack",
    cost: {
      apples: 3,
      berries: 0,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [
      TAGS.DISCARD_OWN,
      TAGS.CROP_STEAL,
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_RANDOM,
    ],
    description: (
      <span>
        <b>Steal</b> 2 crops from a Rival. <br /> Discard a card from hand to{" "}
        <b>Steal</b> 1 more.
      </span>
    ),
    recycle: "Gain 3 random crops.",
  },
  {
    name: "Compost Bin",
    cost: {
      apples: 1,
      berries: 3,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [TAGS.DISCARD_OWN, TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_ALL],
    description: (
      <span>
        <b>Discard</b> every card from your hand. <br /> Gain{" "}
        <span className="nowrap">
          <b>+1🍏</b>, <b>+1🫐</b>, <b>+1🥕</b>
        </span>{" "}
        for each card discarded.
      </span>
    ),
    recycle: (
      <span>
        Gain{" "}
        <span className="nowrap">
          <b>+1🍏</b>, <b>+1🫐</b>, <b>+1🥕</b>
        </span>
        .
      </span>
    ),
  },
  {
    name: "Toolbelt",
    cost: {
      apples: 1,
      berries: 3,
      carrots: 0,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [TAGS.CARD_DRAW, TAGS.TOOL_SYNERGY, TAGS.TOP_OF_DECK],
    holdable: true,
    description: (
      <span>
        Put a <b>🛠️Tool</b> from your discard pile onto the top of your deck.
      </span>
    ),
    recycle: "Draw a card.",
  },
  {
    name: "Trusty Trowel",
    cost: {
      apples: 2,
      berries: 2,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_RANDOM,
      TAGS.SEED_SYNERGY,
      TAGS.ADD_TO_HAND,
    ],
    description: (
      <span>
        Gain +3 of a random crop.
        <br /> Put a <b>🌱Seed</b> from your discard pile into your hand.
      </span>
    ),
  },
  {
    name: "Dusty Broom",
    cost: {
      apples: 2,
      berries: 1,
      carrots: 0,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Tool,
    tags: [TAGS.DISCOUNT, TAGS.SNATCH_DISCOUNT, TAGS.REFRESH, TAGS.RESET_DECK],
    description: (
      <span>
        <b>Discount</b>.<br />
        <b>Snatch</b> the discounted crops from a card in the Market, then{" "}
        <b>Refresh</b> that card.
      </span>
    ),
  },
  {
    name: "Rat Food",
    cost: {
      apples: 3,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_APPLE, TAGS.REFRESH],
    sellable: true,
    description: (
      <span>
        Gain +3🍏. <br />
        <b>Refresh</b> 2 cards.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Sell</b> a <b>🏠Starter</b> card from your discard pile.
      </span>
    ),
  },
  {
    name: "Rabbit Food",
    cost: {
      apples: 1,
      berries: 1,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_CARROT,
      TAGS.REMOVE_ZZZ,
      TAGS.CARD_DRAW,
    ],
    description: (
      <span>
        Gain +3 🥕. <br />
        Remove 1 💤 from 3 of your <b>🐾Critters</b>.
      </span>
    ),
    recycle: <span>Draw a card.</span>,
  },
  {
    name: "Hog Food",
    cost: {
      apples: 1,
      berries: 3,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_BERRY,
      TAGS.TREAT_SYNERGY,
      TAGS.FAST_TRACK,
      TAGS.TRASH,
      TAGS.TRASH_FROM_DISCARD,
    ],
    description: (
      <span>
        Gain +3 🫐. <br /> <b>Fast-track</b> this or another <b>🧁Treat</b>.
      </span>
    ),
    recycle: (
      <span>
        <b>Trash</b> a card from your discard pile.
      </span>
    ),
  },
  {
    name: "Picnic Basket",
    cost: {
      apples: 2,
      berries: 3,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_ALL,
      TAGS.CROP_GENERATION_RANDOM,
    ],
    description: (
      <span>
        Gain +2 of a random crop. <br /> Gain +1 of each other crop.
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
    name: "Award Winning Crop",
    cost: {
      apples: 3,
      berries: 2,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    sellable: true,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM, TAGS.CARD_DRAW],
    description: "Gain +5 of a random crop.",
    recycle: "Draw 2 cards.",
  },
  {
    name: "Gift Basket",
    cost: {
      apples: 4,
      berries: 4,
      carrots: 4,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_ALL],
    description: (
      <span>
        Gain{" "}
        <span className="nowrap">
          <b>+2🍏</b>, <b>+2🫐</b>, <b>+2🥕</b>
        </span>
      </span>
    ),
    buyBonus: (
      <span>
        Your Rivals each gain{" "}
        <span className="nowrap">
          <b>+1🍏</b>, <b>+1🫐</b>, <b>+1🥕</b>
        </span>
      </span>
    ),
  },
  {
    name: "Pot of Feed",
    cost: {
      apples: 3,
      berries: 3,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [TAGS.REMOVE_ZZZ, TAGS.CARD_DRAW],
    description: "Draw 2 cards",
    buyBonus: (
      <span>
        Remove 1 💤 from each of your <b>🐾Critters</b>.
      </span>
    ),
  },
  {
    name: "Midnight Snack",
    cost: {
      apples: 2,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [TAGS.CROP_GENERATION, TAGS.CARD_DRAW, TAGS.CROP_GENERATION_RANDOM],
    description: "Gain a random crop. Draw a card.",
    buyBonus: "Each player gains a random crop",
  },
  {
    name: "Pik'n'mix",
    cost: {
      apples: 0,
      berries: 3,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    description: "Gain 3 random crops, then gain a crop of your choosing.",
  },
  {
    name: "Morning Cuppa'",
    cost: {
      apples: 1,
      berries: 2,
      carrots: 0,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    holdable: true,
    tags: [TAGS.REMOVE_ZZZ],
    description: (
      <span>
        Remove all 💤 from one of your <b>🐾Critters</b>.
      </span>
    ),
    recycle: (
      <span>
        <b>Exhaust</b> a Rival's <b>🐾Critter</b>.
      </span>
    ),
  },
  {
    name: "Sharing Plate",
    cost: {
      apples: 2,
      berries: 2,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    description:
      "Gain +4 of a crop of your choosing. Your Rivals each gain +1 of that crop.",
    buyBonus: (
      <span>
        <b>Gift</b> a card from your discard pile.
      </span>
    ),
  },
  {
    name: "Plant Food",
    cost: {
      apples: 3,
      berries: 0,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Treat,
    tags: [TAGS.SEED_SYNERGY, TAGS.ADD_TO_HAND, TAGS.SUNLIGHT_ADD],
    holdable: true,
    description: (
      <span>
        Plant all <b>🌱Seed</b> cards from your discard pile. <br /> Add 1{" "}
        <b>☀️Sunlight</b> to each of your <b>🌱Seeds</b>.
      </span>
    ),
  },
  {
    name: "Goldfish",
    cost: {
      apples: 2,
      berries: 2,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Gift,
    tags: [TAGS.GIFT],
    unsellable: true,
    description: (
      <span>
        This does nothing. <br />
        You cannot <b>Sell</b> or <b>Trash</b> this card...
      </span>
    ),
    buyBonus: (
      <span>
        <b>Gift</b> this to a Rival.
      </span>
    ),
  },
  {
    name: "Birthday Present",
    cost: {
      apples: 0,
      berries: 0,
      carrots: 2,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Gift,
    unsellable: true,
    tags: [TAGS.GIFT, TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    description: (
      <span>
        Gain 3 random crops. <br /> <b>Gift</b> this to a Rival.
      </span>
    ),
  },
  {
    name: "Hot Potato",
    cost: {
      apples: 2,
      berries: 0,
      carrots: 0,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Gift,
    tags: [TAGS.GIFT, TAGS.CROP_DESTROY],
    unsellable: true,
    description: (
      <span>
        Destroy 2 of your crops to <b>Gift</b> this to a Rival.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Gift</b> this to a Rival.
      </span>
    ),
  },
  {
    name: "Rotten Crops",
    cost: {
      apples: 0,
      berries: 2,
      carrots: 0,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Gift,
    tags: [TAGS.GIFT, TAGS.CROP_DESTROY, TAGS.CARD_DRAW],
    unsellable: true,
    description: <span>Destroy 2 of your crops to draw a card.</span>,
    buyBonus: (
      <span>
        <b>Gift</b> this to a Rival.
      </span>
    ),
  },
];

export default items;
