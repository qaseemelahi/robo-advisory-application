import * as React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Chart, Area, Line} from 'react-native-responsive-linechart';
import {color} from '../utils/theme';

interface iProps {
  width: number;
  height: number;
  from: string;
  to: string;
}

const LineChart: React.FC<iProps> = ({width, height, from, to}) => {
  return (
    <View style={styles.container}>
      <Chart
        style={{
          height: height ? height : 140,
          width: width ? width : Dimensions.get('window').width - 40,
        }}
        data={[
          {x: -2, y: 15},
          {x: -1, y: 10},
          {x: 0, y: 12},
          {x: 1, y: 7},
          {x: 2, y: 6},
          {x: 3, y: 3},
          {x: 4, y: 5},
          {x: 5, y: 8},
          {x: 6, y: 12},
          {x: 7, y: 14},
          {x: 8, y: 12},
          {x: 9, y: 13.5},
          {x: 10, y: 18},
        ]}
        padding={{left: 0, bottom: 20, right: 0, top: 0}}
        xDomain={{min: -2, max: 10}}
        yDomain={{min: -4, max: 15}}>
        <Area
          theme={{
            gradient: {
              from: {color: from ? from : color.graphColor2},
              to: {color: to ? to : color.graphColor2, opacity: 0.2},
            },
          }}
        />
        {/* <Line
          initialTooltipIndex={3}
          hideTooltipOnDragEnd
          smoothing="bezier"
          theme={{
            stroke: {color: color.graphColor2, width: 5},
            scatter: {
              default: {width: 8, height: 8, rx: 4, color: color.graphColor2},
              selected: {color: color.black},
            },
          }}
        /> */}
      </Chart>
    </View>
  );
};

export default LineChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
