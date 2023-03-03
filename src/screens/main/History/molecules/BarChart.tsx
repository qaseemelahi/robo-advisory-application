import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import CustomText from '../../../../components/CustomText';
import {color, DoridFonts} from '../../../../utils/theme';
import {Styles} from '../../../../utils/globalStyles';
import {PieChart} from 'react-native-chart-kit';

interface iProps {
  title: string;
  percentage: string;
  color: string;
}

const BarChart: FC<iProps> = ({title, percentage, color}) => {
  return (
    <View style={[Styles.horizontal, {marginHorizontal: 10, marginBottom: 10}]}>
      <View style={{width: '60%'}}>
        <View style={Styles.spaceBetween}>
          <CustomText style={styles.percentage}>{percentage}</CustomText>
          <CustomText style={Styles.regular}>{title}</CustomText>
          <View style={[styles.box, {backgroundColor: color}]} />
        </View>
      </View>
    </View>
  );
};

export default BarChart;

const styles = StyleSheet.create({
  box: {
    height: 10,
    width: 10,

    borderRadius: 20,
  },
  percentage: {
    fontFamily: DoridFonts.regular,
    fontSize: 15,
  },
});
