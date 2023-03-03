import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {color} from '../utils/theme';
const MyBezierLineChart = () => {
  const data = {
    labels: ['50', '25', '20', '10', '5'],
    datasets: [
      {
        data: [0, 0, 0, 0],
      },
      {
        data: [2.5, 1.0, 0.3, 0.2],
      },
    ],
  };
  return (
    <>
      <LineChart
        data={data}
        width={Dimensions.get('window').width} // from react-native
        height={300}
        // yAxisLabel={'Rs'}
        xAxisLabel={`سنوات`}
        transparent
        chartConfig={{
          backgroundColor: color.white,
          backgroundGradientFrom: color.white,
          backgroundGradientTo: color.white,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
            backgroundColor: 'transparent',
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
          backgroundColor: 'transparent',
        }}
      />
    </>
  );
};
export default MyBezierLineChart;
