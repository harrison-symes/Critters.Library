import { CARD_TYPE, ICard } from "../models/cards.models";

const moles: ICard[] = [
  {
    name: "Burrower",
    qty: 2,
    cost: {
      apples: 3,
      carrots: 0,
      berries: 2,
    },
    image: "burrower",
    description: "Action: -1 energy from a competitor's critter.",
    type: CARD_TYPE.Mole,
    energy: 3,
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
    energy: 2,
  },
  {
    name: "Blind Borris",
    qty: 1,
    cost: {
      apples: 4,
      berries: 4,
      carrots: 3,
    },
    image: "blind_borris",
    description:
      "Action: -1 Energy from a competitor's critter. If it is exhausted, remove it from the game.",
    type: CARD_TYPE.Mole,
    energy: 3,
  },
];

export default moles;
