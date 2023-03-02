import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {Filter, Search} from '../../../../assets';
import {color} from '../../../../utils/theme';

const SearchBar = () => {
  return (
    <View style={styles.search}>
      <Search />
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor={color.placeholder}
      />
      <View style={styles.filter}>
        <Filter />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  search: {
    backgroundColor: color.gray,
    flexDirection: 'row',
    alignItems: 'center',
    height: 38,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 12,
  },
  textInput: {
    width: '90%',
    paddingHorizontal: 5,
  },
  filter: {
    alignItems: 'flex-end',
  },
});
