import { configureStore, combineReducers } from "@reduxjs/toolkit";
import filters from "./filtersSlice";

const rootReducer = combineReducers({
  filters,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
