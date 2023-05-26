import { FundData } from "../types/FundData";
import { randomFundMomentValueArray } from "./generators";

export const solarFund: FundData = {
  code: 'SFND',
  display_name: "Solar Fund",
  aum: 77.37,
  close_value: 29.59,
  issued_at: "2022-07-22T08:57:11Z",
  open_value: 23.59,
  ter: 15.8,
  vintage_end: 2023,
  vintage_start: 2010,
  history: randomFundMomentValueArray(1800)
}