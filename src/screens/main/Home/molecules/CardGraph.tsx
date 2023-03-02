import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {color, fonts, textSize} from '../../../../utils/theme';
import CustomText from '../../../../components/CustomText';
import {ArrowDown, GraphLine} from '../../../../assets';
import {Styles} from '../../../../utils/globalStyles';

const CardGraph = () => {
  return (
    <View style={styles.cardContainer}>
      <CustomText style={styles.invested}>Invested</CustomText>
      <View style={[Styles.horizontal, {justifyContent: 'space-between'}]}>
        <View style={Styles.horizontal}>
          <CustomText style={styles.price}>$3,99,990</CustomText>
          <View style={[Styles.horizontal, styles.graphContainer]}>
            <GraphLine />
            <CustomText>20%</CustomText>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[Styles.horizontal, styles.dropDownContainer]}>
          <CustomText style={styles.weekText}>This Week</CustomText>
          <ArrowDown />
        </TouchableOpacity>
      </View>
      <View style={[Styles.horizontal]}>
        <CustomText style={styles.current}>Current</CustomText>
        <CustomText style={[styles.current, {fontFamily: fonts.semiBold}]}>
          $4,79,988
        </CustomText>
      </View>
    </View>
  );
};

export default CardGraph;

const styles = StyleSheet.create({
  cardContainer: {
    height: 205,
    backgroundColor: color.graphColor,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  invested: {
    fontSize: textSize.medium,
    color: color.lightGray6,
  },
  price: {
    fontSize: textSize.h2,
    fontFamily: fonts.semiBold,
    marginRight: 10,
  },
  current: {
    fontSize: textSize.tiny,
    marginRight: 10,
  },
  dropDownContainer: {
    backgroundColor: color.white,
    width: 105,
    height: 36,
    // marginRight: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  weekText: {
    marginRight: 8,
    color: color.lightGray6,
    fontSize: textSize.small,
  },
  graphContainer: {
    backgroundColor: color.white,
    width: 40,
    borderRadius: 5,
  },
});
