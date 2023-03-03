/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {
  color,
  DoridFonts,
  series,
  sliceColor,
  widthAndHeight,
} from '../../../utils/theme';
import CustomText from '../../../components/CustomText';
import CustomButton from '../../../components/CustomButton';
import {Styles} from '../../../utils/globalStyles';
import CardText from './molecules/CardText';
import BarChart from './molecules/BarChart';
import {useAppSelector} from '../../../redux';
import {ButtonsData} from '../../../utils/constants';
import PieChart from 'react-native-pie-chart';
import MyBezierLineChart from '../../../components/BezierLineChart';
import {LineChart} from 'react-native-chart-kit';

const History = () => {
  const data = {
    labels: ['27 فبراير 2023', '20 فبراير 2023'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: 2,
      },
    ],
  };
  const chartBar = useAppSelector(state => state.barChartData);
  const [selectedId, setSelectedId] = useState(ButtonsData.length - 1);
  const handleSection = (id: number) => {
    if (selectedId === id) {
      return null;
    } else {
      setSelectedId(id);
    }
  };

  return (
    <SafeAreaView style={styles.mainScreen}>
      <ScrollView>
        <View style={styles.wrapContainer}>
          <CustomText style={styles.title}>المحفظة الاستثمارية</CustomText>
          <View style={Styles.spaceBetween}>
            <CustomButton
              title="استثمر"
              titleTextSize={18}
              buttonStyle={{borderRadius: 30, width: '35%'}}
            />
            <View>
              <CustomText style={Styles.normalText}>رصيد المحفظة</CustomText>
              <CustomText style={Styles.regular}>SAR 100,000</CustomText>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <CustomText style={styles.textCon}>المحفظة الحالية</CustomText>
            <View
              style={[
                Styles.spaceBetween,
                {marginHorizontal: 30, marginVertical: 20},
              ]}>
              <CardText mainText="الارباح" descText="SAR 100" />
              <CardText mainText="العوائد" descText="0.23%" />
              <CardText mainText="مستوى المخاطرة" descText="محافظ" />
            </View>
          </View>
          <View>
            {chartBar.map(item => {
              return (
                <BarChart
                  key={item.id}
                  percentage={item.percentage}
                  title={item.title}
                  color={item.color}
                />
              );
            })}
            <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
              doughnut={true}
              style={{position: 'absolute', right: 0}}
            />
          </View>
          <CustomButton
            title="معلومات أكثر"
            buttonStyle={[Styles.borderButton, {marginTop: 20}]}
            titleColor={color.primary}
            titleTextSize={17}
          />
          {/* Graph 1 */}
          <CustomText style={[Styles.normalText, {marginVertical: 15}]}>
            الارباح المتوقعة
          </CustomText>
          <MyBezierLineChart />
          <View style={{marginTop: 20}}>
            <CustomText style={[Styles.normalText, {textAlign: 'right'}]}>
              الأداء السابق
            </CustomText>
            <CustomText style={[Styles.regular, styles.regularText]}>
              فيما يلي أداء الأصول الخاصة بك لفترة زمنية معينة. اعتبارًا من 23
              أغسطس 2021 ، الساعة 20:00 بالتوقيت العالمي المنس
            </CustomText>
          </View>
          <ScrollView
            horizontal
            style={{marginTop: 20}}
            showsHorizontalScrollIndicator={false}>
            {ButtonsData.map((item, index) => {
              return (
                <CustomButton
                  key={item.id}
                  onPress={() => handleSection(index)}
                  title={item.name}
                  titleTextSize={15}
                  titleColor={
                    index === selectedId ? color.white : color.primary
                  }
                  buttonStyle={[
                    styles.tabButton,
                    {
                      borderWidth: index === selectedId ? 0 : 1,
                      backgroundColor:
                        index === selectedId ? color.primary : color.white,
                    },
                  ]}
                />
              );
            })}
          </ScrollView>
          <LineChart
            data={data}
            width={Dimensions.get('window').width} // from react-native
            height={300}
            xAxisLabel={'سنوات'}
            transparent
            chartConfig={{
              backgroundColor: color.white,
              backgroundGradientFrom: color.white,
              backgroundGradientTo: color.white,
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: color.white,
  },
  title: {
    fontSize: 18,
    fontFamily: DoridFonts.regular,
    textAlign: 'right',
  },
  wrapContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  descriptionContainer: {
    marginTop: 20,
  },
  textCon: {
    textAlign: 'right',
    fontFamily: DoridFonts.regular,
    fontSize: 14,
  },
  regularText: {textAlign: 'right', color: color.mainGray, marginTop: 10},
  tabButton: {
    width: 140,
    marginLeft: 10,
    borderRadius: 30,
    borderColor: color.primary,
  },
});
