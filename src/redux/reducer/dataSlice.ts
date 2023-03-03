import {StaticData, barChartData} from './../../utils/constants';
import {createSlice} from '@reduxjs/toolkit';
import {GraphData} from '../../utils/constants';

const initialState = {
  graphData: GraphData,
  staticData: StaticData,
  barChartData: barChartData,
};
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
});

export default dataSlice.reducer;
