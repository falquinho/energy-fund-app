import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from ".";
import { natureFund } from "../mock/natureFund";
import { solarFund } from "../mock/solarFund";
import { windFund } from "../mock/windFund";
import { selectGraphInterval, selectSelectedFundCode } from "../screens/asset_details/redux";
import { FundData } from "../types/FundData";
import { GraphPoint } from "react-native-graph";
import { graphDataFromFundHistory, graphDataIntervalVariation } from "../utils/graphUtils";
import { FundPreviewData } from "../types/FundPreviewData";
import { limitDecimals } from "../utils/mathUtils";



export interface FundsState {
  funds: Array<FundData>,
}

const initialState = {
  funds: [
    natureFund,
    solarFund,
    windFund,
  ]
} as FundsState;



const fundsSlice = createSlice({
  name: 'funds',
  initialState,
  reducers: {

  },
});

export const fundsReducer = fundsSlice.reducer;



export const selectAvailableFundsPreview = (state: ReduxState): Array<FundPreviewData> => {
  return state.funds.funds.map(fund => {
    const graphPoints = selectFundPreviewGraphData(state);
    const latestValue = limitDecimals(graphPoints[graphPoints.length - 1].value);
    const previewDataVariation = graphDataIntervalVariation(graphPoints);

    return ({
      code: fund.code,
      name: fund.display_name,
      graphPoints,
      previewDataVariation,
      latestValue,
    });
  });
}

/**
 * @param state 
 * @returns Fund data of the current selected Fund.
 */
export const selectSelectedFundData = (state: ReduxState) => {
  const selectedCode = selectSelectedFundCode(state);
  const { funds } = state.funds;
  return funds.find(fund => fund.code == selectedCode);
}


/**
 * @param state 
 * @returns Graph data from last day of current selected Fund.
 */
export const selectFundPreviewGraphData = (state: ReduxState) => {
  const fund = selectSelectedFundData(state);
  const history = fund?.history || [];

  const threshold = Date.now() - mapIntervalToThreshold.d;

  return graphDataFromFundHistory(history, threshold)
}


/**
 * @param state 
 * @returns Graph data from selected Fund limited to interval set by the user.
 */
export const selectFundGraphData = (state: ReduxState): Array<GraphPoint> => {
  const fund = selectSelectedFundData(state);

  const history = fund?.history || [];

  const selectedInterval = selectGraphInterval(state);
    
  const threshold = selectedInterval !== 'all'
    ? Date.now() - mapIntervalToThreshold[selectedInterval]
    : 0
  ;

  return graphDataFromFundHistory(history, threshold);
}


const A_HOUR = 1000 * 60 * 60;

// Values in milliseconds
const mapIntervalToThreshold = {
  h: A_HOUR,
  d: A_HOUR * 24,
  w: A_HOUR * 24 * 7,
  m: A_HOUR * 24 * 30,
  y: A_HOUR * 24 * 365,
  all: 0,
}