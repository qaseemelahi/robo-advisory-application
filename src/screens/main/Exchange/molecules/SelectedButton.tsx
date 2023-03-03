import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import CustomText from '../../../../components/CustomText';
import {Styles} from '../../../../utils/globalStyles';
import {color} from '../../../../utils/theme';

interface iProps {
  activeButton: Boolean;
  setActiveButton: (arg: boolean) => void;
}

const SelectedButton: FC<iProps> = ({activeButton, setActiveButton}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      onPress={() => setActiveButton(!activeButton)}>
      <View
        style={{
          borderBottomWidth: activeButton == true ? undefined : 1,
          borderColor: color.primary,
        }}>
        <CustomText style={[Styles.normalText]}> تاريخ الحولات</CustomText>
      </View>
      <View
        style={{
          borderBottomWidth: activeButton == true ? 1 : undefined,
          borderColor: color.primary,
        }}>
        <CustomText style={Styles.normalText}>تاريخ الطلبات</CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default SelectedButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 20,
  },
});
