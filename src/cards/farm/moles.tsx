import {
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";

const moles: IFarmCard[] = [
  {
    name: "Saboteur",
    qty: 2,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    image: "rummager",
    description: (
      <span>
        Add 1 💤 to a Rival's <b className="nowrap">🐾Critter</b>
      </span>
    ),
    recycle: (
      <span>
        <b>Exhaust</b> a Rival's <b className="nowrap">🐾Critter</b>
      </span>
    ),
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
    description: (
      <span>
        <b>Steal</b> a crop from a Rival.
      </span>
    ),
    buyBonus: "Put this at the bottom of your deck.",
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
    description: (
      <span>
        Add 1 💤 to each of a Rival's <b className="nowrap">🐾Critters</b>
      </span>
    ),
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Mole,
    tags: [TAGS.ADD_ZZZ],
  },
];

export default moles;
