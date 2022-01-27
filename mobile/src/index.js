import { registerRootComponent } from 'expo';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import { store } from './store';
import MainScreen from './screens/main';

const App = () => (
  <Provider store={store}>
    <StatusBar style='dark' />
    <MainScreen />
  </Provider>
);

export default registerRootComponent(App);
