import { UserFund } from "./UserFund"

export type UserData = {
  total_balance: number,
  variation: number,
  user_portfolios: Array<UserFund>
}