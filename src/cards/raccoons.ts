import { CARD_TYPE, ICard } from "../models/cards.models";

const raccoons: ICard[] = [
  {
    name: "Rummager",
    qty: 3,
    cost: {
      apples: 3,
      berries: 1,
      carrots: 2,
    },
    image: "rummager",
    description:
      "Action: Look at the top 3 cards of your deck. Draw one and discard the other 2.",
    type: CARD_TYPE.Raccoon,
    durability: 2,
  },
  {
    name: "Shoplifter",
    qty: 2,
    cost: {
      apples: 2,
      berries: 1,
      carrots: 0,
    },
    image: "shoplifter",
    description: "Action: Refresh a card in the shop",
    type: CARD_TYPE.Raccoon,
    durability: 2,
  },
  {
    name: "Trash Panda",
    qty: 2,
    cost: {
      apples: 2,
      berries: 4,
      carrots: 2,
    },
    image: "trash_panda",
    description:
      "Action: Put a card from your discard pile on top of your deck.",
    type: CARD_TYPE.Raccoon,
    durability: 2,
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
    durability: 2,
  },
];

export default raccoons;
