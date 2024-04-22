import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const items: ICard[] = [
  // crop gain
  {
    name: "Gift Basket",
    qty: 1,
    cost: {
      apples: 4,
      berries: 4,
      carrots: 4,
    },
    image: "bountiful_harvest",
    description: "Gain 3 of each crop.",
    type: CARD_TYPE.Item,
    tags: [TAGS.GAIN_CROP_9],
  },
  {
    name: "Diamond Hoe",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    image: "recycling",
    description: "Discard a card to gain 2 of each crop.",
    type: CARD_TYPE.Item,
    tags: [TAGS.DISCARD_FROM_HAND_1, TAGS.GAIN_CROP_6],
  },
  {
    name: "Gumboots",
    qty: 1,
    cost: {
      apples: 0,
      carrots: 1,
      berries: 3,
    },
    image: "stash",
    description: "Gain any 2 crops and add them to your work order.",
    type: CARD_TYPE.Item,
    tags: [TAGS.GAIN_CROP_2, TAGS.PACK_WORK_ORDER_2],
  },
  {
    name: "Pik'n'mix",
    qty: 1,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    image: "haul",
    description: "Gain +1 of each crop.",
    type: CARD_TYPE.Item,
    tags: [TAGS.GAIN_CROP_3],
  },
  {
    name: "Picnic Basket",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 3,
      berries: 0,
    },
    image: "uproot",
    description: "Gain +2 of a crop, and +1 of each other crop.",
    type: CARD_TYPE.Item,
    tags: [TAGS.GAIN_CROP_4, TAGS.CHOICE],
  },
  {
    name: "Compost",
    qty: 1,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    image: "compost",
    description: "Destroy a crop to gain + 2 of each other crop.",
    type: CARD_TYPE.Item,
    tags: [TAGS.GAIN_CROP_4, TAGS.DESTROY_1_OWN_CROP],
  },
  {
    name: "Trowel",
    qty: 1,
    cost: {
      apples: 0,
      berries: 1,
      carrots: 2,
    },
    image: "restock",
    description: "Gain +3 of a crop you have none of.",
    type: CARD_TYPE.Item,
    tags: [TAGS.GAIN_CROP_3, TAGS.CONDITIONAL_SML],
  },
  // refund
  {
    name: "Receipts",
    qty: 1,
    cost: {
      apples: 3,
      carrots: 0,
      berries: 3,
    },
    image: "receipts",
    description: "Refund a card from your hand, then draw a card.",
    type: CARD_TYPE.Item,
    tags: [TAGS.REFUND_FROM_HAND, TAGS.DRAW_A_CARD],
  },
  {
    name: "Damaged Goods",
    qty: 1,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 2,
    },
    image: "damaged_goods",
    description: "Refund a card from your hand or discard pile",
    type: CARD_TYPE.Item,
    tags: [TAGS.REFUND_FROM_HAND, TAGS.CHOICE],
  },
  {
    name: "Dustpan",
    qty: 1,
    cost: {
      apples: 2,
      berries: 1,
      carrots: 0,
    },
    image: "rummager",
    description:
      "Look at the top card of your deck, you may refund it or draw it.",
    type: CARD_TYPE.Item,
    tags: [TAGS.REFUND_FROM_HAND, TAGS.CONDITIONAL_SML, TAGS.CHOICE],
  },
  // card draw
  {
    name: "Credit Card",
    qty: 1,
    cost: {
      apples: 0,
      berries: 2,
      carrots: 2,
    },
    image: "rummager",
    description: "If you've bought a farmer's card this turn, draw 2 cards.",
    type: CARD_TYPE.Item,
    tags: [TAGS.DRAW_2_CARDS, TAGS.CONDITIONAL_LRG],
  },
  {
    name: "Plant Food",
    qty: 1,
    cost: {
      apples: 2,
      berries: 2,
      carrots: 2,
    },
    image: "growth_spurt",
    description: "Draw 2 cards.",
    type: CARD_TYPE.Item,
    tags: [TAGS.DRAW_2_CARDS],
  },
  {
    name: "Farm Hand",
    qty: 1,
    cost: {
      apples: 0,
      berries: 2,
      carrots: 1,
    },
    image: "rummager",
    description:
      "Place this card under one of your critters. Whenever they act, draw a card.",
    type: CARD_TYPE.Item,
    tags: [TAGS.DRAW_2_CARDS, TAGS.CONDITIONAL_LRG],
  },
  {
    name: "Small Backpack",
    qty: 1,
    cost: {
      apples: 1,
      berries: 0,
      carrots: 2,
    },
    image: "rummager",
    description: "Draw 2 cards, then discard a card.",
    type: CARD_TYPE.Item,
    tags: [TAGS.DRAW_2_CARDS, TAGS.DISCARD_FROM_HAND_1],
  },
  {
    name: "Boombox",
    qty: 1,
    cost: {
      apples: 0,
      berries: 2,
      carrots: 1,
    },
    image: "rummager",
    description: "Exhaust one of your critters to draw 2 cards.",
    type: CARD_TYPE.Item,
    tags: [TAGS.DRAW_2_CARDS, TAGS.CONDITIONAL_LRG],
  },
  {
    name: "Plough",
    qty: 1,
    cost: {
      apples: 1,
      berries: 0,
      carrots: 2,
    },
    image: "worm",
    description: "Draw a card. Draw one more for each of your active seeds.",
    type: CARD_TYPE.Item,
    tags: [TAGS.DRAW_2_CARDS, TAGS.CONDITIONAL_LRG],
  },
  {
    name: "Shared Lunch",
    qty: 1,
    cost: {
      apples: 2,
      berries: 3,
      carrots: 0,
    },
    image: "morning_tea",
    description: "Draw a card. Draw one more for each of your critters.",
    type: CARD_TYPE.Item,
    tags: [TAGS.DRAW_2_CARDS, TAGS.CONDITIONAL_SML],
  },
  {
    name: "Weed Whacker",
    qty: 1,
    cost: {
      apples: 0,
      berries: 2,
      carrots: 3,
    },
    image: "rummager",
    description: "Discard the top 2 cards of your deck, then draw 2 cards.",
    type: CARD_TYPE.Item,
    tags: [TAGS.DISCARD_FROM_DECK, TAGS.DRAW_2_CARDS],
  },
  {
    name: "Rake",
    qty: 1,
    cost: {
      apples: 0,
      berries: 2,
      carrots: 3,
    },
    image: "rummager",
    description: "Shuffle your discard pile into your deck, then draw 2 cards.",
    type: CARD_TYPE.Item,
    tags: [TAGS.DRAW_2_CARDS, TAGS.CONDITIONAL_SML],
  },

  // Cantrip
  {
    name: "Binoculars",
    qty: 1,
    cost: {
      apples: 0,
      berries: 1,
      carrots: 1,
    },
    image: "rummager",
    description:
      "Look at the top 3 cards of your deck. Draw one and discard the others.",
    type: CARD_TYPE.Item,
    tags: [TAGS.DRAW_A_CARD, TAGS.CHOICE],
  },
  {
    name: "Shovel",
    qty: 1,
    cost: {
      apples: 3,
      berries: 1,
      carrots: 2,
    },
    image: "rummager",
    description:
      "Look at the bottom 3 cards of your deck. Draw one, put one on top and discard the other.",
    type: CARD_TYPE.Item,
    tags: [TAGS.DRAW_A_CARD, TAGS.PLACE_ON_TOP_DECK],
  },
  {
    name: "Morning Tea",
    qty: 1,
    cost: {
      apples: 2,
      berries: 2,
      carrots: 0,
    },
    image: "morning_tea",
    description: "+ 1 Energy to all your critters. Draw a card.",
    type: CARD_TYPE.Item,
    tags: [TAGS.DRAW_A_CARD, TAGS.RESTORE_1_ENERGY_TO_ALL],
  },
  {
    name: "Recycling",
    qty: 1,
    cost: {
      apples: 1,
      carrots: 3,
      berries: 0,
    },
    image: "recycling",
    description:
      "Shuffle a card from your discard pile into your deck, then draw a card.",
    type: CARD_TYPE.Item,
    tags: [TAGS.SHUFFLE_DISCARD_TO_DECK, TAGS.DRAW_A_CARD],
  },
  {
    name: "Morning Cuppa",
    qty: 1,
    cost: {
      apples: 2,
      berries: 1,
      carrots: 0,
    },
    image: "morning_cuppa",
    description: "Refresh one of your critters. Draw a card.",
    type: CARD_TYPE.Item,
    tags: [TAGS.RESTORE_ALL_ENERGY, TAGS.DRAW_A_CARD],
  },
  {
    name: "Placard",
    qty: 1,
    cost: {
      apples: 1,
      berries: 0,
      carrots: 1,
    },
    image: "jumper_cables",
    description: "Refresh a card in the shop. Draw a card.",
    type: CARD_TYPE.Item,
    tags: [TAGS.DRAW_A_CARD, TAGS.REFRESH_SHOP_CARD],
  },
  // Shuffle into deck
  {
    name: "Rotten Crops",
    qty: 1,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    image: "rotten_crops",
    description:
      "Shuffle this into a competitor's deck when purchased. When drawn, destroys any 2 crops and discard this.",
    type: CARD_TYPE.Item,
    tags: [TAGS.BOMB, TAGS.DESTROY_2_CROP],
  },
  {
    name: "Goldfish",
    qty: 1,
    cost: {
      apples: 0,
      carrots: 0,
      berries: 1,
    },
    image: "rotten_crops",
    description:
      "Shuffle this into a competitor's deck when purchased. This doesn't do anything!",
    type: CARD_TYPE.Item,
    tags: [TAGS.BOMB],
  },
  {
    name: "Hot Potato",
    qty: 1,
    cost: {
      apples: 1,
      berries: 0,
      carrots: 0,
    },
    image: "hot_potato",
    description:
      "Shuffle this into a competitor's deck when purchased. When drawn, destroy any 3 crops and then place this into a competitor's discard pile.",
    type: CARD_TYPE.Item,
    tags: [TAGS.BOMB],
  },
  {
    name: "Birthday Present",
    qty: 1,
    cost: {
      apples: 0,
      berries: 0,
      carrots: 1,
    },
    image: "rotten_crops",
    description:
      "Gain 2 of each crop, then place this in a competitor's discard pile.",
    type: CARD_TYPE.Item,
    tags: [TAGS.BOMB],
  },
  //
  {
    name: "Fertiliser",
    qty: 1,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 0,
    },
    image: "worm",
    description:
      "Search your deck or discard pile for any seeds. Shuffle your deck after!",
    type: CARD_TYPE.Item,
    tags: [TAGS.DRAW_A_CARD, TAGS.CHOICE],
  },

  {
    name: "Scarecrow",
    qty: 1,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 1,
    },
    image: "typhoon",
    description: "Shuffle a card back into their owner's deck.",
    type: CARD_TYPE.Item,
    tags: [TAGS.EXHAUST],
  },
  {
    name: "Fire Alarm",
    qty: 1,
    cost: {
      apples: 1,
      carrots: 2,
      berries: 1,
    },
    image: "typhoon",
    description:
      "Shuffle all critters and seeds back into their owner's decks.",
    type: CARD_TYPE.Item,
    tags: [TAGS.EXHAUST, TAGS.CHOICE],
  },
  {
    name: "Watering Can",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 0,
    },
    image: "recycling",
    description: "Put a card from your discard pile on top of your deck.",
    type: CARD_TYPE.Item,
    tags: [TAGS.PLACE_ON_TOP_DECK],
  },

  {
    name: "Disguise",
    qty: 1,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 0,
    },
    image: "snatch",
    description: "Steal a crop from a competitor's work order.",
    type: CARD_TYPE.Item,
    tags: [TAGS.DISRUPT_WORK_ORDER_1, TAGS.GAIN_CROP_1],
  },
  {
    name: "Jumper Cables",
    qty: 1,
    cost: {
      apples: 3,
      berries: 3,
      carrots: 0,
    },
    image: "jumper_cables",
    description: "Refresh all of your critters. Draw a card.",
    type: CARD_TYPE.Item,
    tags: [TAGS.RESTORE_ALL_ENERGY_TO_ALL, TAGS.DRAW_A_CARD],
  },

  {
    name: "Sprinklers",
    qty: 1,
    cost: {
      apples: 2,
      berries: 0,
      carrots: 1,
    },
    image: "jumper_cables",
    description: "Exhaust a critter.",
    type: CARD_TYPE.Item,
    tags: [TAGS.EXHAUST],
  },

  {
    name: "Gift Card",
    qty: 1,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 1,
    },
    image: "morning_tea",
    description:
      "The next card you buy costs -1 of each crop. (Place this down until it is used)",
    type: CARD_TYPE.Item,
    tags: [TAGS.GAIN_CROP_3],
  },

  {
    name: "Megaphone",
    qty: 1,
    cost: {
      apples: 3,
      berries: 0,
      carrots: 1,
    },
    image: "morning_tea",
    description:
      "-1 Energy to all of a competitor's critters. +1 Energy to all of yours.",
    type: CARD_TYPE.Item,
    tags: [
      TAGS.RESTORE_1_ENERGY_TO_ALL,
      TAGS.REMOVE_1_ENERGY_FROM_ALL,
      TAGS.CONDITIONAL_SML,
    ],
  },

  {
    name: "Farming Gloves",
    qty: 1,
    cost: {
      apples: 2,
      berries: 2,
      carrots: 2,
    },
    image: "rummager",
    description: "Your item cards are doubled this turn.",
    type: CARD_TYPE.Item,
    tags: [TAGS.DRAW_2_CARDS, TAGS.CONDITIONAL_SML],
  },
  {
    name: "Companion Crop",
    qty: 1,
    cost: {
      apples: 1,
      berries: 1,
      carrots: 0,
    },
    image: "rummager",
    description:
      "Place this card under one of your seeds. The seed will harvest twice!",
    type: CARD_TYPE.Item,
    tags: [TAGS.CONDITIONAL_SML, TAGS.GAIN_CROP_3],
  },
];

export default items;
