import {
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";

const hedgehogs: IFarmCard[] = [
  {
    name: "Skewerer",
    qty: 2,
    cost: {
      apples: 3,
      berries: 1,
      carrots: 1,
    },
    image: "/critters/skewerer.jpeg",
    description: (
      <span>
        Put a <b>🛠️Tool</b> from your discard pile onto the top of your deck.
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
    tags: [TAGS.TOP_OF_DECK, TAGS.TOOL_SYNERGY, TAGS.GIFT],
  },
  {
    name: "Picky Eater",
    qty: 2,
    cost: {
      apples: 2,
      berries: 0,
      carrots: 2,
    },
    image: "rummager",
    energy: 2,
    description: (
      <span>
        <b>Fast-track</b> a <b>🧁Treat</b>.
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
  },
  {
    name: "The Head Chog",
    qty: 1,
    cost: {
      apples: 3,
      berries: 3,
      carrots: 3,
    },
    image: "rummager",
    energy: 2,
    description: (
      <span>
        <b>Gift</b> a card from your discard pile.
      </span>
    ),
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Hedgehog,
    tags: [TAGS.GIFT],
  },
];

export default hedgehogs;
