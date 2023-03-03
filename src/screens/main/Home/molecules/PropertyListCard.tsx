import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import CustomText from '../../../../components/CustomText';
import {Styles} from '../../../../utils/globalStyles';
import {color, fonts, textSize} from '../../../../utils/theme';
import LineChart from '../../../../components/LineChart';
import {GreenArrow, YellowArrow} from '../../../../assets';

interface iProps {
  title: string;
  price: string;
  percentage: string;
  arrow: boolean;
  from: string;
  to: string;
}
const PropertyListCard: FC<iProps> = ({
  title,
  price,
  percentage,
  arrow,
  from,
  to,
}) => {
  return (
    <View style={[Styles.spaceBetween, styles.root]}>
      <CustomText style={styles.tille}>{title}</CustomText>
      <LineChart width={100} height={60} from={from} to={to} />
      <View>
        <CustomText style={styles.price}>{price}</CustomText>
        <View style={[Styles.horizontal, styles.priceContainer]}>
          {arrow ? <YellowArrow /> : <GreenArrow />}
          <CustomText
            style={[
              styles.percentage,
              {color: arrow ? color.lightYellow : color.green},
            ]}>
            {percentage}
          </CustomText>
        </View>
      </View>
    </View>
  );
};

export default PropertyListCard;

const styles = StyleSheet.create({
  root: {
    borderTopColor: color.placeholder,
    borderTopWidth: 1,
    paddingTop: 10,
  },
  tille: {
    fontSize: textSize.h5,
    fontFamily: fonts.semiBold,
    marginTop: 15,
    marginBottom: 20,
    marginRight: 30,
  },
  price: {
    fontSize: textSize.medium,
    fontFamily: fonts.semiBold,
  },
  percentage: {
    color: color.green,
    textAlign: 'right',
    marginLeft: 5,
  },
  container: {
    width: '100%',
    height: 75,
    borderRadius: 12,
    backgroundColor: 'blue',
  },
  curvedLine: {
    width: '20%',
    height: 100,
    position: 'absolute',
    bottom: -25,
    left: '40%',
    borderRadius: 35,
    backgroundColor: color.white,
    transform: [{scaleX: 5}, {scaleY: 1}],
  },
  priceContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 3,
  },
});
