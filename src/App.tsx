import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as ReduxStoreProvider} from 'react-redux';
import {persistor, store} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {AppThemeProvider} from './theme/AppThemeProvider';

import AppNavigation from './navigation/TabNavigations';
import AppTheme from './theme';

const App = () => {
  return (
    <ReduxStoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppThemeProvider theme={AppTheme}>
          <SafeAreaProvider>
            <NavigationContainer>
              <AppNavigation />
            </NavigationContainer>
          </SafeAreaProvider>
        </AppThemeProvider>
      </PersistGate>
    </ReduxStoreProvider>
  );
};

export default App;
