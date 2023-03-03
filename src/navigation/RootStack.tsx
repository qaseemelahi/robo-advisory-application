import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStackNavigator from './MainStack';

const RootStack = createNativeStackNavigator();
// I've created this stack so that if we have auth section we can easily protect the routes
const RootStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="MainStack" component={MainStackNavigator} />
    </RootStack.Navigator>
  );
};
export default RootStackNavigator;
