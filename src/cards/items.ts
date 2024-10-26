import { CARD_TYPE, ICard, TAGS } from "../models/cards.models";

const items: ICard[] = [
  // card draw
  {
    name: "Pot of Feed",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    image: "rummager",
    description: "Draw 2 cards",
    type: CARD_TYPE.Item,
  },
  {
    name: "Weed Wacker",
    qty: 1,
    cost: {
      apples: 3,
      carrots: 2,
      berries: 0,
    },
    image: "rummager",
    description: "Discard the top 2 cards of your deck, then draw 2 cards.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Small Backpack",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 0,
    },
    image: "rummager",
    description: "Draw 2 cards, then discard a card.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Rusty Rake",
    qty: 1,
    cost: {
      apples: 0,
      carrots: 3,
      berries: 2,
    },
    image: "rummager",
    description: "Shuffle your discard pile into your deck, then draw 2 cards.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Farm Hand",
    qty: 1,
    cost: {
      apples: 3,
      carrots: 0,
      berries: 1,
    },
    image: "rummager",
    description:
      "Place this under one of your critters. Whenever they use their talent, draw a card.",
    type: CARD_TYPE.Item,
  },
  // crops
  {
    name: "Gift Basket",
    qty: 1,
    cost: {
      apples: 3,
      carrots: 3,
      berries: 3,
    },
    image: "rummager",
    description: "Gain +3 of each crop. Give your rival 2 random crops.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Picnic Basket",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    image: "rummager",
    description: "Gain +3 of a random crop. Get +1 of each other crop.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Pik'n'mix",
    qty: 1,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 1,
    },
    image: "rummager",
    description: "Gain 3 random crops.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Trusty Trowel",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 0,
    },
    image: "rummager",
    description: "Gain +3 of a random crop.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Worm Food",
    qty: 1,
    cost: {
      apples: 1,
      carrots: 3,
      berries: 1,
    },
    image: "rummager",
    description: "Gain +2 Carrots, +1 Apple and +1 Berry.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Mole Food",
    qty: 1,
    cost: {
      apples: 3,
      carrots: 1,
      berries: 1,
    },
    image: "rummager",
    description: "+2 Apples, +1 Carrot, +1 Berry.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Hog Food",
    qty: 1,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 3,
    },
    image: "rummager",
    description: "+2 Berries, +1 Apple, +1 Carrot.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Award Winning Crop",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    image: "rummager",
    description: "Gain +6 of a random crop.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Midnight Snack",
    qty: 1,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 1,
    },
    image: "rummager",
    description: "Gain a random crop and draw a card.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Goodie Bag",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    image: "rummager",
    description: "Gain 5 random crops.",
    type: CARD_TYPE.Item,
  },
  // Gifts
  {
    name: "Goldfish",
    qty: 1,
    cost: {
      apples: 0,
      carrots: 0,
      berries: 1,
    },
    image: "rummager",
    description: "Gift. This does nothing!.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Birthday Present",
    qty: 1,
    cost: {
      apples: 0,
      carrots: 1,
      berries: 0,
    },
    image: "rummager",
    description: "Gain 3 random crops, then GIFT this to your Rival.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Hot Potato",
    qty: 1,
    cost: {
      apples: 1,
      carrots: 0,
      berries: 0,
    },
    image: "rummager",
    description:
      "Gift. Destroy 2 crops to gift this to your Rival. When discarded, destroy all your crops and remove this from the game.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Rotten Crops",
    qty: 1,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 1,
    },
    image: "rummager",
    description: "Gift. Destroy 2 crops to draw a card.",
    type: CARD_TYPE.Item,
  },
  {
    name: "I.O.U",
    qty: 1,
    cost: {
      apples: 1,
      carrots: 1,
      berries: 1,
    },
    image: "rummager",
    description:
      "GIFT. Give your rival a crop. When discarded, place this on top of your deck.",
    type: CARD_TYPE.Item,
  },
  //refund
  {
    name: "Dustpan",
    qty: 1,
    cost: {
      apples: 0,
      carrots: 1,
      berries: 3,
    },
    image: "rummager",
    description: "Draw a card. You may refund it this turn.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Damaged Goods",
    qty: 1,
    cost: {
      apples: 1,
      carrots: 0,
      berries: 3,
    },
    image: "rummager",
    description: "Refund a card from your hand or discard pile.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Receipts",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 0,
      berries: 2,
    },
    image: "rummager",
    description: "Refund a card from your hand. Draw a card.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Contrabrand",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 0,
    },
    image: "rummager",
    description:
      "Refund a card from your hand or discard pile, then GIFT it to your Rival.",
    type: CARD_TYPE.Item,
  },
  // discard
  {
    name: "Compost Bin",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    image: "rummager",
    description: "Discard a card to gain +2 of each crop.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Recycling Bin",
    qty: 1,
    cost: {
      apples: 0,
      carrots: 3,
      berries: 1,
    },
    image: "rummager",
    description:
      "Shuffle a card from your discard pile back into your deck, then draw a card.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Watering Can",
    qty: 1,
    cost: {
      apples: 0,
      carrots: 2,
      berries: 2,
    },
    image: "rummager",
    description: "Place a card from your discard pile on top of your deck.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Instruction Manual",
    qty: 1,
    cost: {
      apples: 0,
      carrots: 3,
      berries: 2,
    },
    image: "rummager",
    description: "Discard a card to pack a crate into one of your Work Orders.",
    type: CARD_TYPE.Item,
  },
  // Critter
  {
    name: "Morning Cuppa",
    qty: 1,
    cost: {
      apples: 1,
      carrots: 0,
      berries: 3,
    },
    image: "rummager",
    description: "Remove all Zzz counters from a critter. Draw a card.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Megaphone",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 1,
      berries: 0,
    },
    image: "rummager",
    description:
      "Remove a Zzz counter from each of your critters. Add 1 to each of your Rival's critters.",
    type: CARD_TYPE.Item,
  },
  // Seeds
  {
    name: "Farming Gloves",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 0,
    },
    image: "rummager",
    description:
      "Draw a card. If it is a seeds card, harvest it instantly. If not, place this on top of your deck.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Companion Crop",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 0,
      berries: 1,
    },
    image: "rummager",
    description:
      "Place this under one of your seeds, It's harvest is doubled. When discarded, draw a card.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Plant Food",
    qty: 1,
    cost: {
      apples: 1,
      carrots: 0,
      berries: 2,
    },
    image: "rummager",
    description:
      "Add a seed card from your deck or discard pile to your hand. (Shuffle your deck afterwards).",
    type: CARD_TYPE.Item,
  },
  //shop
  {
    name: "Placard",
    qty: 1,
    cost: {
      apples: 0,
      carrots: 1,
      berries: 2,
    },
    image: "rummager",
    description: "Refresh a card in the shop. Draw a card.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Gift Card",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    image: "rummager",
    description:
      "Remove this from the game, and add any Farmer Card from the shop to your hand.",
    type: CARD_TYPE.Item,
  },
  // 5 more items
  {
    name: "Phone Book",
    qty: 1,
    cost: {
      apples: 0,
      carrots: 2,
      berries: 1,
    },
    image: "rummager",
    description:
      "Get 2 favours from the shop for free. OR refresh a card in the shop.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Bingo Card",
    qty: 1,
    cost: {
      apples: 2,
      carrots: 2,
      berries: 2,
    },
    image: "rummager",
    description:
      "Get a random crop: Carrot: gain +1 of each crop. Apple: Draw a card. Berry: return this card to your hand.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Packing Slip",
    qty: 1,
    cost: {
      apples: 4,
      carrots: 4,
      berries: 4,
    },
    image: "rummager",
    description:
      "If you have 3 Work orders, pack a free crate into each of them. When discarded, get a work order for free.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Rocking Chair",
    qty: 1,
    cost: {
      apples: 3,
      carrots: 1,
      berries: 0,
    },
    image: "rummager",
    description:
      "Move up to 3 Zzz counters from your Critters onto any of you or your Rival's critters.",
    type: CARD_TYPE.Item,
  },
  {
    name: "Espresso",
    qty: 1,
    cost: {
      apples: 1,
      carrots: 0,
      berries: 2,
    },
    image: "rummager",
    description:
      "Place this under one of your critters. When they are exhausted, place them on top of your deck. ",
    type: CARD_TYPE.Item,
  },
];

export default items;
