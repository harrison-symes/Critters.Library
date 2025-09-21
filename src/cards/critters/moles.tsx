import {
  CARD_SET,
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
    set: CARD_SET.BASE,
    flavour: "Hey, who broke the coffee machine?",
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
    set: CARD_SET.BASE,
    flavour: "Huh? This Apple? I always had it...",
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
    set: CARD_SET.BASE,
    flavour: "Now he holds the mallet.",
  },
  {
    name: "Taskmaster",
    qty: 2,
    cost: {
      apples: 1,
      berries: 2,
      carrots: 2,
    },
    image: "rummager",
    description: (
      <span>
        Move 1 💤 from one of your <b className="nowrap">🐾Critters</b> to any
        other <b className="nowrap">🐾Critter</b>.
      </span>
    ),
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Mole,
    tags: [TAGS.REMOVE_ZZZ, TAGS.ADD_ZZZ],
    set: CARD_SET.CROWD_FUND,
    recycle: <span>Put this at the bottom of your deck.</span>,
  },
];

export default moles;
