import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import commonSlice from './common/commonSlice';
import userSlice from './user/userSlice';
import cartReducer from './user/cartSlice'; // ← ADD CART SLICE

// ✅ Combine all slices
const appReducer = combineReducers({
  commonSlice,
  userSlice,
  cart: cartReducer, // ← Add cart here
});

// ✅ Root reducer with logout reset
const rootReducer = (state, action) => {
  if (action.type === 'user/logout') {
    storage.removeItem('persist:root'); // clear persisted data
    state = undefined;
  }
  return appReducer(state, action);
};

// ✅ Persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userSlice', 'cart'], // ← add cart to whitelist
  blacklist: ['commonSlice'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// ✅ Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);
