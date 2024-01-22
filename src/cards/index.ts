import { ICard, IWorkOrder } from "../models/cards.models";
import bumblebees from "./bumblebees";
import caterpillars from "./caterpillars";
import constructs from "./constructs";
import crows from "./crows";
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

const addToDeck = (deck: ICard[], cards: ICard[]) => {
  cards.forEach((card) => {
    for (let i = 0; i < card.qty; i++) {
      deck.push({ ...card });
    }
  });
};

export const createDeck = (): ICard[] => {
  const deck: ICard[] = [];

  addToDeck(deck, items);
  addToDeck(deck, seeds);
  addToDeck(deck, caterpillars);
  addToDeck(deck, rabbits);
  addToDeck(deck, crows);
  addToDeck(deck, moles);
  addToDeck(deck, rats);
  addToDeck(deck, raccoons);
  addToDeck(deck, hedgehogs);
  addToDeck(deck, constructs);
  addToDeck(deck, bumblebees);

  return shuffleDeck(deck);
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
