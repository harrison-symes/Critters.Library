import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

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
    buyBonus: "Put this at the bottom of your deck",
    energy: 2,
    type: CARD_TYPE.Mole,
    tags: [TAGS.ENERGY_REMOVE],
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
    onDiscard: "Exhaust a Rival's Critter",
    energy: 3,
    type: CARD_TYPE.Mole,
    tags: [TAGS.CROP_STEAL],
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
    type: CARD_TYPE.Mole,
    tags: [TAGS.CROP_STEAL, TAGS.TITULAR],
  },
];

export default moles;
