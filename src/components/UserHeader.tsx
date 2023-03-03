import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Notification, User} from '../assets';
import CustomText from './CustomText';
import {color, fonts, textSize} from '../utils/theme';
import {Styles} from '../utils/globalStyles';
const UserHeader = () => {
  return (
    <View style={[styles.mainContainer, Styles.horizontal]}>
      <TouchableOpacity activeOpacity={0.6}>
        <User />
      </TouchableOpacity>
      <View style={styles.information}>
        <CustomText>Hello User!</CustomText>
        <CustomText style={styles.welcome}>Welcome to Investment</CustomText>
      </View>
      <View style={styles.notification}>
        <View style={styles.box} />
        <Notification />
      </View>
    </View>
  );
};

export default UserHeader;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: textSize.small,
  },
  notification: {
    flex: 1,
    alignItems: 'flex-end',
  },
  welcome: {
    fontSize: textSize.medium,
    fontFamily: fonts.semiBold,
  },
  information: {
    marginLeft: 10,
  },
  box: {
    height: 12,
    width: 12,
    backgroundColor: color.green,
    position: 'absolute',
    zIndex: 100,
    borderRadius: 20,
  },
});
