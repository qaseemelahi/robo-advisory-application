import {StyleSheet} from 'react-native';
import {color, DoridFonts} from './theme';

export const Styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  normalText: {
    fontSize: 17,
    lineHeight: 17,
    fontFamily: DoridFonts.regular,
  },
  regular: {
    fontSize: 15,
    fontFamily: DoridFonts.regular,
    letterSpacing: 1,
  },
  borderButton: {
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.primary,
  },
});
