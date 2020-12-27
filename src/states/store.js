import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { api } from '_middlewares';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let middlewares = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

if (process.env.NODE_ENV === 'development') {
  middlewares = [...middlewares, logger];
  const reduxDebugger = require('redux-middleware-flipper').default;
  middlewares.push(reduxDebugger());
}

const store = configureStore({
  reducer: persistedReducer,
  middlewares,
});

const persistor = persistStore(store);

export { store, persistor };
