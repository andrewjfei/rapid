import { registerRootComponent } from 'expo';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import MainScreen from './screens/main';

const App = () => (
  <Provider store={store}>
    <MainScreen />
  </Provider>
);

export default registerRootComponent(App);
