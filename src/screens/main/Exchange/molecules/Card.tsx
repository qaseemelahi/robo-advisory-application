import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import CustomText from '../../../../components/CustomText';
import {Styles} from '../../../../utils/globalStyles';
import {color, DoridFonts} from '../../../../utils/theme';

interface iProps {
  title: string;
  price: string;
  desc: string;
  date: string;
}

const Card: FC<iProps> = ({title, price, desc, date}) => {
  return (
    <TouchableOpacity style={styles.main} activeOpacity={0.6}>
      <View style={styles.textContainer}>
        <CustomText style={styles.price}>{price}</CustomText>
        <CustomText style={styles.desc}>{desc}</CustomText>
      </View>
      <View style={styles.textContainer}>
        <CustomText style={styles.title}>{title}</CustomText>
        <CustomText style={styles.date}>{date}</CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  main: {
    marginTop: 12,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 15,
    color: color.textColor,
    fontFamily: DoridFonts.regular,
  },
  title: {
    fontFamily: DoridFonts.regular,
    fontSize: 17,
  },
  date: {
    fontFamily: DoridFonts.regular,
    color: color.lightGray6,
    marginTop: 5,
    fontSize: 12,
  },
  desc: {
    color: color.green,
    marginTop: 5,
  },
  textContainer: {
    alignItems: 'center',
  },
});
