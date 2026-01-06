import {
  configureStore,
  combineReducers,
  createSelector,
} from "@reduxjs/toolkit";
import filters from "./filtersSlice";
import decks from "./decksSlice";

import storage from "redux-persist/lib/storage"; // localStorage for web
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const rootReducer = combineReducers({
  filters,
  decks,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  // Choose ONE of these strategies:
  whitelist: ["filters"], // persist only these slices
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // redux-persist dispatches these non-serializable actions:
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const appSelector = createSelector.withTypes<RootState>();
