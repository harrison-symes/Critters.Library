import { CARD_SET, CARD_TYPE, IRewardCard, TAGS } from "../models/cards.models";
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
    name: "Gold Locket",
    notes:
      "A golden locket in the shape of a heart. The locket is closed. It has a chain to be worn around a neck. It has a little keyhole on the side. Indication of it sparkling.",
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
    name: "Work Roster",
    notes:
      "A piece of paper pinned to a wall. It has a calendar like layout (for one week only). On each day a rough sketch of a different animal's face. Monday and Wednesday are a rabbit. Tuesday and Saturday are a rat. Thursday Friday and Sunday are bees.",
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
    name: "Blueprints",
    notes:
      "Unfolded blueprints on a table. White lines showing the plans for a new plot of land, broken down by sections for different crops.",
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
    name: "Wrapping Paper",
    notes:
      "Refer to Birthday present card. Wrapping paper colours and pattern should match. This wrapping paper will be a slightly unrolled roll of paper. Untied ribbons sitting off to the side. Maybe scizzors and tape in frame?",
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
    name: "Espresso Machine",
    notes:
      "Classic single head espresso machine, but make it look clunky/rustic. Bag of coffee beans to the side?",
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
    notes:
      "A simple small greenhouse. Inside you can see a row of sprouted seedlings.",
    qty: 1,
    description: (
      <span>
        At the end of your turn, if you have at least 3 planted <Seed plural />,
        each of your <Seed plural /> gain +1 <Sunlight />
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.SEED_SYNERGY, TAGS.SUNLIGHT_ADD],
  },
  {
    name: "Seed Fund",
    notes:
      "A tip jar (with a coin slot in the lid) but it is filled with seeds. Maybe a label with a seed sprout logo on it",
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
    name: "Coffee Grinds",
    notes:
      "A bag filled with throwaway coffee grinds. They should have spilled a little bit and left marks on the bag",
    qty: 1,
    description: (
      <span>
        After you <b>Harvest</b> a <b>🌱Seed</b> with 3 <Sunlight />, draw a
        card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.SEED_SYNERGY, TAGS.CARD_DRAW],
  },
  {
    name: "Magnifying Glass",
    notes:
      "A magnifying glass refracting sunlight (large sunbeam into an acute sunbeam. The end of the sunbeam can have a little burnmark where it touches the ground",
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
    notes: "A clay pot filled with soil with a single seed sproutling inside",
    qty: 1,
    description: (
      <span>
        At the end of your turn, if you have only 1 planted <Seed /> AND that{" "}
        <Seed /> has 3 <Sunlight />, gain 2 random crops.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.SEED_SYNERGY, TAGS.CARD_DRAW],
  },
  {
    name: "Rusty Rake",
    notes:
      "A rake (leaning against a wall). The ends of the prongs are rusted, and a bit wonky/bent",
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
    name: "Vault",
    notes:
      "A small metal safe. A bit battered. It has a keyhole and a turnwheel on the front door",
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
    name: "Tax Return",
    notes:
      "A piece of paper. Squiggly lines indicating text. Maybe icons for the 3 crops with random % values next to them? (Apple 10%, Carrot 15%, Berry 5%)",
    qty: 1,
    description: (
      <span>
        After you <b>Buy</b> or <b>Sell</b> a Farm card, draw a card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.CARD_DRAW, TAGS.SELL],
  },
  {
    name: "Broken Compass",
    notes:
      "An open pocket compass. Not sure how to convey that it doesn't work, but go nuts",
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
    name: "Skewer",
    notes: "A wooden stick with a few berries skewered on it",
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
    name: "Feather Duster",
    notes: "Different coloured feathers on the end of a stick",
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
    notes:
      "A worn down wooden shed. The door is a bit wonky and open slightly. Inside you can see a rake and a pitchfork",
    qty: 1,
    description: (
      <span>
        After you play a <Tool />, you may <FastTrack /> a different card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.TOOL_SYNERGY, TAGS.FAST_TRACK],
  },
  {
    name: "Coffee Mug",
    notes: "An empty wide mug. It has cheesey text on it saying '#1 Farmer'",
    qty: 1,
    description: (
      <span>
        After you play a <Treat />, remove 1 <Sleepy /> from one of your{" "}
        <Critter plural />.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.REMOVE_ZZZ, TAGS.TREAT_SYNERGY],
  },
  {
    name: "Satchel",
    notes:
      "A rustic brown satchel. Put whatever you feel like in the side pockets",
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
    name: "Rainy Day Savings",
    notes: "A coinpurse filled with Berries",
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
    name: "Merchant Scales",
    notes: "Price hikers scales",
    qty: 1,
    description: (
      <span>
        Whenever you <Discount />, gain +2 of the discounted crop type.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.DISCOUNT, TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_RANDOM],
  },
  {
    name: "Black Gloves",
    notes: "The gloves that Rummager is wearing",
    qty: 1,
    description: (
      <span>
        After you <b>Discard</b> a card from your hand (during your turn), draw
        a card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.DISCARD_OWN, TAGS.CARD_DRAW],
  },
  {
    name: "Jam Jar",
    notes: "Sticky fingers' jar of jam",
    qty: 1,
    description: (
      <span>
        After you <b>Discard</b> a card from your hand (during your turn), you
        may <FastTrack /> a different card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.DISCARD_OWN, TAGS.FAST_TRACK],
  },
  {
    name: "Packing Slip",
    notes:
      "A clipboard with a piece of paper on it. Squiggly lines indicating text with ticked boxes on each row. A section for a signature is at the bottom, and it has Sticky Fingers' pawprint as a signature",
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
    name: "Heavy Bushel",
    notes: "A bushel overfilled with Apples",
    qty: 1,
    description: (
      <span>
        You draw 1 less card at the end of your turns. <br />
        After your deck is <b>Reset</b>, gain{" "}
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
    name: "Friendship Bracelet",
    notes:
      "A bracelet made of various beads, with a heart shaped bead at the center.",
    qty: 1,
    description: (
      <span>
        If you have only 1 <Critter /> in play, <FastTrack /> them whenever they
        are <b>Exhausted</b>.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.BASE,
    tags: [TAGS.FREE_FAVOUR],
  },
  {
    name: "Tip Jar",
    notes:
      "A glass jar with a coin slot in the lid. It has a label with the text 'Tips' on it. ",
    qty: 1,
    description: (
      <span>
        Whenever you <b>Buy</b> a Farm card, you may pay{" "}
        <span className="nowrap">
          <b>1🍏</b>, <b>1🫐</b>, <b>1🥕</b>
        </span>{" "}
        to put that card into you hand.
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
        Whenever you <b>Steal</b> a crop from a Rival, that Rival must also give
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
        Whenever your deck is <b>Reset</b>, each Rival must give you a crop (If
        they have any).
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.CROWD_FUND,
    tags: [TAGS.CROP_STEAL, TAGS.RESET_DECK],
  },
  {
    name: "Hand-me-downs",
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
    name: "Demo Product",
    qty: 1,
    description: (
      <span>
        After you <b>Discard</b> a card from your hand (during your turn), you
        may <b>Trash</b> or <FastTrack /> that card.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.CROWD_FUND,
    tags: [TAGS.DISCARD_OWN, TAGS.FAST_TRACK, TAGS.TRASH, TAGS.TRASH_FROM_HAND],
  },
  {
    name: "Poor Investment",
    qty: 1,
    description: (
      <span>
        At the end of your turn, if you have less <b>🏆Rewards</b> than your
        Rivals, gain{" "}
        <span className="nowrap">
          <b>+1🍏</b>, <b>+1🫐</b>, <b>+1🥕</b>
        </span>
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.CROWD_FUND,
    tags: [TAGS.CROP_GENERATION, TAGS.CROP_GENERATION_ALL, TAGS.LESS_REWARDS],
  },
  {
    name: "Team Agreement",
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
    name: "Lunchbox",
    qty: 1,
    description: (
      <span>
        After you <FastTrack /> a <Treat />, draw a card.
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
        Your <Finance /> cards sell for twice as much. <br />
        Your <b>🛠️Tools</b> and <b>🧁Treats</b> are now also <Finance /> cards.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.CROWD_FUND,
    tags: [TAGS.FINANCE_SYNERGY, TAGS.DOUBLE_SELL],
  },
  {
    name: "Box Cart",
    qty: 1,
    description: (
      <span>
        Once per turn, after you <Skewer /> a <b>Tool</b>, pack a free{" "}
        <b>Crate</b> into one of your <b>Work Orders</b>.
      </span>
    ),
    type: CARD_TYPE.Reward,
    set: CARD_SET.CROWD_FUND,
    tags: [TAGS.TOOL_SYNERGY, TAGS.SKEWER, TAGS.FREE_CRATE],
  },
];

export default rewards;
