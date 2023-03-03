import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import CustomText from '../../../../components/CustomText';
import {Styles} from '../../../../utils/globalStyles';
import {color, fonts, textSize} from '../../../../utils/theme';
import {LineGraph} from 'react-native-graph';
import LineChart from '../../../../components/LineChart';
import MyBezierLineChart from '../../../../components/BezierLineChart';
import {GreenArrow, YellowArrow} from '../../../../assets';
import {Area, Chart} from 'react-native-responsive-linechart';

interface iProps {
  title: string;
  price: string;
  percentage: string;
  arrow: Boolean;
  from: string;
  to: string;
}
const SortingCard: FC<iProps> = ({
  title,
  price,
  percentage,
  arrow,
  from,
  to,
}) => {
  return (
    <View style={Styles.spaceBetween}>
      <CustomText style={styles.tille}>{title}</CustomText>
      <LineChart width={100} height={60} from={from} to={to} />
      <View>
        <CustomText style={styles.price}>{price}</CustomText>
        <View style={[Styles.horizontal, {justifyContent: 'flex-end'}]}>
          {arrow ? <YellowArrow /> : <GreenArrow />}
          <CustomText
            style={[
              styles.percentage,
              {color: arrow ? color.lightYellow : color.green},
            ]}>
            {percentage}
          </CustomText>
        </View>
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
    marginRight: 30,
  },
  price: {
    fontSize: textSize.medium,
    fontFamily: fonts.semiBold,
  },
  percentage: {
    color: color.green,
    textAlign: 'right',
    marginTop: 5,
    marginLeft: 5,
  },
  container: {
    width: '100%',
    height: 75,
    borderRadius: 12,
    backgroundColor: 'blue',
  },
  curvedLine: {
    width: '20%',
    height: 100,
    position: 'absolute',
    bottom: -25,
    left: '40%',
    borderRadius: 35,
    backgroundColor: color.white,
    transform: [{scaleX: 5}, {scaleY: 1}],
  },
});
