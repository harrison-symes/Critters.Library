import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const raccoons: ICard[] = [
  {
    name: "Rummager",
    qty: 2,
    cost: {
      apples: 3,
      carrots: 0,
      berries: 2,
    },
    image: "rummager",
    description: "Action: Draw a card, then discard a card.",
    type: CARD_TYPE.Raccoon,
    energy: 3,
    tags: [TAGS.DRAW_A_CARD, TAGS.DISCARD_FROM_HAND_1, TAGS.CHOICE],
  },
  {
    name: "Trash Panda",
    qty: 2,
    cost: {
      apples: 0,
      carrots: 4,
      berries: 3,
    },
    image: "trash_panda",
    description:
      "Action: Shuffle a card from your discard pile into your deck.",
    type: CARD_TYPE.Raccoon,
    energy: 3,
    tags: [TAGS.SHUFFLE_DISCARD_TO_DECK],
  },
  {
    name: "Sticky Fingers",
    qty: 1,
    cost: {
      apples: 3,
      carrots: 3,
      berries: 4,
    },
    image: "sticky_fingers",
    description:
      "Action: Discard any number of cards from your hand, then draw that many cards.",
    type: CARD_TYPE.Raccoon,
    energy: 3,
    tags: [TAGS.DISCARD_FROM_HAND_2, TAGS.DRAW_2_CARDS, TAGS.TITULAR],
  },
];

export default raccoons;
