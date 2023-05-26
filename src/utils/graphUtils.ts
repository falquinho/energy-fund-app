import { GraphPoint } from "react-native-graph";
import { FundData } from "../types/FundData";
import { FundMomentValue } from "../types/FundMomentValue";
import { deltaPercentage, limitDecimals } from "./mathUtils";



/**
 * Convert Fund data points to GraphPoint
 * @param history Original Fund's data points.
 * @param threshold Unix timestamp. If given ignore points older than it.
 * @returns 
 */
export const graphDataFromFundHistory = (history: Array<FundMomentValue>, threshold?: number): Array<GraphPoint> => {
  let slice = history;

  if (!!threshold) {
    let sliceIndex = 0;
    for(let i = history.length - 1; i >= 0; i--) {
      if (new Date(history[i].timestamp).getTime() < threshold) {
        sliceIndex = i + 1;
        break;
      }
    }
    slice = history.slice(sliceIndex);
  }

  return slice.map(({timestamp, value}): GraphPoint => ({
    date: new Date(timestamp),
    value,
  }))
}


/**
 * @param graphData
 * @returns Value delta of the given array of values. Assumes newest at end of array.
 */
export const graphDataIntervalDelta = (graphData: Array<GraphPoint>): number => {
  return graphData.length > 0
    ? limitDecimals(graphData[graphData.length - 1].value - graphData[0].value)
    : 0
  ;
}


/**
 * @param graphData
 * @returns Percentage of change in the given array of values. Can be negative.
 */
export const graphDataIntervalVariation = (graphData: Array<GraphPoint>): number => {
  return graphData.length > 0
    ? limitDecimals(deltaPercentage(graphData[0].value, graphData[graphData.length - 1].value))
    : 0
  ;
}