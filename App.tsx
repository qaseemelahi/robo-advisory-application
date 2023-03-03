import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import RootStackNavigator from './src/navigation/RootStack';
import {store} from './src/redux';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootStackNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
