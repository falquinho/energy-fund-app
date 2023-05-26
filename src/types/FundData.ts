import { FundMomentValue } from "./FundMomentValue"

export type FundData = {
  code: string,
  display_name: string,
  aum: number,
  issued_at: string,
  vintage_start: number,
  vintage_end: number,
  ter: number,
  open_value: number,
  close_value: number,
  history: Array<FundMomentValue>
}