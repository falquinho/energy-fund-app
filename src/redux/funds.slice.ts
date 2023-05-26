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
import { FundInfo } from "../types/FundInfo";



export interface FundsState {
  funds: Array<FundData>,
}

const initialState = {
  funds: [
    windFund,
    solarFund,
    natureFund,
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
    const threshold = Date.now() - mapIntervalToMilis.d
    const graphPoints = graphDataFromFundHistory(fund.history, threshold);
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
 * @returns Graph data from selected Fund limited to interval set by the user.
 */
export const selectFundGraphData = (state: ReduxState): Array<GraphPoint> => {
  const fund = selectSelectedFundData(state);

  const history = fund?.history || [];

  const selectedInterval = selectGraphInterval(state);
    
  const threshold = selectedInterval !== 'all'
    ? Date.now() - mapIntervalToMilis[selectedInterval]
    : 0
  ;

  return graphDataFromFundHistory(history, threshold);
}


export const selectCurrentFundInfo = (state: ReduxState): FundInfo | undefined => {
  const currFund = selectSelectedFundData(state);
  
  if (!currFund)
    return undefined;

  return ({
    aum: currFund.aum,
    close_value: currFund.close_value,
    code: currFund.code,
    display_name: currFund.display_name,
    issued_at: currFund.issued_at,
    open_value: currFund.open_value,
    ter: currFund.ter,
    vintage_end: currFund.vintage_end,
    vintage_start: currFund.vintage_start,
  })  
} 


const A_HOUR = 1000 * 60 * 60;

// Values in milliseconds
const mapIntervalToMilis = {
  h: A_HOUR,
  d: A_HOUR * 24,
  w: A_HOUR * 24 * 7,
  m: A_HOUR * 24 * 30,
  y: A_HOUR * 24 * 365,
  all: 0,
}