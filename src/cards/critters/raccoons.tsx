import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import Shuffle from "../text/Shuffle";
import TrickOrTreat from "../text/TrickOrTreat";

const raccoons: IFarmCard[] = [
  {
    name: "Rummager",
    notes:
      "A raccoon digging through a trashcan. He is wearing black gloves. An empty open trashbag is lying on the ground.",
    qty: 2,
    cost: {
      apples: 1,
      berries: 3,
      carrots: 1,
    },
    description: (
      <span>
        <b>Discard</b> a card from your hand to draw a card.
      </span>
    ),
    buyBonus: (
      <span>
        <Shuffle /> a <b>🏠Starter</b> card.
      </span>
    ),
    energy: 3,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Raccoon,
    tags: [TAGS.CARD_DRAW, TAGS.DISCARD_OWN, TAGS.SHUFFLE],
    set: CARD_SET.BASE,
    flavour: "Maybe the card you need is just behind that Berry Bush.",
  },
  {
    name: "Dumpster Diver",
    notes:
      "A raccoon is poking out of a pile a trash in a dumpster. He is holding up a trowel that he found.",
    qty: 2,
    cost: {
      apples: 3,
      berries: 0,
      carrots: 2,
    },
    description: (
      <span>
        <b>Discard</b> a card from your hand to <b>Sell</b> a different card
        from your discard pile.
      </span>
    ),
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Raccoon,
    tags: [TAGS.SELL, TAGS.SELL_FROM_DISCARD, TAGS.DISCARD_OWN],
    set: CARD_SET.BASE,
    flavour: "One Critter's trash is another Raccoon's treasure.",
  },
  {
    name: "Sticky Fingers",
    qty: 1,
    cost: {
      apples: 1,
      berries: 3,
      carrots: 3,
    },
    image: "/sticky_fingers.png",
    description: (
      <span>
        <b>Discard</b> a card from your hand, then return that card to your
        hand.
      </span>
    ),
    recycle: "Put this card into your hand.",
    energy: 3,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Raccoon,
    tags: [TAGS.DISCARD_OWN, TAGS.ADD_TO_HAND],
    set: CARD_SET.BASE,
    flavour: "Be sure to wash your hands after playing this card.",
  },
  {
    name: "Dealmaker",
    qty: 2,
    cost: {
      apples: 1,
      berries: 2,
      carrots: 1,
    },
    description: (
      <span>
        <b>Discard</b> a card from your hand. <br /> Each Rival must also{" "}
        <b>Discard</b> a card from their hand.
      </span>
    ),
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Raccoon,
    tags: [TAGS.DISCARD_OWN, TAGS.DISCARD_RIVAL],
    set: CARD_SET.CHARITY_DRIVE,
    recycle: <span>Put this card into your hand.</span>,
  },
  {
    name: "Burglar",
    qty: 2,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    description: (
      <span>
        Discard a card from your hand to <TrickOrTreat />.
      </span>
    ),
    energy: 3,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Raccoon,
    tags: [TAGS.DISCARD_OWN, TAGS.TRICK_OR_TREAT],
    set: CARD_SET.AUTUMN_HARVEST,
  },
];

export default raccoons;
