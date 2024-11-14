import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userSlice';

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// Define persist configuration
const persistConfig = {
  key: 'root',
  storage,
  version: 1,  // Set version number (replace with your app's version if needed)
};

// Apply persistReducer to rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,  // Use persistedReducer here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,  // Disable serializability check for redux-persist
    }),
});

// Create persistor
export const persistor = persistStore(store);
