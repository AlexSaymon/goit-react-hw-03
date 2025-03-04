import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";

const persistConfigContacts = {
  key: "contactsPersistor",
  version: 1,
  storage,
};
const persistConfigFilters = {
  key: "filtersPersistor",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfigContacts, contactReducer);
const persistedReducerFilters = persistReducer(persistConfigFilters, filterReducer);

export const store = configureStore({
  reducer: {
    contact: persistedReducer,
    filter: persistedReducerFilters,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
