import { CARD_TYPE, ICard, IWorkOrder, TAGS } from "../models/cards.models";
import bumblebees from "./bumblebees";
import caterpillars from "./caterpillars";
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
  addToDeck(deck, caterpillars, noDuplicates);
  addToDeck(deck, rabbits, noDuplicates);
  addToDeck(deck, moles, noDuplicates);
  addToDeck(deck, rats, noDuplicates);
  addToDeck(deck, raccoons, noDuplicates);
  addToDeck(deck, hedgehogs, noDuplicates);
  addToDeck(deck, bumblebees, noDuplicates);

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

const evaluateCostOfTag = (tag: TAGS, energy: number) => {
  switch (tag) {
    case TAGS.DRAW_A_CARD:
      return +3 * energy;
    case TAGS.DRAW_2_CARDS:
      return +6 * energy;
    case TAGS.DIVERSE_CROPS:
      return +1;
    case TAGS.CHOICE:
      return +1;
    case TAGS.DELAYED:
      return 0;
    case TAGS.SHUFFLE_DISCARD_TO_DECK:
      return +3 * energy;
    case TAGS.GAIN_CROP_1:
      return +1 * energy;
    case TAGS.GAIN_CROP_2:
      return +2 * energy;
    case TAGS.GAIN_CROP_3:
      return +3 * energy;
    case TAGS.GAIN_CROP_4:
      return +4 * energy;
    case TAGS.GAIN_CROP_5:
      return +5 * energy;
    case TAGS.GAIN_CROP_6:
      return +6 * energy;
    case TAGS.GAIN_CROP_9:
      return +9 * energy;
    case TAGS.TITULAR:
      return -3;
    case TAGS.DESTROY_1_OWN_CROP:
      return -2 * energy;
    case TAGS.DESTROY_1_CROP:
      return +1 * energy;
    case TAGS.DESTROY_2_CROP:
      return +2 * energy;
    case TAGS.DESTROY_3_CROP:
      return +3 * energy;
    case TAGS.DESTROY_4_CROP:
      return +4 * energy;
    case TAGS.DESTROY_5_CROP:
      return +5 * energy;
    case TAGS.DESTROY_6_CROP:
      return +6 * energy;
    case TAGS.DISRUPT_WORK_ORDER_1:
      return +2 * energy;
    case TAGS.DISRUPT_WORK_ORDER_2:
      return +4 * energy;
    case TAGS.REMOVE_ENERGY_1:
      return +2 * energy;
    case TAGS.DISCARD_OPPONENT_DECK_1:
      return +2 * energy;
    case TAGS.DISCARD_OPPONENT_HAND_1:
      return +4 * energy;
    case TAGS.DISCARD_FROM_HAND_1:
      return -3 * energy;
    case TAGS.DISCARD_FROM_HAND_2:
      return -6 * energy;
    case TAGS.PLACE_ON_TOP_DECK:
      return 4 * energy;
    case TAGS.CONDITIONAL_SML:
      return -1 * energy;
    case TAGS.CONDITIONAL_MED:
      return -2 * energy;
    case TAGS.CONDITIONAL_LRG:
      return -3 * energy;
    case TAGS.TRADE_1_FOR_1:
      return 1 * energy;
    case TAGS.REFUND_FROM_HAND:
      return 3 * energy;
    case TAGS.REFUND_FROM_DISCARD:
      return 6 * energy;
    case TAGS.PACK_WORK_ORDER_1:
      return 2 * energy;
    case TAGS.PACK_WORK_ORDER_2:
      return 4 * energy;
    case TAGS.DISCARD_FROM_DECK:
      return -1;
    case TAGS.RESTORE_ENERGY:
      return 1;
    case TAGS.RESTORE_ALL_ENERGY:
      return 2;
    case TAGS.RESTORE_1_ENERGY_TO_ALL:
      return 2;
    case TAGS.RESTORE_ALL_ENERGY_TO_ALL:
      return 4;
    case TAGS.REMOVE_1_ENERGY_FROM_ALL:
      return 4;
    case TAGS.REFRESH_SHOP_CARD:
      return 1;
    case TAGS.BOMB:
      return 4;
    case TAGS.EXHAUST:
      return 5;
    default:
      return 0;
  }
};

export const estimateCardCost = (card: ICard) => {
  let cost = 0;
  const energy = card.energy ?? 1;

  cost -= energy > 1 ? energy : 0;

  card.tags?.forEach((tag) => {
    const tagCost = evaluateCostOfTag(tag, energy);
    console.log(`${card.name} - ${tag} ${tagCost}`);
    return (cost += tagCost);
  });

  if (card.tags?.includes(TAGS.DELAYED)) {
    cost -= Math.floor(cost / 2);
  }

  return cost;
};
