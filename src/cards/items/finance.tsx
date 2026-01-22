import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import Burrow from "../text/Burrow";
import Chew, { Chewed } from "../text/Chew";
import Critter from "../text/Critter";
import Discount from "../text/Discount";
import Shuffle from "../text/Shuffle";
import Item from "../text/Item";
import Seed from "../text/Seed";
import Skewer from "../text/Skewer";
import Sleepy from "../text/Sleepy";
import Sunlight from "../text/Sunlight";

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
    flavour: "Reduce waste, play that card again!",
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    description: (
      <span>
        Gain +2 🍏. <br /> <Shuffle /> a <b>🎒Item</b>.<br />
        <Discount />.
      </span>
    ),
    holdable: true,
    buyBonus: (
      <span>
        <b>Trash</b> a <b>🏠Starter</b> card from your discard pile.
      </span>
    ),
    tags: [
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_APPLE,
      TAGS.SHUFFLE,
      TAGS.DISCOUNT,
      TAGS.TRASH,
      TAGS.TRASH_FROM_DISCARD,
    ],
  },
  {
    name: "Closed Sign",
    image: "/closed_sign.png",
    ai_image: "/ai/closed_sign.png",
    flavour: "Come back in the morning.",
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
      TAGS.TRASH,
      TAGS.TRASH_FROM_DISCARD,
    ],
    description: (
      <span>
        Gain +2 🥕. <br />
        Add 1 <Sleepy /> to a Rival's <Critter />. <br />
        <Discount />.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Trash</b> a <b>🏠Starter</b> card from your discard pile.
      </span>
    ),
  },
  {
    name: "Loyalty Card",
    image: "/loyalty_card.png",
    ai_image: "/ai/loyalty_card.png",
    flavour: "You're my favourite customer!",
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
    refundable: true,
    tags: [
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_BERRY,
      TAGS.DISCOUNT,
      TAGS.FREE_FAVOUR,
      TAGS.TRASH_FROM_DISCARD,
      TAGS.TRASH,
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
        <b>Trash</b> a <b>🏠Starter</b> card from your discard pile.
      </span>
    ),
  },
  {
    name: "Cooked Books",
    image: "/cooked_books.png",
    ai_image: "/ai/cooked_books.png",
    flavour: "A delicious meal, unless you're an Auditor.",
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
    image: "/instruction_manual",
    ai_image: "/ai/instruction_manual",
    notes:
      "A sheet similar to lego instructions, with numbered steps 1 2 and 3. The steps show how to put and apple into a crate",
    flavour: "Step 1: Get Apples. Step 2: ???. Step 3: Profit!",
    cost: {
      apples: 1,
      berries: 2,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    tags: [TAGS.DISCARD_OWN, TAGS.FREE_CRATE, TAGS.BURROW],
    description: (
      <span>
        <b>Discard</b> a card from your hand to pack a free <b>📦Crate</b> into
        a <b>Work Order</b>.
      </span>
    ),
    recycle: (
      <span>
        <Burrow /> a card.
      </span>
    ),
  },
  {
    name: "Damaged Goods",
    image: "/damaged_goods.png",
    ai_image: "/ai/damaged_goods.png",
    flavour: "It was broken when I bought it.",
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
        <b>Sell</b> a card from your hand.
        <br />
        <b>-OR-</b>
        <br />
        <b>Trash</b> a card from your discard pile.
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
    image: "/gift_card.png",
    ai_image: "/ai/gift_card.png",
    flavour: "For when you're out of ideas.",
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
    refundable: true,
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
    flavour: "Carrot patch? You mean shredded Carrots?",
    image: "/paper_shredder.png",
    ai_image: "/ai/paper_shredder.png",
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
    refundable: true,
    tags: [
      TAGS.ADD_TO_HAND,
      TAGS.TRASH,
      TAGS.TRASH_FROM_DISCARD,
      TAGS.FINANCE_SYNERGY,
      TAGS.BURROW,
    ],
    description: (
      <span>
        Play an <b>🎒Item</b> from your discard pile, and then <b>Trash</b> it.
        <br />
        If it was a <b>🏦Finance</b> card, <Burrow /> it.
      </span>
    ),
  },
  {
    name: "Open Sign",
    flavour: "Excuse me, do you work here?",
    image: "/open_sign.png",
    ai_image: "/ai/open_sign.png",
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
    image: "/contrabrand.png",
    ai_image: "/ai/contrabrand.png",
    notes: "A purple carrot and a red apple",
    flavour: "Red Apples? Purple Carrots? Are these allowed?",
    cost: {
      apples: 2,
      berries: 3,
      carrots: 0,
    },
    qty: 1,
    set: CARD_SET.BASE,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    tags: [TAGS.GIFT, TAGS.BURROW],
    unsellable: true,
    description: (
      <span>
        <b>Gift</b> a card from your discard pile.
      </span>
    ),
    recycle: (
      <span>
        <Burrow /> this card.
      </span>
    ),
  },
  {
    name: "Register",
    image: "/register.png",
    ai_image: "/ai/register.png",
    flavour: "Will that be Crops or Card?",
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
        <b>Steal</b>{" "}
        <span className="nowrap">
          <b>1🍏</b>, <b>1🫐</b>, <b>1🥕</b>
        </span>{" "}
        from a Rival.
      </span>
    ),
    recycle: "Gain 3 random crops.",
  },
  {
    name: "Receipts",
    flavour: "You've been keeping track of your purchases, right?",
    image: "/receipts.png",
    ai_image: "/ai/receipts.png",
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
        <Shuffle /> an <Item />.
      </span>
    ),
  },
  {
    set: CARD_SET.CHARITY_DRIVE,
    name: "Bargain Bin",
    cost: {
      apples: 3,
      berries: 3,
      carrots: 3,
    },
    qty: 1,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    tags: [TAGS.FREE_CARD, TAGS.SHUFFLE, TAGS.DISCOUNT],
    description: (
      <span>
        <Shuffle /> a Farm card from the <b>Market</b>. <br />
        <Shuffle /> every <b>🏠Starter</b> card from your discard pile too.
      </span>
    ),
    buyBonus: (
      <span>
        <Discount />.
      </span>
    ),
  },
  {
    set: CARD_SET.CHARITY_DRIVE,
    name: "Crop Sink",
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
      TAGS.SKEWER,
      TAGS.TRASH,
      TAGS.TRASH_FROM_DISCARD,
      TAGS.FINANCE_SYNERGY,
    ],
    description: (
      <span>
        <b>Trash</b> a card from your discard pile. <br />
        If it was a <b>🏦Finance</b> card, <Skewer /> it after.
      </span>
    ),
  },
  {
    set: CARD_SET.CHARITY_DRIVE,
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
    refundable: true,
    description: (
      <span>
        <b>Sell</b> a card from your discard pile. <br />
        If you have less <b>🏆Rewards</b> than your Rivals, <b>Sell</b> an extra
        card.
      </span>
    ),
    recycle: <span>Gain +3 of a random crop.</span>,
  },
  {
    set: CARD_SET.WOOD_WORK,
    name: "Money Tree",
    cost: {
      apples: 2,
      berries: 1,
      carrots: 2,
    },
    qty: 1,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    holdable: true,
    tags: [
      TAGS.SELL,
      TAGS.SELL_FROM_HAND,
      TAGS.SEED_SYNERGY,
      TAGS.SUNLIGHT_ADD,
      TAGS.DISCOUNT,
    ],
    description: (
      <span>
        <b>Sell</b> a card from your hand. <br />
        Add 1 <Sunlight /> to each of your <Seed plural />. <br />
        <Discount />.
      </span>
    ),
    buyBonus: (
      <span>
        <Shuffle /> this card.
      </span>
    ),
  },
  {
    set: CARD_SET.WOOD_WORK,
    name: "Birdhouse",
    cost: {
      apples: 0,
      berries: 2,
      carrots: 2,
    },
    qty: 1,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    tags: [TAGS.CHEW, TAGS.SELL, TAGS.DISCOUNT],
    description: (
      <span>
        <Chew count={3} />. <br /> You may <b>Sell</b> one of the <Chewed />{" "}
        cards. <br />
        <Discount />
      </span>
    ),
  },
  {
    set: CARD_SET.WOOD_WORK,
    name: "Hand-made Crate",
    cost: {
      apples: 3,
      berries: 2,
      carrots: 1,
    },
    qty: 1,
    type: CARD_TYPE.Item,
    subtype: CARD_SUBTYPE.Finance,
    tags: [TAGS.FREE_CRATE, TAGS.BURROW],
    description: (
      <span>
        Draw a card. <br />
        <Burrow /> this card.
      </span>
    ),
    recycle: (
      <span>
        Pack a free <b>📦Crate</b> into a <b>Work Order</b>.
      </span>
    ),
  },
];

export default finance;
