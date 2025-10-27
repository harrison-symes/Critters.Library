import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import Critter from "../text/Critter";
import Discount from "../text/Discount";
import FastTrack from "../text/FastTrack";
import Item from "../text/Item";
import Skewer from "../text/Skewer";
import Sleepy from "../text/Sleepy";

const finance: IFarmCard[] = [
  {
    name: "Recycling Bin",
    cost: {
      apples: 0,
      berries: 2,
      carrots: 2,
    },
    image: "/recycling_bin.png",
    ai_image: "/ai/recycling_bin.png",
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    description: (
      <span>
        Gain +2 🍏. <br /> <FastTrack /> an <b>🎒Item</b>.<br />
        <Discount />.
      </span>
    ),
    holdable: true,
    buyBonus: (
      <span>
        Get a <b>Favour</b> from the <b>Market</b> for free.
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
    notes: "A fold up sign with the word 'closed' written on it",
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
        Add 1 <Sleepy /> to EVERY <Critter />. <br />
        <Discount />.
      </span>
    ),
    buyBonus: (
      <span>
        Get a <b>Favour</b> from the <b>Market</b> for free.
      </span>
    ),
  },
  {
    name: "Loyalty Card",
    notes:
      "A punch card with a cartoon rat face and 6 circles with berries on them. Some of them are punched out (like a coffee loyalty card).",
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
        <Discount />.
      </span>
    ),
    buyBonus: (
      <span>
        Get a <b>Favour</b> from the <b>Market</b> for free.
      </span>
    ),
  },
  {
    name: "Cooked Books",
    notes: "A thick open book resting in a pot of boiling water",
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
        If it was a <b>🏦Finance</b> card, <Skewer /> it afterwards.
      </span>
    ),
  },
  {
    name: "Instruction manual",
    notes:
      "A sheet similar to lego instructions, with numbered steps 1 2 and 3. The steps show how to put and apple into a crate",
    cost: {
      apples: 1,
      berries: 2,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    tags: [TAGS.DISCARD_OWN, TAGS.FREE_CRATE, TAGS.FREE_CARD],
    description: (
      <span>
        <b>Discard</b> a card from your hand to pack a free crate into a{" "}
        <b>Work Order</b>.
      </span>
    ),
    recycle: (
      <span>
        Get a free <b>Work Order</b>.
      </span>
    ),
  },
  {
    name: "Damaged Goods",
    notes: "A worn down opened top crate, with rotten crops inside",
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
      TAGS.CHOOSE_ONE,
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
    notes:
      "A gift card with a cartoon rat face and the word 'FREE!' written on it.",
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
        <Skewer /> a Farm card from the <b>Market</b>.
        <br /> Put <b>Gift Card</b> back into the <b>Market</b>.
      </span>
    ),
  },
  {
    name: "Paper Shredder",
    notes: "A paper shredder that is shredding receipts",
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
    notes: "A fold out sign with the word 'OPEN' on it",
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
        <b>Refresh</b> 2 cards in the <b>Market</b>. <br /> Gain 2 random crops.
        <br />
        <Discount />.
      </span>
    ),
    buyBonus: "Put this card into your hand.",
  },
  {
    name: "Contrabrand",
    notes: "A purple carrot and a red apple",
    cost: {
      apples: 2,
      berries: 3,
      carrots: 0,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    tags: [TAGS.GIFT],
    unsellable: true,
    description: (
      <span>
        <b>Gift</b> a card from your discard pile.
      </span>
    ),
    recycle: <span>Put this at the bottom of your deck.</span>,
  },
  {
    name: "Register",
    notes:
      "A cash register with a pull lever on the side. 3 buttons with icons for each crop type. The draw is open and there are various crops in little compartments",
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
    notes:
      "A bundle of receipts, the text is eligible squiggly lines. Possibly a rubber band around them.",
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
        <br /> <Discount />.
      </span>
    ),
    recycle: (
      <span>
        <FastTrack /> an <Item />.
      </span>
    ),
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
