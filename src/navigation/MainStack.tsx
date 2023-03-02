import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenNames} from '../utils/constants';
import {
  ActiveHome,
  Exchange,
  InActiveHome,
  Porfolio,
  History,
  Profile,
} from '../assets';
import Home from '../screens/main/Home/Home';
import Portfolio from '../screens/main/portfolio/Portfolio';
import {color} from '../utils/theme';
import {StyleSheet, View} from 'react-native';
import ExchangeScreen from '../screens/main/Exchange/Exchange';
export type MainStackParams = {
  Home: undefined;
  Porfolio: undefined;
  Exchange: undefined;
  History: undefined;
  Profile: undefined;
};
const TabStack = createBottomTabNavigator<MainStackParams>();
const tabIconWidth = 27;
const tabIconHeight = 27;
const tabLabel = (title: string) => {
  if (title == ScreenNames.Home) {
    return 'Home';
  } else if (title == ScreenNames.Porfolio) {
    return 'Porfolio';
  } else if (title == ScreenNames.Exchange) {
    return '';
  } else if (title == ScreenNames.History) {
    return 'History';
  } else {
    return 'Profile';
  }
};
const tabIcon = (name: string, focused: boolean) => {
  if (name == ScreenNames.Home) {
    return focused ? (
      <ActiveHome width={tabIconWidth} height={tabIconHeight} />
    ) : (
      <InActiveHome width={tabIconWidth} height={tabIconHeight} />
    );
  } else if (name == ScreenNames.Porfolio) {
    return focused ? (
      <Porfolio width={tabIconWidth} height={tabIconHeight} />
    ) : (
      <Porfolio
        width={tabIconWidth}
        height={tabIconHeight}
        color={color.blue}
      />
    );
  } else if (name == ScreenNames.Exchange) {
    return (
      <View style={styles.box}>
        {focused ? (
          <Exchange width={tabIconWidth} height={tabIconHeight} />
        ) : (
          <Exchange width={tabIconWidth} height={tabIconHeight} />
        )}
      </View>
    );
  } else if (name == ScreenNames.History) {
    return focused ? (
      <History width={tabIconWidth} height={tabIconHeight} />
    ) : (
      <History width={tabIconWidth} height={tabIconHeight} />
    );
  } else if (name == ScreenNames.Profile) {
    return focused ? (
      <Profile width={tabIconWidth} height={tabIconHeight} />
    ) : (
      <Profile width={tabIconWidth} height={tabIconHeight} />
    );
  }
};

const MainStackNavigator: FC = () => {
  return (
    <TabStack.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: tabLabel(route.name),
        headerShown: false,
        // tabBarStyle: {height: 60},
        tabBarIcon: ({focused}) => {
          return tabIcon(route.name, focused);
        },
        tabBarActiveTintColor: color.blue,
        tabBarInactiveTintColor: color.black,
      })}>
      <TabStack.Screen name={ScreenNames.Home} component={Home} />
      <TabStack.Screen name={ScreenNames.Porfolio} component={Portfolio} />
      <TabStack.Screen name={ScreenNames.Exchange} component={ExchangeScreen} />
      <TabStack.Screen name={ScreenNames.History} component={Home} />
      <TabStack.Screen name={ScreenNames.Profile} component={Home} />
    </TabStack.Navigator>
  );
};
export default MainStackNavigator;
const styles = StyleSheet.create({
  box: {
    height: 50,
    width: 50,
    backgroundColor: color.white,
    borderRadius: 50,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: color.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
});
