import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {color} from '../../../utils/theme';
import CustomText from '../../../components/CustomText';

const Exchange = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapContainer}>
        <CustomText>تغذية الحساب</CustomText>
        <CustomText>
          يمكنك إيداع الأموال في حسابك وتحديد المبلغ الذي تريد استثماره ، أو سحب
          الأموال من حسابك
        </CustomText>
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
});
