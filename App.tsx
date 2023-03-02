/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {StyleSheet, View} from 'react-native';
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

const styles = StyleSheet.create({});

export default App;
