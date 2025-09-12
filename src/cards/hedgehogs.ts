import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

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
    type: CARD_TYPE.Hedgehog,
    tags: [TAGS.TOP_OF_DECK],
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
    onDiscard: "Trash a card from your discard pile",
    type: CARD_TYPE.Hedgehog,
    tags: [TAGS.SHUFFLE_CARDS, TAGS.TREAT_SYNERGY],
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
    type: CARD_TYPE.Hedgehog,
    tags: [TAGS.TOP_OF_DECK, TAGS.GIFT],
  },
];

export default hedgehogs;
