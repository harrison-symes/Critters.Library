import { CARD_TYPE, ICard } from "../models/cards.models";

const actions: ICard[] = [
  {
    name: "Exchange",
    qty: 3,
    cost: {
      apples: 0,
      carrots: 0,
      berries: 0,
      any: 1,
    },
    image: "rummager",
    description: "Gain any 1 crop.",
    type: CARD_TYPE.Action,
  },
  {
    name: "Overtime",
    qty: 3,
    cost: {
      apples: 0,
      carrots: 0,
      berries: 0,
      any: 1,
    },
    image: "rummager",
    description: "Pack a crop from your stash into your work order",
    type: CARD_TYPE.Action,
  },
  {
    name: "Pester",
    qty: 3,
    cost: {
      apples: 0,
      carrots: 0,
      berries: 0,
      any: 1,
    },
    image: "rummager",
    description: "-1 Energy from any critter.",
    type: CARD_TYPE.Action,
  },
  {
    name: "Shove",
    qty: 2,
    cost: {
      apples: 0,
      carrots: 0,
      berries: 0,
      any: 2,
    },
    image: "rummager",
    description: "Target competitor draws 1 less card on their next turn.",
    type: CARD_TYPE.Action,
  },
  {
    name: "Overtime",
    qty: 2,
    cost: {
      apples: 0,
      carrots: 0,
      berries: 0,
      any: 2,
    },
    image: "rummager",
    description: "Draw a card.",
    type: CARD_TYPE.Action,
  },
  {
    name: "Refresh",
    qty: 2,
    cost: {
      apples: 0,
      carrots: 0,
      berries: 0,
      any: 2,
    },
    image: "rummager",
    description: "Refresh a card in the shop.",
    type: CARD_TYPE.Action,
  },
  {
    name: "Reserve",
    qty: 2,
    cost: {
      apples: 0,
      carrots: 0,
      berries: 0,
      any: 2,
    },
    image: "rummager",
    description:
      "Reserve a card in the shop, only you may buy it. (It cannot be refreshed)",
    type: CARD_TYPE.Action,
  },
  {
    name: "Try again",
    qty: 1,
    cost: {
      apples: 0,
      carrots: 0,
      berries: 0,
      any: 3,
    },
    image: "rummager",
    description: "Discard your hand, draw that many cards.",
    type: CARD_TYPE.Action,
  },
  {
    name: "Refund",
    qty: 1,
    cost: {
      apples: 0,
      carrots: 0,
      berries: 0,
      any: 3,
    },
    image: "rummager",
    description: "Refund a card from your hand.",
    type: CARD_TYPE.Action,
  },
  {
    name: "Fast-track",
    qty: 1,
    cost: {
      apples: 0,
      carrots: 0,
      berries: 0,
      any: 3,
    },
    image: "rummager",
    description:
      "The next card you buy this turn is placed on top of your deck.",
    type: CARD_TYPE.Action,
  },
];

export default actions;
