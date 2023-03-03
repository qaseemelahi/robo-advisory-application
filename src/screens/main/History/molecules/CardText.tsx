import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import CustomText from '../../../../components/CustomText';
import {DoridFonts} from '../../../../utils/theme';

interface iProps {
  mainText: string;
  descText: string;
}

const CardText: FC<iProps> = ({mainText, descText}) => {
  return (
    <View>
      <CustomText style={styles.mainText}>{mainText}</CustomText>
      <CustomText style={styles.descText}>{descText}</CustomText>
    </View>
  );
};

export default CardText;

const styles = StyleSheet.create({
  mainText: {
    fontSize: 14,
    fontFamily: DoridFonts.regular,
  },
  descText: {
    fontSize: 16,
  },
});
