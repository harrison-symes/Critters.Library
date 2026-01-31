import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import Burrow from "../text/Burrow";
import Chew, { Chewed } from "../text/Chew";
import Critter from "../text/Critter";
import Discount from "../text/Discount";
import Skewer from "../text/Skewer";
import TrickOrTreat from "../text/TrickOrTreat";

const crows: IFarmCard[] = [
  {
    name: "Witch",
    cost: {
      apples: 2,
      berries: 1,
      carrots: 2,
    },
    qty: 2,
    set: CARD_SET.AUTUMN_HARVEST,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Crow,
    isWatcher: true,
    tags: [TAGS.WATCHER],
    description: (
      <span>
        When ones of your <Critter plural /> is <b>Exhausted</b>... <br />
        <TrickOrTreat />.
      </span>
    ),
    energy: 3,
  },
  {
    name: "Alchemist",
    cost: {
      apples: 1,
      berries: 2,
      carrots: 1,
    },
    qty: 2,
    set: CARD_SET.AUTUMN_HARVEST,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Crow,
    isWatcher: true,
    tags: [TAGS.WATCHER],
    description: (
      <span>
        When you <b>Trade</b> crops... <br />
        Gain +1 of the <b>Target</b> crop.
      </span>
    ),
    energy: 4,
  },
  {
    name: "Fortune Teller",
    cost: {
      apples: 3,
      berries: 3,
      carrots: 3,
    },
    qty: 1,
    set: CARD_SET.AUTUMN_HARVEST,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Crow,
    isWatcher: true,
    tags: [TAGS.WATCHER, TAGS.CARD_DRAW, TAGS.DISCARD_OWN],
    description: (
      <span>
        When you end your turn... <br />
        Draw an extra card, then <b>Discard</b> a card from your hand.
      </span>
    ),
    energy: 3,
  },
];

export default crows;
