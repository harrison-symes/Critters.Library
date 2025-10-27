import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import Critter from "../text/Critter";
import Sleepy from "../text/Sleepy";

const moles: IFarmCard[] = [
  {
    name: "Saboteur",
    qty: 2,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    notes:
      "A mole emerging from a holde. Wearing a bandit mask (like the hamburglar) and holding a spanner. He looks like he is scheming.",
    description: (
      <span>
        Add 1 <Sleepy /> to a Rival's <Critter />.
      </span>
    ),
    recycle: (
      <span>
        <b>Exhaust</b> a Rival's <Critter />.
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
    image: "/burrower.png",
    ai_image: "/ai/burrower.png",
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
    notes:
      "A big mole, wearing a blindfold and holding a big cartoonish mallet (very looney toons).",
    qty: 1,
    cost: {
      apples: 3,
      berries: 3,
      carrots: 3,
    },
    description: (
      <span>
        Add 1 <Sleepy /> to each of a Rival's <Critter plural />.
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
    description: (
      <span>
        Move 1 <Sleepy /> from a friendly <Critter /> to any other <Critter />.
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
