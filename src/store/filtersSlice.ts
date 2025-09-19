import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CARD_SUBTYPE,
  CARD_TYPE,
  RESOURCE,
  TAGS,
} from "../models/cards.models";

export type TEffects =
  | "Recycle"
  | "Bonus"
  | "holdable"
  | "sellable"
  | "unsellable";

interface FilterState {
  types: CARD_TYPE[];
  subTypes: CARD_SUBTYPE[];
  crops: Record<RESOURCE, boolean>;
  effects: Record<TEffects, boolean>;
  tags: TAGS[];
}

const initialState: FilterState = {
  types: [],
  subTypes: [],
  crops: {
    apples: true,
    berries: true,
    carrots: true,
  },
  effects: {
    Bonus: false,
    Recycle: false,
    holdable: false,
    sellable: false,
    unsellable: false,
  },
  tags: [],
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
  },
  selectors: {
    getCardTypeFilter: (state) => state.types,
    getCardSubTypeFilter: (state) => state.subTypes,
    getCropFilters: (state) => state.crops,
    getEffectsFilters: (state) => state.effects,
    getFilteredTags: (state) => state.tags,
  },
});

export const {
  toggleCardTypeFilter,
  toggleCardSubTypeFilter,
  toggleCropFilter,
  toggleEffectsFilter,
  toggleTagFilter,
} = filterSlice.actions;
export const {
  getCardSubTypeFilter,
  getCardTypeFilter,
  getCropFilters,
  getEffectsFilters,
  getFilteredTags,
} = filterSlice.selectors;
export default filterSlice.reducer;
