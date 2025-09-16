import { CARD_TYPE, ICard, IFavourCard } from "../models/cards.models";

const favours: IFavourCard[] = [
  {
    name: "Buyback",
    qty: 2,
    image: "rummager",
    description: "Refund a card from your hand.",
    type: CARD_TYPE.Favour,
  },
  {
    name: "Pickpocket",
    qty: 2,
    image: "rummager",
    description: "Steal a crop from your Rival.",
    type: CARD_TYPE.Favour,
  },
  {
    name: "Pester",
    qty: 2,
    image: "rummager",
    description: "Add a Zzz counter to a Rival's critter.",
    type: CARD_TYPE.Favour,
  },
  {
    name: "Fast-track",
    qty: 2,
    image: "rummager",
    description: "Shuffle a card from your discard pile into your deck.",
    type: CARD_TYPE.Favour,
  },
  {
    name: "Set Asidea",
    qty: 2,
    image: "rummager",
    description:
      "Place this on a Farmer Card in the shop. Only you can buy it. Refreshing removes this card.",
    type: CARD_TYPE.Favour,
  },
  {
    name: "A Helping Hand",
    qty: 2,
    image: "rummager",
    description:
      "Gain +3 of a random crop. Your rival gets 1 of that crop too.",
    type: CARD_TYPE.Favour,
  },
  {
    name: "A Quick Nap",
    qty: 2,
    image: "rummager",
    description: "Remove a Zzz counter from one of your Critters.",
    type: CARD_TYPE.Favour,
  },
  {
    name: "Harvest",
    qty: 1,
    image: "rummager",
    description:
      "Instantly harvest on of your seeds and shuffle it back into your deck.",
    type: CARD_TYPE.Favour,
  },
  {
    name: "Tamper",
    qty: 1,
    image: "rummager",
    description:
      "Look at the top 3 cards of your Rival's deck. You may discard one of them.",
    type: CARD_TYPE.Favour,
  },
  {
    name: "",
    qty: 1,
    image: "rummager",
    description: "Refund a Starter card from your discard pile.",
    type: CARD_TYPE.Favour,
  },
  {
    name: "Restock",
    qty: 1,
    image: "rummager",
    description: "Refresh all Farmer Cards in the shop.",
    type: CARD_TYPE.Favour,
  },
  {
    name: "Headstart",
    qty: 1,
    image: "rummager",
    description: "Get a Work Order for free.",
    type: CARD_TYPE.Favour,
  },
  {
    name: "Advance Pay",
    qty: 1,
    image: "rummager",
    description: "Get a random crop, repeat for each Work Order you have.",
    type: CARD_TYPE.Favour,
  },
];

export default favours;
