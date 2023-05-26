import { FundMomentValue } from "../types/FundMomentValue";


// each data point will be 30 minutes from each other
const AN_HOUR = 1000 * 60 * 60;


/**
 * Generate mock data in ascending date order.
 * @param num Number of points of data to generate
 * @returns 
 */
export const randomFundMomentValueArray = (num: number): Array<FundMomentValue> => {
  let time = Date.now() - (num * AN_HOUR);
  let data: Array<FundMomentValue> = [];
  
  for (let i = 0; i < num; i++) {
    time += AN_HOUR;
    data.push({
      timestamp: new Date(time).toISOString(),
      value: Math.random() * 50,
    });
  }

  return data;
}