import { createSlice } from "@reduxjs/toolkit";
import {
  IFarmCard,
  IFavourCard,
  IRewardCard,
  IVisitorCard,
  IWorkOrder,
} from "../models/cards.models";
import {
  createDeck,
  createFavourDeck,
  createRewardDeck,
  createStarterDeck,
  createVisitorsDeck,
  createWorkOrderDeck,
} from "../cards";
import { RootState } from "./store";

interface DecksState {
  starterDeck: {
    duplicates: IFarmCard[];
    noDuplicates: IFarmCard[];
  };
  farmDeck: {
    duplicates: IFarmCard[];
    noDuplicates: IFarmCard[];
  };
  favourDeck: {
    duplicates: IFavourCard[];
    noDuplicates: IFavourCard[];
  };
  rewardsDeck: {
    duplicates: IRewardCard[];
    noDuplicates: IRewardCard[];
  };
  workOrderDeck: {
    duplicates: IWorkOrder[];
    noDuplicates: IWorkOrder[];
  };
  visitorsDeck: IVisitorCard[];
}

const initialState: DecksState = {
  starterDeck: {
    duplicates: createStarterDeck(),
    noDuplicates: createStarterDeck(true),
  },
  farmDeck: {
    duplicates: createDeck(),
    noDuplicates: createDeck(true),
  },
  favourDeck: {
    duplicates: createFavourDeck(),
    noDuplicates: createFavourDeck(true),
  },
  rewardsDeck: {
    duplicates: createRewardDeck(),
    noDuplicates: createRewardDeck(true),
  },
  workOrderDeck: {
    duplicates: createWorkOrderDeck(),
    noDuplicates: createWorkOrderDeck(true),
  },
  visitorsDeck: createVisitorsDeck(),
};

const decksSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
  selectors: {},
});

export const {} = decksSlice.actions;

export const getDuplicatesFarmDeck = (state: RootState) =>
  state.decks.farmDeck.duplicates;
export const getFarmDeck = (state: RootState) =>
  state.decks.farmDeck.noDuplicates;
export const getDuplicatesRewardDeck = (state: RootState) =>
  state.decks.rewardsDeck.duplicates;
export const getRewardDeck = (state: RootState) =>
  state.decks.rewardsDeck.noDuplicates;
export const getDuplicatesFavourDeck = (state: RootState) =>
  state.decks.favourDeck.duplicates;
export const getFavourDeck = (state: RootState) =>
  state.decks.favourDeck.noDuplicates;
export const getDuplicatesStarterDeck = (state: RootState) =>
  state.decks.starterDeck.duplicates;
export const getStarterDeck = (state: RootState) =>
  state.decks.starterDeck.noDuplicates;
export const getDuplicatesWorkOrderDeck = (state: RootState) =>
  state.decks.workOrderDeck.duplicates;
export const getWorkOrderDeck = (state: RootState) =>
  state.decks.workOrderDeck.noDuplicates;
export const getVisitorsDeck = (state: RootState) => state.decks.visitorsDeck;

export default decksSlice.reducer;
