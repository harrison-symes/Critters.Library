import { createSelector } from "@reduxjs/toolkit";
import { ICard, IFarmCard } from "../models/cards.models";
import { getFilterState, IFilterState } from "./filtersSlice";
import {
  getDuplicatesFavourDeck,
  getDuplicatesRewardDeck,
  getFarmDeck,
  getFavourDeck,
  getRewardDeck,
} from "./decksSlice";
import { appSelector, RootState } from "./store";

const filterFarmDeck = (cards: IFarmCard[], filters: IFilterState) => {
  return cards.filter((card) => {
    if (filters.types.length && !filters.types.includes(card.type)) {
      return false;
    }
    if (
      filters.subTypes.length &&
      (!card.subtype || !filters.subTypes.includes(card.subtype))
    ) {
      return false;
    }
    if (filters.sets.length && !filters.sets.includes(card.set)) {
      return false;
    }
    if (filters.crops.apples && card.cost.apples === 0) {
      return false;
    }
    if (filters.crops.berries && card.cost.berries === 0) {
      return false;
    }
    if (filters.crops.carrots && card.cost.carrots === 0) {
      return false;
    }
    if (filters.effects.Bonus && !card.buyBonus) {
      return false;
    }
    if (filters.effects.Recycle && !card.recycle) {
      return false;
    }
    if (filters.effects.sellable && !card.sellable) {
      return false;
    }
    if (filters.effects.unsellable && !card.unsellable) {
      return false;
    }
    if (filters.effects.holdable && !card.holdable) {
      return false;
    }
    const hasMissingTag = filters.tags.find((tag) => {
      return !card.tags?.includes(tag);
    });

    if (hasMissingTag) {
      return false;
    }

    return true;
  });
};

const filterNonFarmDeck = <T extends ICard>(
  deck: Array<T>,
  filters: IFilterState
): T[] => {
  return deck.filter((card) => {
    if (filters.types.length && !filters.types.includes(card.type)) {
      return false;
    }
    if (filters.subTypes.length) {
      return false;
    }
    if (filters.sets.length && !filters.sets.includes(card.set)) {
      return false;
    }
    if (filters.crops.apples) {
      return false;
    }
    if (filters.crops.berries) {
      return false;
    }
    if (filters.crops.carrots) {
      return false;
    }
    if (filters.effects.Bonus) {
      return false;
    }
    if (filters.effects.Recycle) {
      return false;
    }
    if (filters.effects.sellable) {
      return false;
    }
    if (filters.effects.unsellable) {
      return false;
    }
    if (filters.effects.holdable) {
      return false;
    }
    const hasMissingTag = filters.tags.find((tag) => {
      return !card.tags?.includes(tag);
    });

    if (hasMissingTag) {
      return false;
    }

    return true;
  });
};

export const getFilteredFarmDeck = appSelector(
  [getFarmDeck, getFilterState],
  (deck, filters) => filterFarmDeck(deck, filters)
);

export const getFilteredDuplicatesFarmDeck = createSelector(
  [getFarmDeck, getFilterState],
  (deck, filters) => filterFarmDeck(deck, filters)
);

export const getFilteredFavourDeck = appSelector(
  [getFavourDeck, getFilterState],
  (deck, filters) => filterNonFarmDeck(deck, filters)
);

export const getFilteredDuplicatesFavourDeck = createSelector(
  [getDuplicatesFavourDeck, getFilterState],
  (deck, filters) => filterNonFarmDeck(deck, filters)
);

export const getFilteredRewardDeck = appSelector(
  [getRewardDeck, getFilterState],
  (deck, filters) => filterNonFarmDeck(deck, filters)
);

export const getFilteredDuplicatesRewardDeck = createSelector(
  [getDuplicatesRewardDeck, getFilterState],
  (deck, filters) => filterNonFarmDeck(deck, filters)
);

export const getFilteredFarmDeckCount = createSelector(
  [getFilteredFarmDeck],
  (farmDeck) => farmDeck.length
);
export const getFilteredFavourDeckCount = createSelector(
  [getFilteredFavourDeck],
  (favours) => favours.length
);
export const getFilteredRewardDeckCount = createSelector(
  [getFilteredRewardDeck],
  (rewards) => rewards.length
);
export const getTotalFilteredCardsCount = createSelector(
  [
    getFilteredFarmDeckCount,
    getFilteredFavourDeckCount,
    getFilteredRewardDeckCount,
  ],
  (farmDeck, favours, rewards) => farmDeck + favours + rewards
);

export const getFutureFilterCount =
  (filterOverride: Partial<IFilterState>) => (state: RootState) => {
    const newState: RootState = {
      ...state,
      filters: {
        ...state.filters,
        ...filterOverride,
      },
    };

    return getTotalFilteredCardsCount(newState);
  };
