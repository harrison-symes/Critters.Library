import { CARD_SET, CARD_TYPE, IRewardCard, TAGS } from "../models/cards.models";
import Burrow from "./text/Burrow";
import Chew from "./text/Chew";
import Critter from "./text/Critter";
import Discount from "./text/Discount";
import FastTrack from "./text/FastTrack";
import Finance from "./text/Finance";
import Item from "./text/Item";
import Seed from "./text/Seed";
import Skewer from "./text/Skewer";
import Sleepy from "./text/Sleepy";
import Sunlight from "./text/Sunlight";
import Tool from "./text/Tool";
import Treat from "./text/Treat";

const rewards: IRewardCard[] = [
  {
    name: "Apple Stall",
    flavour: "Orange really is the new Black.",
    notes:
      "A market stall with a sign with apples on it. A crate filled with apples is behind the stall.",
    qty: 2,
    description: (
      <span>
        Instantly Gain +2 🍏
        <br />
        From now on, you may <b>Trade</b> 2🍏 for any 1 crop.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_APPLE, TAGS.TRADE],
  },
  {
    name: "Berry Stall",
    flavour: "That's a Berry good deal!",
    notes:
      "A market stall with a sign with berries on it. A crate filled with berries is sitting on the stall counter.",
    qty: 2,
    description: (
      <span>
        Instantly Gain +2 🫐
        <br />
        From now on, you may <b>Trade</b> 2🫐 for any 1 crop.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_BERRY, TAGS.TRADE],
  },
  {
    name: "Carrot Stall",
    flavour: "2 Apples a day keeps the Apples away.",
    notes:
      "A market stall with a sign with carrots on it. A crate filled with carrots is behind the stall.",
    qty: 2,
    description: (
      <span>
        Instantly Gain +2 🥕
        <br />
        From now on, you may <b>Trade</b> 2🥕 for any 1 crop.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_CARROT, TAGS.TRADE],
  },
  {
    name: "Pawn Shop",
    flavour: "Where you can buy a Chess set with only half the pieces.",
    notes: "A popup shop with various trinkets on display.",
    qty: 1,
    description: (
      <span>
        Your <b>🏠Starter</b> cards <b>Sell</b> for twice as much.
        <br />
        Instantly <b>Sell</b> a <b>🏠Starter</b> card from your discard pile.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.SELL, TAGS.SELL_FROM_DISCARD],
  },
  {
    name: "Notice Board",
    flavour: "Have you ever noticed?",
    notes: "A bulliton board with things pinned to it in the village square.",
    qty: 1,
    description: (
      <span>
        Instantly, and whenever you complete a <b>Work Order</b>, <Skewer /> a
        card from your discard pile.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.SKEWER, TAGS.WORK_ORDER_COMPLETION],
  },
  {
    name: "Work Bench",
    flavour: "It's all Work Bench and no Play bench.",
    notes: "Unfolded blueprints on a wooden workbench.",
    qty: 1,
    description: (
      <span>
        Instantly, and whenever you complete a <b>Work Order</b>, <FastTrack />{" "}
        a <Critter />, a <Seed /> and an <Item />.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.FAST_TRACK, TAGS.WORK_ORDER_COMPLETION],
  },
  {
    name: "Gift Shop",
    flavour: "You have to pass through here on your way out of the Market.",
    notes: "A small stall with presents on display.",
    qty: 1,
    description: (
      <span>
        Instantly, and whenever you complete a <b>Work Order</b>, you may{" "}
        <b>Gift</b> a card from your discard pile.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.WORK_ORDER_COMPLETION, TAGS.GIFT],
  },
  {
    name: "Coffee Cart",
    flavour: "You get great Coffee Art from this Coffee Cart.",
    notes:
      "A little cart with a big coffee pot sitting in it. A sign with an espresso on it.",
    qty: 1,
    description: (
      <span>
        At the end of your turn, if you have at least 3 <Critter plural />,
        remove 1 <Sleepy /> from one of them.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.REMOVE_ZZZ],
  },
  {
    name: "Greenhouse",
    flavour: "The house is green from all the Chlorophyll.",
    notes:
      "A simple small greenhouse. Inside you can see a row of sprouted seedlings.",
    qty: 1,
    description: (
      <span>
        At the end of your turn, if you have at least 3 planted <Seed plural />,
        add 1 <Sunlight /> to each of your <Seed plural />.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.SEED_SYNERGY, TAGS.SUNLIGHT_ADD],
  },
  {
    name: "Rich Plot",
    flavour: "The other plots didn't work as hard, and bought too much coffee.",
    notes:
      "A plot of land with lots of seedlings sprouting from the soil. The soil is dark.",
    qty: 1,
    description: (
      <span>
        After you <b>Sell</b> or <b>Trash</b> a card, add 1 <Sunlight /> to each
        of your <Seed plural />.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.SEED_SYNERGY, TAGS.SUNLIGHT_ADD, TAGS.SELL, TAGS.TRASH],
  },
  {
    name: "Bountiful Plot",
    flavour: "There's a bounty out for this Plot.",
    notes: "A plot of land with lots of lush bush.",
    qty: 1,
    description: (
      <span>
        After you <b>Harvest</b> a <b>🌱Seed</b> with 3 <Sunlight />, draw a
        card.
        <br /> (Once per turn.)
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.SEED_SYNERGY, TAGS.CARD_DRAW],
  },
  {
    name: "Sunny Plot",
    flavour: "The perfect spot for Sunflowers.",
    notes: "A empty plot of land, nothing is planted, but the sun is shining",
    qty: 1,
    description: (
      <span>
        Your <Seed plural /> gain 1 <Sunlight /> when planted.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.SEED_SYNERGY, TAGS.SUNLIGHT_ADD],
  },
  {
    name: "Pot Plant",
    flavour: "Harvest him? But he is my friend!",
    notes: "A clay pot filled with soil with a single seed sproutling inside",
    qty: 1,
    description: (
      <span>
        At the start of your turn, if you have only 1 planted <Seed /> AND that{" "}
        <Seed /> has 3 <Sunlight />, gain 2 random crops.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.SEED_SYNERGY, TAGS.CARD_DRAW],
  },
  {
    name: "Clocktower",
    flavour:
      "The Roosters have been real quiet ever since this Clocktower showed up.",
    notes: "A big Cuckoo Clock in the middle of the town square.",
    qty: 1,
    description: (
      <span>
        After you deck is <b>Reset</b>, draw a card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.RESET_DECK, TAGS.CARD_DRAW],
  },
  {
    name: "Freezer",
    flavour: "You can sell those Berries for more during the off-season.",
    notes: "An open box freezer with lots of crops inside.",
    qty: 1,
    description: (
      <span>
        At the start of your turn, if you have at least 3 of each crop, draw a
        card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.CARD_DRAW],
  },
  {
    name: "Toll Booth",
    flavour: "Do not pass. Do not collect 200 Carrots.",
    notes:
      "A stall at the market, but with a big toll gate (being held by the Raccoon inside the stall)",
    qty: 1,
    description: (
      <span>
        After you <b>Buy</b> or <b>Sell</b> a Farm card, draw a card. <br />{" "}
        (Once per turn.)
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.CARD_DRAW, TAGS.SELL],
  },
  {
    name: "Weather Vane",
    flavour: "They used to employ real Roosters to sit on these all day.",
    notes:
      "A classic weather vane, with compass directions and a big metal rooster on top",
    qty: 1,
    description: (
      <span>
        Whenever you you <FastTrack /> a <Critter /> or <Seed />, you may{" "}
        <Skewer /> it instead.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.FAST_TRACK, TAGS.SKEWER],
  },
  {
    name: "Skewer Cart",
    flavour: "Skewer? I hardly know her!",
    notes: "A hedgehog is selling skewers (kebobs) at the cart.",
    qty: 1,
    description: (
      <span>
        After you <Skewer /> a card, draw a card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.CARD_DRAW, TAGS.SKEWER],
  },
  {
    name: "Junkyard",
    flavour: "Elephant's have a LOT of junk in their trunks.",
    notes: "A pile of old tools and various items",
    qty: 1,
    description: (
      <span>
        After you play a <Tool />, you may <b>Trash</b> a card from your discard
        pile.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.TOOL_SYNERGY, TAGS.TRASH, TAGS.TRASH_FROM_DISCARD],
  },
  {
    name: "Tool Shed",
    flavour: "Snakes also shed sometimes.",
    notes:
      "A worn down wooden shed. The door is a bit wonky and open slightly. Inside you can see a rake and a pitchfork",
    qty: 1,
    description: (
      <span>
        After you play a <Tool />, you may <Burrow /> a different card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.TOOL_SYNERGY, TAGS.BURROW],
  },
  {
    name: "Breakroom",
    flavour: "Please don't actually break anything.",
    notes:
      "A cozy room with a table with a coffee mug on it. Maybe a beanbag in the corner.",
    qty: 1,
    description: (
      <span>
        After you play a <Treat />, remove 1 <Sleepy /> from a friendly{" "}
        <Critter />. <br /> (Once per turn.)
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.REMOVE_ZZZ, TAGS.TREAT_SYNERGY],
  },
  {
    name: "Snack Cart",
    flavour: "Beavers think that the Cart is a snack too.",
    notes: "A wooden cart with lots of plated cakes and cupcakes.",
    qty: 1,
    description: (
      <span>
        After you play a <Treat />, <b>Steal</b> a crop from a Rival.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.CROP_STEAL, TAGS.TREAT_SYNERGY],
  },
  {
    name: "Burnt Ledger",
    flavour: "Hey! Who cooked the books?",
    notes:
      "Like the book from Cooked Books card, but it is singed / has burn marks",
    qty: 1,
    description: (
      <span>
        After you <b>Sell</b> or <b>Trash</b> a <Finance /> card, you may{" "}
        <FastTrack /> it.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.FINANCE_SYNERGY, TAGS.SELL, TAGS.TRASH, TAGS.FAST_TRACK],
  },
  {
    name: "Vault",
    flavour: "Store your crops to gain Compost Interest.",
    notes: "A large safe, with a metal wheel to open it.",
    qty: 1,
    description: (
      <span>
        After you play a <Finance /> card, gain +2 of a random crop.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [
      TAGS.FINANCE_SYNERGY,
      TAGS.CROP_GENERATION,
      TAGS.CROP_GENERATION_RANDOM,
    ],
  },
  {
    name: "Trading Post",
    flavour: "Where you can get the rarest trading cards.",
    notes: "A popup stall with a big SALE sign. All 3 crops on display.",
    qty: 1,
    description: (
      <span>
        Whenever you <Discount />, gain +1 of the discounted crop type.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.DISCOUNT, TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
  },
  {
    name: "Dumpster",
    flavour: "'NO DIVING!'",
    notes: "A big dumpster filled with garbage bags and various items.",
    qty: 1,
    description: (
      <span>
        After you <b>Discard</b> a card from your hand, draw a card. <br />
        (Once per turn)
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.DISCARD_OWN, TAGS.CARD_DRAW],
  },
  {
    name: "Lost & Found",
    flavour: "But what if this ever gets lost?",
    notes: "A box with the label 'Lost & Found' with various things inside.",
    qty: 1,
    description: (
      <span>
        After you <b>Discard</b> a card from your hand, you may <Burrow /> that
        card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.DISCARD_OWN, TAGS.FAST_TRACK],
  },
  {
    name: "Billboard",
    flavour: "Need a job done? Call Clodhopper!",
    notes:
      "A billboard advertising Clodhopper's services. (A big rabbit with big boots)",
    qty: 1,
    description: (
      <span>
        At the end of your turn, if you have only 1 <b>Work Order</b>, draw an
        extra card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.CARD_DRAW],
  },
  {
    name: "Grain Silo",
    flavour: "When it is the only silo you have, its a solo silo.",
    notes: "A large silo on a farm with grain spilling out.",
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
    set: CARD_SET.BASE,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_ALL, TAGS.RESET_DECK],
  },
  {
    name: "The Burrows",
    flavour: "",
    notes: "A hole in the ground",
    qty: 1,
    description: (
      <span>
        If you have only 1 <Critter /> in play, <Burrow /> them whenever they
        are <b>Exhausted</b>.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.BURROW],
  },
  {
    name: "Tip Jar",
    flavour: "You'll want to collect them before they start rotting.",
    notes:
      "A glass jar with a coin slot in the lid. It has a label with the text 'Tips' on it. Has some berries in it.",
    qty: 1,
    description: (
      <span>
        After you <b>Buy</b> a Farm card, <b>Discount</b> and gain +1 of the
        discounted crop type.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.ADD_TO_HAND],
  },
  {
    name: "Donation Bin",
    qty: 1,
    description: (
      <span>
        After you <b>Steal</b> a crop from a Rival, that Rival must also give
        you a crop (If they have any).
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.CROWD_FUND,
    tags: [TAGS.CROP_STEAL],
  },
  {
    name: "Crowd Fund",
    qty: 1,
    description: (
      <span>
        After your deck is <b>Reset</b>, each Rival must give you a crop (If
        they have any).
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.CROWD_FUND,
    tags: [TAGS.CROP_STEAL, TAGS.RESET_DECK],
  },
  {
    name: "Second-Hand Store",
    qty: 1,
    description: (
      <span>
        Whenever you <b>Trash</b> a card, you may <b>Gift</b> it instead.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.CROWD_FUND,
    tags: [TAGS.TRASH, TAGS.GIFT],
  },
  {
    name: "Poor Investment",
    qty: 1,
    description: (
      <span>
        At the end of your turn, if you have less <b>🏆Rewards</b> than your
        Rivals, gain 2 random crops.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.CROWD_FUND,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_ALL, TAGS.LESS_REWARDS],
  },
  {
    name: "Meeting Room",
    qty: 1,
    description: (
      <span>
        If you have less <b>🏆Rewards</b> than your Rivals, you don't have to
        pay any <b>Overtime</b> packing fees.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.CROWD_FUND,
    tags: [TAGS.LESS_REWARDS],
  },
  {
    name: "Investment Window",
    qty: 1,
    description: (
      <span>
        If you have less <b>🏆Rewards</b> than your Rivals, your <Seed plural />{" "}
        gain an extra 1 <Sunlight /> at the end of your turn.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.CROWD_FUND,
    tags: [TAGS.SEED_SYNERGY, TAGS.LESS_REWARDS, TAGS.SUNLIGHT_ADD],
  },
  {
    name: "Sample Stand",
    qty: 1,
    description: (
      <span>
        After you <FastTrack /> a <Treat />, draw a card. <br /> (Once per
        turn.)
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.CROWD_FUND,
    tags: [TAGS.TREAT_SYNERGY, TAGS.FAST_TRACK, TAGS.CARD_DRAW],
  },
  {
    name: "Fraudulent Documents",
    qty: 1,
    description: (
      <span>
        Your <Tool plural /> and <Treat plural /> are now also <Finance />{" "}
        cards. <br /> After you <b>Sell</b> a <Finance /> card, draw a card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.CROWD_FUND,
    tags: [TAGS.FINANCE_SYNERGY, TAGS.DOUBLE_SELL],
  },
  {
    name: "Warehouse",
    qty: 1,
    description: (
      <span>
        After you <Skewer /> a <Tool />, gain{" "}
        <span className="nowrap">
          <b>+1🍏</b>, <b>+1🫐</b>, <b>+1🥕</b>
        </span>
        .
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.CROWD_FUND,
    tags: [TAGS.TOOL_SYNERGY, TAGS.SKEWER, TAGS.FREE_CRATE],
  },
  {
    name: "Oak Tree",
    qty: 1,
    description: (
      <span>
        After you <Chew /> or <b>Discard</b> a <Seed />, <b>Plant</b> it.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.WOOD_WORK,
    tags: [TAGS.CHEW, TAGS.PLANT_FROM_DISCARD],
  },
  {
    name: "Birch Tree",
    qty: 1,
    description: (
      <span>
        After you <Chew /> or <b>Discard</b> a <Critter />, draw a card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.WOOD_WORK,
    tags: [TAGS.CHEW],
  },
  {
    name: "Maple Tree",
    qty: 1,
    description: (
      <span>
        Whenever you remove a <Sleepy /> from a friendly <Critter />, instantly
        perform their <b>Talent</b>. (Without adding a <Sleepy />)
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.WOOD_WORK,
    tags: [TAGS.SUGAR_RUSH],
  },
  {
    name: "Beaver Dam",
    qty: 1,
    description: (
      <span>
        Instantly, and whenever you complete a <b>Work Order</b>,{" "}
        <Chew count={3} /> and add one of the chewed cards to your hand.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.WOOD_WORK,
    tags: [TAGS.CHEW, TAGS.SKEWER],
  },
  {
    name: "Wittle House",
    qty: 1,
    description: (
      <span>
        Instantly, and whenever you complete a <b>Work Order</b>, get a random{" "}
        <b>Wittle Critter</b>.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.WOOD_WORK,
    tags: [TAGS.CHEW, TAGS.CARD_DRAW],
  },
  {
    name: "Sawmill",
    qty: 1,
    description: (
      <span>
        After you <b>Buy</b> a <b>Favour</b>, <Chew count={2} /> and draw a
        card. <br /> (Once per turn.)
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.WOOD_WORK,
    tags: [TAGS.CHEW],
  },
  {
    name: "Farm Gate",
    qty: 1,
    description: (
      <span>
        Whenever your deck is <b>Reset</b>, remove 1 <Sleepy /> from a friendly{" "}
        <Critter />.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.WOOD_WORK,
    tags: [TAGS.RESET_DECK, TAGS.REMOVE_ZZZ],
  },
  {
    name: "Lush Forest",
    qty: 1,
    description: (
      <span>
        Whenever your deck is <b>Reset</b>, first <b>plant</b> a <Seed /> from
        your discard pile and add 1 <Sunlight /> to each of your <Seed plural />
        .
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.WOOD_WORK,
    tags: [
      TAGS.SEED_SYNERGY,
      TAGS.RESET_DECK,
      TAGS.SUNLIGHT_ADD,
      TAGS.PLANT_FROM_DISCARD,
    ],
  },
];

export default rewards;
