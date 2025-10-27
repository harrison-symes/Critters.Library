import { CARD_SET, CARD_TYPE, IFavourCard, TAGS } from "../models/cards.models";
import Critter from "./text/Critter";
import Discount from "./text/Discount";
import FastTrack from "./text/FastTrack";
import Sleepy from "./text/Sleepy";

const favours: IFavourCard[] = [
  {
    name: "Pickpocket",
    notes:
      "A mole (Burrower) is grabbing a carrot out of the back pocket of a Rabbit (Berry Grower) who is looking the other way",
    qty: 2,
    description: (
      <span>
        <b>Steal</b> a crop from a Rival.
      </span>
    ),
    tags: [TAGS.CROP_STEAL],
    type: CARD_TYPE.Favour,
    set: CARD_SET.BASE,
  },
  {
    name: "Helping Hand",
    notes:
      "A rabbit farmer (Apple Grower) is handing an apple from their basket full of apples to a worm (Top Soiler)",
    qty: 2,
    description: (
      <span>
        Gain +3 of a random crop. <br />
        Each Rival gains 1 of the same crop.
      </span>
    ),
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    type: CARD_TYPE.Favour,
    set: CARD_SET.BASE,
  },
  {
    name: "Delegate",
    notes:
      "A bee holding a noteboard (Plan Bee) is pointing at a rabbit. The rabbit (Carrot Grower) is sad. There is also a mole (Sabateur) who is not being pointed at, he is happy.",
    qty: 2,
    description: (
      <span>
        Add 1 <Sleepy /> to a Rival's <Critter />.
        <br />
        <b>-OR-</b>
        <br />
        Remove 1 <Sleepy /> from a friendly <Critter />.
        <br />
      </span>
    ),
    tags: [TAGS.ADD_ZZZ, TAGS.REMOVE_ZZZ],
    type: CARD_TYPE.Favour,
    set: CARD_SET.BASE,
  },
  {
    name: "Throw it away",
    notes: "A raccoon (Sticky fingers) throwing an empty jam jar in the trash.",
    qty: 2,
    description: (
      <span>
        <b>Trash</b> a card from your discard pile.
      </span>
    ),
    tags: [TAGS.TRASH, TAGS.TRASH_FROM_DISCARD],
    type: CARD_TYPE.Favour,
    set: CARD_SET.BASE,
  },
  {
    name: "Sell it off",
    notes:
      "A raccoon (Dumpster Diver) is handing a trowel to a Rat merchant (Price Hiker).",
    qty: 2,
    description: (
      <span>
        <b>Sell</b> a card from your hand.
      </span>
    ),
    tags: [TAGS.SELL, TAGS.SELL_FROM_HAND],
    type: CARD_TYPE.Favour,
    set: CARD_SET.BASE,
  },
  {
    name: "Rotate Stock",
    notes:
      "A Rat merchant (Price hiker) is putting a new item (a bag of seeds) on an empty shelf.",
    qty: 2,
    description: (
      <span>
        <b>Refresh</b> 2 cards in the <b>Market</b>. <br />
        <Discount />.
      </span>
    ),
    tags: [TAGS.REFRESH],
    type: CARD_TYPE.Favour,
    set: CARD_SET.BASE,
  },
  {
    name: "Barter",
    notes:
      "A hedgehog (The Head Chog) is offering a Skewer to a Rat Merchant (Price Hiker) in exchange for a Birthday Present.",
    qty: 1,
    description: (
      <span>
        <b>Discard</b> a card from your hand to <b>Sell</b> a different card
        from your discard pile.
      </span>
    ),
    tags: [TAGS.DISCARD_OWN, TAGS.SELL, TAGS.SELL_FROM_DISCARD],
    type: CARD_TYPE.Favour,
    set: CARD_SET.BASE,
  },
  {
    name: "Restock",
    notes:
      "A rat merchant is standing proudly in front of a shelf of 4 items, with a sign saying 'NEW!'.",
    qty: 1,
    description: (
      <span>
        <b>Refresh</b> a row in the <b>Market</b>.<br />
        <Discount />.
      </span>
    ),
    tags: [TAGS.DISCOUNT, TAGS.REFRESH],
    type: CARD_TYPE.Favour,
    set: CARD_SET.BASE,
  },
  {
    name: "Express Delivery",
    notes: "Hermes is handing you a package",
    qty: 1,
    description: (
      <span>
        <FastTrack /> a card.
      </span>
    ),
    tags: [TAGS.FAST_TRACK],
    type: CARD_TYPE.Favour,
    set: CARD_SET.BASE,
  },
  {
    name: "Collect Tips",
    notes:
      "A bee (Worker Bee) is reaching his hand into a jar filled with crops.",
    qty: 1,
    description: (
      <span>
        Gain a random crop for each <b>Work Order</b> you have.
      </span>
    ),
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
    type: CARD_TYPE.Favour,
    set: CARD_SET.BASE,
  },
  {
    name: "Feed the Seeds",
    notes:
      "A worm (Fertilizer) is watering a seedling sprout with a watering can (held by his 'tail')",
    qty: 1,
    description: (
      <span>
        Add 1 <b>☀️Sunlight</b> to each of your <b>🌱Seeds</b>.
      </span>
    ),
    tags: [TAGS.SEED_SYNERGY, TAGS.SUNLIGHT_ADD],
    type: CARD_TYPE.Favour,
    set: CARD_SET.BASE,
  },
  {
    name: "Piggy-back Ride",
    notes:
      "A hedgehog (Skewerer) is being given a piggy back ride by a Rabbit (Clodhopper)",
    qty: 1,
    description: (
      <span>
        Move 1 <Sleepy /> from a friendly <Critter /> to any other <Critter />.
      </span>
    ),
    tags: [TAGS.ADD_ZZZ, TAGS.REMOVE_ZZZ],
    type: CARD_TYPE.Favour,
    set: CARD_SET.BASE,
  },
  {
    name: "Exchange",
    qty: 1,
    notes:
      "A raccoon (Rummager) and a bee (Pesky bee) are making a trade for a crate of crops.",
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
    set: CARD_SET.BASE,
  },
  {
    name: "Hand out",
    qty: 1,
    notes:
      "A barrel has one of each crop in it. They look a bit sad. A sign says 'FREE'",
    description: (
      <span>
        Gain a crop of your choosing. <br />
        <Discount />.
      </span>
    ),
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_CHOOSE],
    type: CARD_TYPE.Favour,
    set: CARD_SET.BASE,
  },
  {
    name: "Collect Donations",
    qty: 1,
    description: (
      <span>
        Each of your Rivals must give you a crop. <br /> (If they have any)
      </span>
    ),
    tags: [TAGS.CROP_STEAL],
    type: CARD_TYPE.Favour,
    set: CARD_SET.CROWD_FUND,
  },
  {
    name: "Get Organised",
    qty: 1,
    description: (
      <span>
        <b>Reset</b> your deck. <br />
        <Discount />.
      </span>
    ),
    tags: [TAGS.RESET_DECK, TAGS.DISCOUNT],
    type: CARD_TYPE.Favour,
    set: CARD_SET.CROWD_FUND,
  },
  {
    name: "Donate",
    qty: 1,
    description: (
      <span>
        <b>Discard</b> a card from your hand to <b>Gift</b> a different card
        from your hand.
      </span>
    ),
    tags: [TAGS.DISCARD_OWN, TAGS.GIFT],
    type: CARD_TYPE.Favour,
    set: CARD_SET.CROWD_FUND,
  },
  {
    name: "Fundraise",
    qty: 2,
    description: (
      <span>
        <Discount />. <br />
        Gain +1 of the discounted crop type.
      </span>
    ),
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM, TAGS.DISCOUNT],
    type: CARD_TYPE.Favour,
    set: CARD_SET.CROWD_FUND,
  },
];

export default favours;
