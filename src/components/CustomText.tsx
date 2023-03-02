import React, {FC} from 'react';
import {StyleSheet, Text as NativeText, TextProps} from 'react-native';

import {color, fonts, textSize} from '../utils/theme';

const CustomText: FC<TextProps> = (props: TextProps) => {
  return (
    <NativeText
      {...props}
      style={[styles.text, props.style]}
      allowFontScaling={false}>
      {props.children}
    </NativeText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: color.black,
    fontSize: textSize.small,
    fontFamily: fonts.regular,
  },
});

export default CustomText;
