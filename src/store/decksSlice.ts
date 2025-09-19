import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  IFavourCard,
  IRewardCard,
  RESOURCE,
  TAGS,
} from "../models/cards.models";
import { createDeck, createFavourDeck, createRewardDeck } from "../cards";
import { RootState } from "./store";

interface DecksState {
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
}

const initialState: DecksState = {
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

export default decksSlice.reducer;
