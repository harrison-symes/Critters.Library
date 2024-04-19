import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const caterpillars: ICard[] = [
  {
    name: "Hungry",
    qty: 2,
    cost: {
      apples: 2,
      berries: 0,
      carrots: 2,
    },
    image: "caterpillar_2",
    description: "Evolves in 2 turns. Evolved: Action: draw a card.",
    type: CARD_TYPE.Caterpillar,
    energy: 3,
  },
  {
    name: "Muncher",
    qty: 2,
    cost: {
      apples: 2,
      carrots: 0,
      berries: 2,
    },
    image: "caterpillar_1",
    description: "Evolves in 2 turns. Evolved: Action: Gain 2 of any crop.",
    type: CARD_TYPE.Caterpillar,
    energy: 3,
    tags: [TAGS.DELAYED, TAGS.GAIN_CROP_2, TAGS.CHOICE],
  },
  {
    name: "Pilly",
    qty: 1,
    cost: {
      apples: 4,
      berries: 4,
      carrots: 0,
    },
    image: "caterpillar_1",
    description:
      "Evolves in 2 turns. Evolved: Action: Refund a card from your discard pile.",
    type: CARD_TYPE.Caterpillar,
    energy: 2,
    tags: [TAGS.DELAYED, TAGS.REFUND_FROM_DISCARD],
  },
];

export default caterpillars;
