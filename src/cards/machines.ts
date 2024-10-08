import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const machines: ICard[] = [
  // card draw
  {
    name: "Cash Register",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    image: "rummager",
    description: "Refund a card from your hand for double it's cost.",
    energy: 2,
    type: CARD_TYPE.Machine,
  },
  {
    name: "Planter",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    image: "rummager",
    energy: 2,
    description:
      "Put a seed from your discard pile into play. Add 1 growth counter to it.",
    type: CARD_TYPE.Machine,
  },
  {
    name: "Plough",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 0,
    },
    image: "rummager",
    description: "",
    type: CARD_TYPE.Machine,
  },
  {
    name: "Digger",
    qty: 1,
    cost: {
      apples: 3,
      carrots: 3,
      berries: 3,
    },
    image: "rummager",
    energy: 2,
    description:
      "Draw one of the top 3 cards of your deck, discard the others.",
    type: CARD_TYPE.Machine,
  },
  {
    name: "Packer",
    qty: 1,
    cost: {
      apples: 4,
      carrots: 4,
      berries: 4,
    },
    image: "rummager",
    energy: 2,
    description: "Pack a crate into one of your Work Orders for free.",
    type: CARD_TYPE.Machine,
  },
];

export default machines;
