import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import CustomText from '../../../../components/CustomText';
import {Styles} from '../../../../utils/globalStyles';
import {color, fonts, textSize} from '../../../../utils/theme';
import {LineGraph} from 'react-native-graph';

interface iProps {
  title: string;
  price: string;
  percentage: string;
}
const SortingCard: FC<iProps> = ({title, price, percentage}) => {
  return (
    <View style={Styles.spaceBetween}>
      <CustomText style={styles.tille}>{title}</CustomText>
      <View>
        <CustomText style={styles.price}>{price}</CustomText>
        <CustomText style={styles.percentage}>{percentage}</CustomText>
      </View>
    </View>
  );
};

export default SortingCard;

const styles = StyleSheet.create({
  tille: {
    fontSize: textSize.h5,
    fontFamily: fonts.semiBold,
    marginTop: 15,
    marginBottom: 20,
  },
  price: {
    fontSize: textSize.medium,
    fontFamily: fonts.semiBold,
  },
  percentage: {
    color: color.green,
    textAlign: 'right',
    marginTop: 5,
  },
});
