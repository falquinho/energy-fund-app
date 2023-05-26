import { UserFund } from "./UserFund"

export type UserData = {
  id: number,
  email: string,
  total_balance: number,
  variation: number,
  user_portfolios: Array<UserFund>
}