import React, {FC, ReactNode} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';

import {color, textSize} from '../utils/theme';
import CustomText from './CustomText';

type ButtonProps = {
  title: string;
  titleColor?: string;
  onPress?: (event: GestureResponderEvent) => void | Promise<void>;
  buttonStyle?: StyleProp<ViewStyle>;
  loading?: boolean;
  disabled?: boolean;
  loaderColor?: string;
  addShadow?: boolean;
  icon?: ReactNode;
  titleTextSize?: number;
};

const CustomButton: FC<ButtonProps> = ({
  title,
  titleColor,
  onPress,
  buttonStyle,
  loading = false,
  disabled = false,
  loaderColor,
  titleTextSize,
}: ButtonProps) => {
  const {container, dim} = styles;

  return (
    <TouchableOpacity
      style={[container, buttonStyle]}
      activeOpacity={0.6}
      onPress={onPress}
      disabled={loading || disabled}>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={!!loaderColor ? loaderColor : color.white}
        />
      ) : (
        <>
          <CustomText
            style={[
              {
                color: !!titleColor ? titleColor : color.white,
                fontSize: !!titleTextSize ? titleTextSize : textSize.small,
              },
            ]}>
            {title}
          </CustomText>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: color.primary,
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  dim: {
    opacity: 0.5,
  },
});

export default CustomButton;
