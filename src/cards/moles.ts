import { CARD_TYPE, ICard } from "../models/cards.models";

const moles: ICard[] = [
  {
    name: "Quaker",
    qty: 3,
    cost: {
      apples: 2,
      berries: 4,
      carrots: 2,
    },
    image: "quaker",
    description:
      "Action: -1 durability to all of a competitor's critters and constructs.",
    type: CARD_TYPE.Mole,
    durability: 2,
  },
  {
    name: "Burrower",
    qty: 4,
    cost: {
      apples: 2,
      berries: 1,
      carrots: 1,
    },
    image: "burrower",
    description: "Action: -2 durability to a competitor's critter.",
    type: CARD_TYPE.Mole,
    durability: 2,
  },
  {
    name: "Saboteur",
    qty: 2,
    cost: {
      apples: 2,
      berries: 0,
      carrots: 1,
    },
    image: "saboteur",
    description:
      "Action: -2 to a competitor's construct, or discard the top card of EVERY deck.",
    type: CARD_TYPE.Mole,
    durability: 2,
  },
  {
    name: "Blind Borris",
    qty: 1,
    cost: {
      apples: 3,
      berries: 4,
      carrots: 4,
    },
    image: "blind_borris",
    description:
      "Action: -1 Durability to a competitor's critter. If it is defeated, remove it from the game.",
    type: CARD_TYPE.Mole,
    durability: 4,
  },
];

export default moles;
