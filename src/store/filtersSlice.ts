import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  RESOURCE,
  TAGS,
} from "../models/cards.models";
import { RootState } from "./store";

export type TEffects =
  | "Recycle"
  | "Bonus"
  | "holdable"
  | "sellable"
  | "unsellable";

export interface IFilterState {
  types: CARD_TYPE[];
  subTypes: CARD_SUBTYPE[];
  crops: Record<RESOURCE, boolean>;
  effects: Record<TEffects, boolean>;
  tags: TAGS[];
  sets: CARD_SET[];
}

const initialState: IFilterState = {
  types: [],
  subTypes: [],
  crops: {
    apples: false,
    berries: false,
    carrots: false,
  },
  effects: {
    Bonus: false,
    Recycle: false,
    holdable: false,
    sellable: false,
    unsellable: false,
  },
  tags: [],
  sets: [CARD_SET.BASE],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleCardTypeFilter: (state, action: PayloadAction<CARD_TYPE>) => {
      if (state.types.includes(action.payload)) {
        state.types = state.types.filter((type) => type !== action.payload);
      } else {
        state.types = [...state.types, action.payload];
      }
    },
    toggleCardSubTypeFilter: (state, action: PayloadAction<CARD_SUBTYPE>) => {
      if (state.subTypes.includes(action.payload)) {
        state.subTypes = state.subTypes.filter(
          (type) => type !== action.payload
        );
      } else {
        state.subTypes = [...state.subTypes, action.payload];
      }
    },
    toggleCropFilter: (state, action: PayloadAction<RESOURCE>) => {
      state.crops[action.payload] = !state.crops[action.payload];
    },
    toggleEffectsFilter: (state, action: PayloadAction<TEffects>) => {
      state.effects[action.payload] = !state.effects[action.payload];
    },
    toggleTagFilter: (state, action: PayloadAction<TAGS>) => {
      if (state.tags.includes(action.payload)) {
        state.tags = state.tags.filter((type) => type !== action.payload);
      } else {
        state.tags = [...state.tags, action.payload];
      }
    },
    toggleCardSetFilter: (state, action: PayloadAction<CARD_SET>) => {
      if (state.sets.includes(action.payload)) {
        state.sets = state.sets.filter((type) => type !== action.payload);
      } else {
        state.sets = [...state.sets, action.payload];
      }
    },
  },
  selectors: {},
});

export const {
  toggleCardTypeFilter,
  toggleCardSubTypeFilter,
  toggleCropFilter,
  toggleEffectsFilter,
  toggleTagFilter,
  toggleCardSetFilter,
} = filterSlice.actions;

export const getFilterState = (state: RootState) => state.filters;
export const getCardTypeFilter = (state: RootState) => state.filters.types;
export const getCardSubTypeFilter = (state: RootState) =>
  state.filters.subTypes;
export const getCropFilters = (state: RootState) => state.filters.crops;
export const getEffectsFilters = (state: RootState) => state.filters.effects;
export const getFilteredTags = (state: RootState) => state.filters.tags;
export const getFilteredSets = (state: RootState) => state.filters.sets;

export default filterSlice.reducer;
