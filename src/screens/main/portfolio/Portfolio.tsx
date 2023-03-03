import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {color, DoridFonts, fonts} from '../../../utils/theme';
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
      <View style={styles.wrapContainer}>
        <CustomText style={styles.title}>الأثر المالي</CustomText>
        <CustomText style={styles.description}>
          سيؤثر التغير على أموالك على قدرتك على تحمل المخاطر بالإضافة إلى قدراتك
          على التحكم في النفس.
        </CustomText>
        <View style={{height: 70}} />
        <View>
          <CustomText style={styles.questionHeading}>السؤال 2 من 8</CustomText>
          <CustomText style={styles.question}>
            كيف سيؤثر هذا الاستثمار على أموالك؟
          </CustomText>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} />
          <View style={styles.iconContainer}>
            <Up />
            <Down />
          </View>
        </View>
        <CustomButton
          title="استمرار"
          titleTextSize={20}
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
  wrapContainer: {
    flex: 1,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontFamily: DoridFonts.regular,
    alignSelf: 'flex-end',
  },
  description: {
    marginVertical: 5,
    fontFamily: DoridFonts.regular,
    textAlign: 'right',
    fontSize: 16,
  },
  inputContainer: {
    borderWidth: 0.5,
    borderColor: color.placeholder,
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  iconContainer: {
    marginLeft: 5,
  },
  input: {
    width: '90%',
  },
  questionHeading: {
    fontSize: 14,
    fontFamily: DoridFonts.regular,
    alignSelf: 'flex-end',
  },
  question: {
    fontSize: 18,
    fontFamily: DoridFonts.regular,
    alignSelf: 'flex-end',
  },
});
