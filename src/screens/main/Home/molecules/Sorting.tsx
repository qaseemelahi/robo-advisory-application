import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomText from '../../../../components/CustomText';
import {textSize} from '../../../../utils/theme';
import {Sort} from '../../../../assets';
import {Styles} from '../../../../utils/globalStyles';
import {GraphData} from '../../../../utils/constants';
import {GraphDataType} from '../../../../utils/types/types';
import SortingCard from './SortingCard';
import {useSelector} from 'react-redux';

const Sorting = () => {
  const localData = useSelector(state => state.graphData);
  const [sortingData, setSortingData] = useState<GraphDataType[]>(GraphData);
  return (
    <View style={styles.main}>
      <View style={Styles.spaceBetween}>
        <View style={Styles.horizontal}>
          <CustomText style={styles.sortText}>Sort</CustomText>
          <Sort />
        </View>
        <CustomText style={styles.amount}>Amount(Invested)</CustomText>
      </View>
      {localData?.map((item, index) => {
        return (
          <SortingCard
            key={index}
            price={item.price}
            title={item.name}
            percentage={item.share}
          />
        );
      })}
    </View>
  );
};

export default Sorting;

const styles = StyleSheet.create({
  main: {
    marginTop: 20,
  },
  sortText: {
    fontSize: textSize.medium,
    marginRight: 10,
  },
  amount: {
    fontSize: textSize.medium,
  },
});
