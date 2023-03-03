import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {color, DoridFonts} from '../../../utils/theme';
import CustomText from '../../../components/CustomText';
import CustomButton from '../../../components/CustomButton';
import {Styles} from '../../../utils/globalStyles';
import SelectedButton from './molecules/SelectedButton';
import {useSelector} from 'react-redux';
import Card from './molecules/Card';
import {useAppSelector} from '../../../redux';

const Exchange = () => {
  const [activeButton, setActiveButton] = useState(false);
  const staticData = useAppSelector(state => state.staticData);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapContainer}>
        <CustomText style={styles.title}>تغذية الحساب</CustomText>
        <CustomText style={styles.description}>
          يمكنك إيداع الأموال في حسابك وتحديد المبلغ الذي تريد استثماره ، أو سحب
          الأموال من حسابك
        </CustomText>
        <CustomButton
          title="سحب الأموال"
          buttonStyle={styles.buttonStyle}
          titleTextSize={17}
          titleColor={color.primary}
        />
        <CustomButton title="إيداع الأموال" titleTextSize={17} />
        <SelectedButton
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />

        <CustomText
          style={{
            fontSize: 17,
            fontFamily: DoridFonts.regular,
            textAlign: 'right',
            marginVertical: 15,
          }}>
          {activeButton == true ? 'تاريخ الطلبات' : 'تاريخ الحولات'}
        </CustomText>
        {staticData?.map(item => {
          return (
            <Card
              key={item.id}
              date={item.date}
              price={item.price}
              desc={item.desc}
              title={item.title}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Exchange;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  wrapContainer: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  title: {
    fontSize: 19,
    fontFamily: DoridFonts.regular,
    textAlign: 'right',
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    fontFamily: DoridFonts.regular,
    textAlign: 'right',
  },
  buttonStyle: {
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.primary,
    marginVertical: 24,
  },
});
