import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {color} from '../../../utils/theme';
import {BackIcon, Down, Up} from '../../../assets';
import CustomText from '../../../components/CustomText';
import CustomButton from '../../../components/CustomButton';

const Portfolio = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity
        style={{marginHorizontal: 15, marginTop: 10}}
        activeOpacity={0.6}>
        <BackIcon width={20} height={20} />
      </TouchableOpacity>
      <View style={{flex: 1, marginHorizontal: 15}}>
        <CustomText style={styles.title}>الأثر المالي</CustomText>
        <CustomText style={styles.description}>
          سيؤثر التغير على أموالك على قدرتك على تحمل المخاطر بالإضافة إلى قدراتك
          على التحكم في النفس.
        </CustomText>
        <View style={{height: 70}} />
        <View>
          <CustomText>السؤال 2 من 8</CustomText>
          <CustomText>كيف سيؤثر هذا الاستثمار على أموالك؟</CustomText>
        </View>
        <TouchableOpacity style={styles.inputContainer} activeOpacity={0.6}>
          <Up />
          <Down />
        </TouchableOpacity>
        <CustomButton
          title="استمرار"
          buttonStyle={styles.buttonContainer}></CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default Portfolio;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: color.white,
  },
  title: {
    fontSize: 16,
  },
  description: {
    marginVertical: 5,
  },
  inputContainer: {
    borderWidth: 0.5,
    borderColor: color.placeholder,
    width: '80%',
    alignSelf: 'center',
    height: 60,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
