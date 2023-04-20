import AsyncStorage from '@react-native-async-storage/async-storage';
import {Action, configureStore} from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk, {ThunkAction} from 'redux-thunk';

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

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
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
