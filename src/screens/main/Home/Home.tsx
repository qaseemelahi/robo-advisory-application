import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../../../components/UserHeader';
import {color} from '../../../utils/theme';
import SearchBar from './molecules/SearchBar';
import CardGraph from './molecules/CardGraph';
import PropertyList from './molecules/PropertyList';

const Home = () => {
  const {mainContainer, wrapContainer} = styles;
  return (
    <SafeAreaView style={mainContainer}>
      <View style={wrapContainer}>
        <Header />
        <SearchBar />
        <CardGraph />
        <PropertyList />
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
