import { CARD_TYPE, ICard } from "../models/cards.models";

const rats: ICard[] = [
  {
    name: "Crop Trader",
    qty: 2,
    cost: {
      apples: 3,
      carrots: 1,
      berries: 2,
    },
    image: "carrot_trader",
    description: "Action: Trade 2 of a crop for 2 of another crop.",
    type: CARD_TYPE.Rat,
    energy: 3,
  },
  {
    name: "Dispatcher",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 2,
      berries: 3,
    },
    image: "carrot_trader",
    description: "Action: If you bought a card this turn, draw a card.",
    type: CARD_TYPE.Rat,
    energy: 3,
  },
  {
    name: "Hermes",
    qty: 1,
    cost: {
      apples: 1,
      carrots: 3,
      berries: 2,
    },
    image: "hermes",
    description: "Action: Refund a card from your hand.",
    type: CARD_TYPE.Rat,
    energy: 2,
  },
  // {
  //   name: "Carrot Trader",
  //   qty: 2,
  //   cost: {
  //     apples: 0,
  //     berries: 0,
  //     carrots: 3,
  //   },
  //   image: "carrot_trader",
  //   description: "Action: Trade 2 Carrots for 3 of another crop.",
  //   type: CARD_TYPE.Rat,
  //   energy: 3,
  // },
  // {
  //   name: "Apple Trader",
  //   qty: 2,
  //   cost: {
  //     apples: 3,
  //     berries: 0,
  //     carrots: 0,
  //   },
  //   image: "apple_trader",
  //   description: "Action: Trade 2 Apples for 3 of another crop.",
  //   type: CARD_TYPE.Rat,
  //   energy: 3,
  // },
  // {
  //   name: "Berry Trader",
  //   qty: 2,
  //   cost: {
  //     apples: 0,
  //     berries: 3,
  //     carrots: 0,
  //   },
  //   image: "berry_trader",
  //   description: "Action: Trade 2 Berries for 3 of another crop.",
  //   type: CARD_TYPE.Rat,
  //   energy: 3,
  // },
];

export default rats;
