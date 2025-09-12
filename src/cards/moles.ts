import { CARD_SUBTYPE, CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const moles: ICard[] = [
  {
    name: "Saboteur",
    qty: 2,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    image: "rummager",
    description: "Add a Zzz counter to a Rival's critter.",
    recycle: "Exhaust a Rival's Critter",

    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Mole,
    tags: [TAGS.ADD_ZZZ],
  },
  {
    name: "Burrower",
    qty: 2,
    cost: {
      apples: 0,
      berries: 2,
      carrots: 2,
    },
    image: "rummager",
    description: "Steal a crop from your Rival.",
    buyBonus: "Put this at the bottom of your deck",
    energy: 3,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Mole,
    tags: [TAGS.CROP_STEAL, TAGS.BOTTOM_OF_DECK],
  },
  {
    name: "Wacker Mole",
    qty: 1,
    cost: {
      apples: 3,
      berries: 3,
      carrots: 3,
    },
    image: "rummager",
    description: "Add 1 Zzz of each of a Rival's Critters.",
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Mole,
    tags: [TAGS.ADD_ZZZ],
  },
];

export default moles;
