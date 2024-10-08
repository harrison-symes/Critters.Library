import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const rats: ICard[] = [
  {
    name: "Middleman",
    qty: 2,
    cost: {
      apples: 2,
      carrots: 0,
      berries: 2,
    },
    image: "rummager",
    description: "Get favour from the shop for free",
    energy: 3,
    type: CARD_TYPE.Rat,
  },
  {
    name: "Courier",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 2,
      berries: 1,
    },
    image: "rummager",
    description:
      "The next Farmer Card you buy this turn is placed on top of your deck.",
    energy: 2,
    type: CARD_TYPE.Rat,
  },
  {
    name: "Hermes",
    qty: 1,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 3,
    },
    image: "rummager",
    description: "Refund a card from your hand to draw a card.",
    energy: 2,
    type: CARD_TYPE.Rat,
  },
];

export default rats;
