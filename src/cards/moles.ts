import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const moles: ICard[] = [
  {
    name: "Burrower",
    qty: 2,
    cost: {
      apples: 2,
      carrots: 0,
      berries: 2,
    },
    image: "burrower",
    description: "Action: -1 energy from a competitor's critter.",
    type: CARD_TYPE.Mole,
    energy: 3,
    tags: [TAGS.REMOVE_ENERGY_1],
  },
  {
    name: "Saboteur",
    qty: 2,
    cost: {
      apples: 2,
      carrots: 0,
      berries: 2,
    },
    image: "saboteur",
    description:
      "Action: Look at the top 3 cards of a competitor's deck, discard one of them.",
    type: CARD_TYPE.Mole,
    tags: [TAGS.DISCARD_OPPONENT_DECK_1],
    energy: 2,
  },
  {
    name: "Blind Borris",
    qty: 1,
    cost: {
      apples: 4,
      carrots: 5,
      berries: 4,
    },
    image: "blind_borris",
    description:
      "Action: Look at the top 3 cards of a competitor's deck and discard one. They draw one less card next turn.",
    type: CARD_TYPE.Mole,
    energy: 2,
    tags: [
      TAGS.DISCARD_OPPONENT_DECK_1,
      TAGS.DISCARD_OPPONENT_HAND_1,
      TAGS.TITULAR,
    ],
  },
];

export default moles;
