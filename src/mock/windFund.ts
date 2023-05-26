import { FundData } from "../types/FundData";
import { randomFundMomentValueArray } from "./generators";

export const windFund: FundData = {
  code: 'WFND',
  display_name: "Wind Fund",
  aum: 2.05,
  close_value: 21.59,
  issued_at: "2022-07-25T05:53:07Z",
  open_value: 7.06,
  ter: 14.54,
  vintage_end: 2023,
  vintage_start: 2010,
  history: randomFundMomentValueArray(2400),
}