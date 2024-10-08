import { CARD_TYPE, ICard } from "../models/cards.models";

const actions: ICard[] = [
  {
    name: "Peek",
    qty: 3,
    cost: {
      apples: 0,
      carrots: 0,
      berries: 0,
      any: 1,
    },
    image: "rummager",
    description: "Look at the top card of a shop deck.",
    type: CARD_TYPE.Action,
  },
];

export default actions;
