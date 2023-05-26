import { UserData } from "../types/UserData";

const mockUserA: UserData = {
  id: 1, 
  email: 'jon@doe.com',
  total_balance: 94721.1,
  variation: 43,
  user_portfolios: [
    {
      fund_code: "NFND",
      credits: 450.2,
      value: 19016.61,
      variation: -99.85,
      created_at: "2023-03-07T13:17:29Z",
      updated_at: "2022-11-24T13:35:29Z"
    }
  ]
} 

const mockUserB: UserData = {
  id: 2, 
  email: 'mary@sue.com',
  total_balance: 71322,
  variation: 12,
  user_portfolios: [
    {
      fund_code: "SFND",
      credits: 524.22,
      value: 34055.2,
      variation: 3.14,
      created_at: "2023-04-20T00:19:06Z",
      updated_at: "2022-09-21T22:38:07Z"
    }
  ]
} 

const mockUserC: UserData = {
  id: 2, 
  email: 'fulano@tal.com',
  total_balance: 3125554,
  variation: 34,
  user_portfolios: [
    {
      fund_code: "WFND",
      credits: 444.62,
      value: 92142.95,
      variation: -72.1,
      created_at: "2022-06-14T09:54:57Z",
      updated_at: "2022-09-06T20:52:03Z"
    }
  ]
} 

export const mockUsers = [
  mockUserA,
  mockUserB,
  mockUserC,
]