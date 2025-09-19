import {
  configureStore,
  combineReducers,
  createSelector,
} from "@reduxjs/toolkit";
import filters from "./filtersSlice";
import decks from "./decksSlice";

const rootReducer = combineReducers({
  filters,
  decks,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const appSelector = createSelector.withTypes<RootState>();
