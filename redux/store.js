import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from "redux-persist";
import foodReducer from "./food/food-reducer";
import supplierReducer from "./supplier/supplier-reducer";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const foodPersistedReducer = persistReducer(persistConfig, foodReducer);
const supplierPersistedReducer = persistReducer(persistConfig, supplierReducer);

// manually clear state
// AsyncStorage.clear();

export const store = configureStore({
    reducer: { food: foodPersistedReducer, supplier: supplierPersistedReducer },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)