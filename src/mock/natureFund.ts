import { FundData } from "../types/FundData";
import { randomFundMomentValueArray } from "./generators";

export const natureFund: FundData = {
  code: 'NFND',
  display_name: "Nature Fund",
  aum: 26.32,
  close_value: 40.71,
  issued_at: "2022-07-28T01:13:09Z",
  open_value: 65.69,
  ter: 3.68,
  vintage_end: 2023,
  vintage_start: 2010,
  history: randomFundMomentValueArray(5000),
}