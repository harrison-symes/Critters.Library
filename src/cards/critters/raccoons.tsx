import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";

const raccoons: IFarmCard[] = [
  {
    name: "Rummager",
    qty: 2,
    cost: {
      apples: 1,
      berries: 3,
      carrots: 1,
    },
    image: "rummager",
    description: (
      <span>
        <b>Discard</b> a card from your hand to draw a card.
      </span>
    ),
    buyBonus: (
      <span>
        <b>Fast-track</b> a <b>🏠Starter</b> card.
      </span>
    ),
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Raccoon,
    tags: [TAGS.CARD_DRAW, TAGS.DISCARD_OWN, TAGS.FAST_TRACK],
    set: CARD_SET.BASE,
    flavour: "Maybe the card you need is just behind that Berry Bush.",
  },
  {
    name: "Dumpster Diver",
    qty: 2,
    cost: {
      apples: 3,
      berries: 0,
      carrots: 2,
    },
    image: "rummager",
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
    image: "/critters/sticky_fingers.jpeg",
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
    name: "Vandal",
    qty: 1,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    // image: "/critters/sticky_fingers.jpeg",
    description: (
      <span>
        <b>Discard</b> a card from your hand. Each Rival must also discard a
        card from their hand.
      </span>
    ),
    energy: 2,
    type: CARD_TYPE.Critter,
    subtype: CARD_SUBTYPE.Raccoon,
    tags: [TAGS.DISCARD_OWN, TAGS.DISCARD_RIVAL],
    set: CARD_SET.CROWD_FUND,
    recycle: <span>Put this card into your hand.</span>,
  },
];

export default raccoons;
