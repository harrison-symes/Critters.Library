import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import Burrow from "../text/Burrow";
import Critter from "../text/Critter";
import Sleepy from "../text/Sleepy";
import TrickOrTreat from "../text/TrickOrTreat";

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
        Add 1 <Sleepy /> to a <Critter />.
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
    buyBonus: (
      <span>
        <Burrow /> this card.
      </span>
    ),
    energy: 3,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Mole,
    tags: [TAGS.CROP_STEAL, TAGS.BURROW],
    set: CARD_SET.BASE,
    flavour: "Huh? This Apple? I always had it...",
  },
  {
    name: "Wacker Mole",
    image: "/whacker_mole.png",
    ai_image: "/ai/whacker_mole.png",
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
    name: "Project Lead",
    qty: 1,
    cost: {
      apples: 1,
      berries: 2,
      carrots: 2,
    },
    description: (
      <span>
        Move 1 <Sleepy /> from another friendly <Critter /> to any other{" "}
        <Critter />.
      </span>
    ),
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Mole,
    tags: [TAGS.REMOVE_ZZZ, TAGS.ADD_ZZZ, TAGS.BURROW, TAGS.MOVE_ZZZ],
    set: CARD_SET.CHARITY_DRIVE,
    recycle: (
      <span>
        <Burrow /> this card.
      </span>
    ),
  },
  {
    name: "Captain Blind-beard",
    qty: 1,
    cost: {
      apples: 3,
      berries: 3,
      carrots: 3,
    },
    description: (
      <span>
        <TrickOrTreat />. <br />
        <b>Steal</b> the 3 crops on the dice from a Rival.
      </span>
    ),
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Mole,
    tags: [TAGS.TRICK_OR_TREAT, TAGS.CROP_STEAL],
    set: CARD_SET.AUTUMN_HARVEST,
  },
  {
    name: "Secret Agent",
    qty: 2,
    cost: {
      apples: 2,
      berries: 2,
      carrots: 2,
    },
    isWatcher: true,
    description: (
      <span>
        When a Rival plays a <Critter />
        ... <br />
        Add 1 <Sleepy /> to it.
      </span>
    ),
    energy: 3,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Mole,
    tags: [TAGS.TRICK_OR_TREAT, TAGS.CROP_STEAL],
    set: CARD_SET.AUTUMN_HARVEST,
  },
];

export default moles;
