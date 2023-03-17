import AsyncStorage from '@react-native-async-storage/async-storage';
import {Action, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {ThunkAction} from 'redux-thunk';

import rootReducer, {RootState} from './rootReducer';

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

const persistConfig = {
  key: 'root',
  version: 1,
  debug: __DEV__,
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['activity'], //include here
  timeout: 0, // https://github.com/rt2zz/redux-persist/issues/717
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      warnAfter: 200,
    },
    immutableCheck: {warnAfter: 300},
  }),
];

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: __DEV__,
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type ThunkConfig = {
  dispatch: AppDispatch;
  state: RootState;
  extra: {};
};

export {store, persistor};
