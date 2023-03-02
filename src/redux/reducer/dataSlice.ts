import { createSlice } from "@reduxjs/toolkit";
import { GraphData } from "../../utils/constants";

const initialState = {
    graphData : GraphData
}
 const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {}
})
export default dataSlice.reducer