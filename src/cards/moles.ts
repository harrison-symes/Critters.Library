import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const moles: ICard[] = [
  {
    name: "Saboteur",
    qty: 2,
    cost: {
      apples: 0,
      carrots: 2,
      berries: 2,
    },
    image: "rummager",
    description: "Add a Zzz counter to a Rival's critter.",
    energy: 2,
    type: CARD_TYPE.Mole,
    tags: [TAGS.ENERGY_REMOVE],
  },
  {
    name: "Burrower",
    qty: 2,
    cost: {
      apples: 3,
      carrots: 2,
      berries: 0,
    },
    image: "rummager",
    description: "Steal a crop from your Rival.",
    energy: 3,
    type: CARD_TYPE.Mole,
    tags: [TAGS.CROP_STEAL],
  },
  {
    name: "Wacker Mole",
    qty: 1,
    cost: {
      apples: 3,
      carrots: 1,
      berries: 5,
    },
    image: "rummager",
    description:
      "Add a Zzz counter to each of your Rival's critters. Steal 1 of each crop from them.",
    energy: 2,
    type: CARD_TYPE.Mole,
    tags: [TAGS.CROP_STEAL, TAGS.ENERGY_REMOVE],
  },
];

export default moles;
