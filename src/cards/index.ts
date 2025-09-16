import {
  CARD_TYPE,
  ICard,
  IFarmCard,
  IWorkOrder,
  TAGS,
} from "../models/cards.models";
import bees from "./farm/bees";
import worms from "./farm/worms";
import hedgehogs from "./farm/hedgehogs";

import items from "./farm/items";
import moles from "./farm/moles";
import rabbits from "./farm/rabbits";
import raccoons from "./farm/raccoons";
import rats from "./farm/rats";
import seeds from "./farm/seeds";
import workOrders from "./workOrders";

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

  if (!noDuplicates) {
    return shuffleDeck(deck);
  }

  return deck;
};

export const createWorkOrderDeck = (): IWorkOrder[] => {
  const deck: IWorkOrder[] = [];

  workOrders.forEach((card) => {
    for (let i = 0; i < card.qty; i++) {
      deck.push({ ...card });
    }
  });

  return shuffleDeck(deck);
};
