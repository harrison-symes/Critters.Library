import { CARD_TYPE, ICard, IWorkOrder, TAGS } from "../models/cards.models";
import bees from "./bees";
import worms from "./worms";
import hedgehogs from "./hedgehogs";

import items from "./items";
import moles from "./moles";
import rabbits from "./rabbits";
import raccoons from "./raccoons";
import rats from "./rats";
import seeds from "./seeds";
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

export const createDeck = (noDuplicates: boolean = false): ICard[] => {
  const deck: ICard[] = [];

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
