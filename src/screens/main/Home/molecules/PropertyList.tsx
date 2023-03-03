import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {textSize} from '../../../../utils/theme';
import {Sort} from '../../../../assets';
import {Styles} from '../../../../utils/globalStyles';

import PropertyListCard from './PropertyListCard';
import {useAppSelector} from '../../../../redux';

const PropertyList = () => {
  const localData = useAppSelector(state => state.graphData);
  return (
    <View style={styles.main}>
      <View style={[Styles.spaceBetween, styles.container]}>
        <View style={Styles.horizontal}>
          <CustomText style={styles.sortText}>Sort</CustomText>
          <TouchableOpacity activeOpacity={0.6}>
            <Sort />
          </TouchableOpacity>
        </View>
        <CustomText style={styles.amount}>Amount(Invested)</CustomText>
      </View>
      {localData?.map((item, index) => {
        return (
          <PropertyListCard
            key={index}
            arrow={item.arrow}
            price={item.price}
            title={item.name}
            percentage={item.share}
            from={item.from}
            to={item.to}
          />
        );
      })}
    </View>
  );
};

export default PropertyList;

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
  container: {
    marginBottom: 16,
  },
});
