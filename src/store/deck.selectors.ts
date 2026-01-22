import { createSelector } from "@reduxjs/toolkit";
import { ICard, IFarmCard, IWorkOrder } from "../models/cards.models";
import { getFilterState, IFilterState } from "./filtersSlice";
import {
  getDuplicatesFarmDeck,
  getDuplicatesFavourDeck,
  getDuplicatesMasksDeck,
  getDuplicatesRewardDeck,
  getDuplicatesStarterDeck,
  getDuplicatesWorkOrderDeck,
  getFarmDeck,
  getFavourDeck,
  getMasksDeck,
  getRewardDeck,
  getStarterDeck,
  getVisitorsDeck,
  getWorkOrderDeck,
} from "./decksSlice";
import { appSelector, RootState } from "./store";

const filterFarmDeck = (cards: IFarmCard[], filters: IFilterState) => {
  return cards.filter((card) => {
    if (filters.cardsWithArtFilter === "artOnly" && !card.image) {
      return false;
    }
    if (filters.cardsWithArtFilter === "withoutArtOnly" && card.image) {
      return false;
    }
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
    if (filters.effects.refundable && !card.refundable) {
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

const filterWorkOrderDeck = (cards: IWorkOrder[], filters: IFilterState) => {
  return cards.filter((card) => {
    if (filters.types.length && !filters.types.includes(card.type)) {
      return false;
    }
    if (filters.subTypes.length) {
      return false;
    }
    if (filters.sets.length && !filters.sets.includes(card.set)) {
      return false;
    }
    if (filters.crops.apples && card.crateCost.apples === 0) {
      return false;
    }
    if (filters.crops.berries && card.crateCost.berries === 0) {
      return false;
    }
    if (filters.crops.carrots && card.crateCost.carrots === 0) {
      return false;
    }
    if (filters.effects.Bonus) {
      return false;
    }
    if (filters.effects.Recycle) {
      return false;
    }
    if (filters.effects.refundable) {
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

const filterNonFarmDeck = <T extends ICard>(
  deck: Array<T>,
  filters: IFilterState
): T[] => {
  return deck.filter((card) => {
    if (filters.cardsWithArtFilter === "artOnly" && !card.image) {
      return false;
    }
    if (filters.cardsWithArtFilter === "withoutArtOnly" && card.image) {
      return false;
    }
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
    if (filters.effects.refundable) {
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
  [getDuplicatesFarmDeck, getFilterState],
  (deck, filters) => filterFarmDeck(deck, filters)
);
export const getFilteredStarterDeck = appSelector(
  [getStarterDeck, getFilterState],
  (deck, filters) => filterFarmDeck(deck, filters)
);

export const getFilteredDuplicatesStarterDeck = createSelector(
  [getDuplicatesStarterDeck, getFilterState],
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
export const getFilteredWorkOrderDeck = appSelector(
  [getWorkOrderDeck, getFilterState],
  (deck, filters) => filterWorkOrderDeck(deck, filters)
);

export const getFilteredDuplicatesWorkOrderDeck = createSelector(
  [getDuplicatesWorkOrderDeck, getFilterState],
  (deck, filters) => filterWorkOrderDeck(deck, filters)
);
export const getFilteredMasksDeck = appSelector(
  [getMasksDeck, getFilterState],
  (deck, filters) => filterNonFarmDeck(deck, filters)
);

export const getFilteredDuplicatesMasksDeck = createSelector(
  [getDuplicatesMasksDeck, getFilterState],
  (deck, filters) => filterNonFarmDeck(deck, filters)
);
export const getFilteredVisitorsDeck = createSelector(
  [getVisitorsDeck, getFilterState],
  (deck, filters) => filterNonFarmDeck(deck, filters)
);

export const getFilteredDuplicatesFarmDeckCount = createSelector(
  [getFilteredDuplicatesFarmDeck],
  (farmDeck) => farmDeck.length
);
export const getFilteredDuplicatesStarterDeckCount = createSelector(
  [getFilteredDuplicatesStarterDeck],
  (starterDeck) => starterDeck.length
);
export const getFilteredDuplicatesFavourDeckCount = createSelector(
  [getFilteredDuplicatesFavourDeck],
  (favours) => favours.length
);
export const getFilteredDuplicatesRewardDeckCount = createSelector(
  [getFilteredDuplicatesRewardDeck],
  (rewards) => rewards.length
);
export const getFilteredDuplicatesWorkOrderDeckCount = createSelector(
  [getFilteredDuplicatesWorkOrderDeck],
  (workOrders) => workOrders.length
);
export const getFilteredVisitorsDeckCount = createSelector(
  [getFilteredVisitorsDeck],
  (visitors) => visitors.length
);
export const getFilteredMasksDeckCount = createSelector(
  [getFilteredMasksDeck],
  (masks) => masks.length
);
export const getFilteredDuplicatesMasksDeckCount = createSelector(
  [getFilteredDuplicatesMasksDeck],
  (masks) => masks.length
);

export const getTotalFilteredCardsCount = createSelector(
  [
    getFilteredDuplicatesFarmDeckCount,
    getFilteredDuplicatesFavourDeckCount,
    getFilteredDuplicatesRewardDeckCount,
    getFilteredDuplicatesStarterDeckCount,
    getFilteredDuplicatesWorkOrderDeckCount,
    getFilteredVisitorsDeckCount,
    getFilteredDuplicatesMasksDeckCount,
  ],
  (farmDeck, favours, rewards, starters, workOrders, visitors, masks) =>
    farmDeck + favours + rewards + starters + workOrders + visitors + masks
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
