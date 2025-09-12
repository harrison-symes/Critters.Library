import { CARD_SUBTYPE, CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const hedgehogs: ICard[] = [
  {
    name: "Skewerer",
    qty: 2,
    cost: {
      apples: 3,
      berries: 1,
      carrots: 1,
    },
    image: "rummager",
    description: "Put a Tool card from your discard pile on top of your deck.",
    buyBonus: "Gift a card from your discard pile.",
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
    description: "Fast-track a Treat card.",
    recycle: "Trash a card from your discard pile",
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
    description: "Gift a card from your discard pile.",
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Hedgehog,
    tags: [TAGS.GIFT],
  },
];

export default hedgehogs;
