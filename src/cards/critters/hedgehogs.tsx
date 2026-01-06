import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import Chew from "../text/Chew";
import FastTrack from "../text/FastTrack";
import Skewer from "../text/Skewer";

const hedgehogs: IFarmCard[] = [
  {
    name: "Skewerer",
    qty: 2,
    cost: {
      apples: 3,
      berries: 1,
      carrots: 1,
    },
    image: "/skewerer.jpeg",
    description: (
      <span>
        <Skewer /> a <b>🛠️Tool</b>.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Gift</b> a card from your discard pile.
      </span>
    ),
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Hedgehog,
    tags: [TAGS.SKEWER, TAGS.TOOL_SYNERGY, TAGS.GIFT],
    set: CARD_SET.BASE,
    flavour: "He makes Skewers by Skewering. He's Skewerer.",
  },
  {
    name: "Picky Eater",
    qty: 2,
    cost: {
      apples: 2,
      berries: 0,
      carrots: 2,
    },
    notes:
      "A hedgehog holding a skewer with ONLY berries on it. He is holding it up to his mouth about to eat.",
    energy: 2,
    description: (
      <span>
        <FastTrack /> a <b>🧁Treat</b>.
      </span>
    ),
    recycle: (
      <span>
        <b>Trash</b> a card from your discard pile.
      </span>
    ),
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Hedgehog,
    tags: [TAGS.FAST_TRACK, TAGS.TREAT_SYNERGY, TAGS.TRASH_FROM_DISCARD],
    set: CARD_SET.BASE,
    flavour: "I guess you can be TOO picky.",
  },
  {
    name: "The Head Chog",
    notes:
      "A big hedgehog wearing a top hat. Some of his quills are poking through the top hat. A skewer lays in front of him.",
    qty: 1,
    cost: {
      apples: 3,
      berries: 3,
      carrots: 3,
    },
    energy: 2,
    description: (
      <span>
        <b>Gift</b> a card from your discard pile.
      </span>
    ),
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Hedgehog,
    tags: [TAGS.GIFT],
    set: CARD_SET.BASE,
    flavour:
      "Just in-case you were wondering who was in charge of all those Chogs.",
  },
  {
    name: "Prankster",
    qty: 1,
    cost: {
      apples: 3,
      berries: 3,
      carrots: 3,
    },
    energy: 2,
    description: (
      <span>
        <FastTrack /> 2 cards for a Rival (from their discard pile).
      </span>
    ),
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Hedgehog,
    tags: [TAGS.FAST_TRACK],
    set: CARD_SET.CROWD_FUND,
    buyBonus: (
      <span>
        <b>Gift</b> a card from your discard pile.
      </span>
    ),
  },
  {
    name: "Splinter",
    cost: {
      apples: 2,
      berries: 1,
      carrots: 1,
    },
    qty: 1,
    set: CARD_SET.WOOD_WORK,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Hedgehog,
    tags: [TAGS.CHEW, TAGS.SKEWER, TAGS.GIFT],
    description: (
      <span>
        <Chew count={2} />, then <Skewer /> or <b>Gift</b> one of the chewed
        cards.
      </span>
    ),
    energy: 2,
  },
];

export default hedgehogs;
