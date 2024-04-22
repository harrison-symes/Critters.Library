import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const rats: ICard[] = [
  {
    name: "Crop Trader",
    qty: 2,
    cost: {
      apples: 1,
      carrots: 2,
      berries: 1,
    },
    image: "carrot_trader",
    description: "Action: Trade 2 of a crop for 2 of another crop.",
    type: CARD_TYPE.Rat,
    energy: 3,
    tags: [TAGS.TRADE_1_FOR_1, TAGS.GAIN_CROP_1],
  },
  {
    name: "Courier",
    qty: 2,
    cost: {
      apples: 3,
      carrots: 1,
      berries: 3,
    },
    image: "carrot_trader",
    description:
      "Action: The next card you buy this turn is placed on top of your deck.",
    type: CARD_TYPE.Rat,
    energy: 2,
    tags: [TAGS.PLACE_ON_TOP_DECK],
  },
  {
    name: "Hermes",
    qty: 1,
    cost: {
      apples: 3,
      carrots: 3,
      berries: 4,
    },
    image: "hermes",
    description: "Action: Refund a card from your hand.",
    type: CARD_TYPE.Rat,
    energy: 2,
    tags: [TAGS.REFUND_FROM_HAND, TAGS.TITULAR],
  },
];

export default rats;
