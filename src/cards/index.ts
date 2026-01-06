import {
  CARD_TYPE,
  ICard,
  IFarmCard,
  IFavourCard,
  IRewardCard,
  IVisitorCard,
  IWorkOrder,
  TAGS,
} from "../models/cards.models";
import bees from "./critters/bees";
import worms from "./critters/worms";
import hedgehogs from "./critters/hedgehogs";

import items from "./items/items";
import moles from "./critters/moles";
import rabbits from "./critters/rabbits";
import raccoons from "./critters/raccoons";
import rats from "./critters/rats";
import seeds from "./critters/seeds";
import workOrders from "./workOrders";
import favours from "./favours";
import rewards from "./rewards";
import starters from "./items/starter";
import visitors from "./visitors";
import beavers from "./critters/beavers";
import wittled from "./critters/wittled";
import stumps from "./items/stumps";

const shuffleDeck = (deck: any[]) => {
  let currentIndex = deck.length;
  let randomIndex: number = 0;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [deck[currentIndex], deck[randomIndex]] = [
      deck[randomIndex],
      deck[currentIndex],
    ];
  }

  return deck;
};

const addToDeck = (deck: ICard[], cards: ICard[], noDuplicates: boolean) => {
  cards.forEach((card) => {
    for (let i = 0; i < (noDuplicates ? 1 : card.qty); i++) {
      deck.push({ ...card });
    }
  });
};

export const createDeck = (noDuplicates: boolean = false): IFarmCard[] => {
  const deck: IFarmCard[] = [];

  addToDeck(deck, items, noDuplicates);
  addToDeck(deck, seeds, noDuplicates);
  addToDeck(deck, worms, noDuplicates);
  addToDeck(deck, rabbits, noDuplicates);
  addToDeck(deck, moles, noDuplicates);
  addToDeck(deck, rats, noDuplicates);
  addToDeck(deck, raccoons, noDuplicates);
  addToDeck(deck, hedgehogs, noDuplicates);
  addToDeck(deck, bees, noDuplicates);
  addToDeck(deck, beavers, noDuplicates);
  addToDeck(deck, wittled, noDuplicates);
  addToDeck(deck, stumps, noDuplicates);

  // if (!noDuplicates) {
  //   return shuffleDeck(deck);
  // }

  return deck;
};

export const createStarterDeck = (
  noDuplicates: boolean = false
): IFarmCard[] => {
  const deck: IFarmCard[] = [];

  addToDeck(deck, starters, noDuplicates);

  return deck;
};

export const createFavourDeck = (
  noDuplicates: boolean = false
): IFavourCard[] => {
  if (noDuplicates) {
    return favours;
  }

  const deck: IFavourCard[] = [];

  favours.forEach((favour) => {
    for (let i = 0; i < favour.qty; i++) {
      deck.push({ ...favour });
    }
  });

  return deck;
};
export const createRewardDeck = (
  noDuplicates: boolean = false
): IRewardCard[] => {
  if (noDuplicates) {
    return rewards;
  }

  const deck: IRewardCard[] = [];

  rewards.forEach((reward) => {
    for (let i = 0; i < reward.qty; i++) {
      deck.push({ ...reward });
    }
  });

  return deck;
};

export const createWorkOrderDeck = (
  noDuplicates: boolean = false
): IWorkOrder[] => {
  if (noDuplicates) {
    return workOrders;
  }
  const deck: IWorkOrder[] = [];

  workOrders.forEach((card) => {
    for (let i = 0; i < card.qty; i++) {
      deck.push({ ...card });
    }
  });

  return shuffleDeck(deck);
};

export const createVisitorsDeck = (): IVisitorCard[] => {
  return visitors;
};
