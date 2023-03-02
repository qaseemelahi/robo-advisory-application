import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../../components/UserHeader';
import {color} from '../../../utils/theme';
import SearchBar from './molecules/SearchBar';
import CardGraph from './molecules/CardGraph';
import Sorting from './molecules/Sorting';

const Home = () => {
  const {mainContainer, wrapContainer} = styles;
  return (
    <SafeAreaView style={mainContainer}>
      <View style={wrapContainer}>
        <Header />
        <SearchBar />
        <CardGraph />
        <Sorting />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: color.white,
  },
  wrapContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
});
