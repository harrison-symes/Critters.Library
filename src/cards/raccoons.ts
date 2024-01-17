import { CARD_TYPE, ICard } from "../models/cards.models";

const raccoons: ICard[] = [
  {
    name: "Rummager",
    qty: 2,
    cost: {
      apples: 3,
      berries: 0,
      carrots: 2,
    },
    image: "rummager",
    description: "Action: Draw a card, then discard a card.",
    type: CARD_TYPE.Raccoon,
    energy: 3,
  },
  {
    name: "Shoplifter",
    qty: 2,
    cost: {
      apples: 2,
      berries: 0,
      carrots: 1,
    },
    image: "shoplifter",
    description: "Action: Refresh a card in the shop",
    type: CARD_TYPE.Raccoon,
    energy: 3,
  },
  {
    name: "Trash Panda",
    qty: 2,
    cost: {
      apples: 1,
      berries: 2,
      carrots: 4,
    },
    image: "trash_panda",
    description:
      "Action: Put a card from your discard pile on top of your deck.",
    type: CARD_TYPE.Raccoon,
    energy: 3,
  },
  {
    name: "Sticky Fingers",
    qty: 1,
    cost: {
      apples: 3,
      berries: 9,
      carrots: 3,
    },
    image: "sticky_fingers",
    description:
      "Action: Swap a card in the shop with a card from your discard pile.",
    type: CARD_TYPE.Raccoon,
    energy: 3,
  },
];

export default raccoons;
