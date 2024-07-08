import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import taskReducer from "../reducers";

const persistConfig = {
   key: "root",
   storage,
};

const rootReducer = combineReducers({
   tasks: taskReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
   // devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
