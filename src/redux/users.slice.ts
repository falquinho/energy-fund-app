import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserData } from "../types/UserData";
import { ReduxState } from ".";
import { UserFund } from "../types/UserFund";
import { selectCurrentFundInfo } from "./funds.slice";

export interface UsersState {
  user: UserData | undefined,
}

const initialState = {
  user: undefined,
} as UsersState;



const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload
    },
    clearUserData: (state) => {
      state.user = undefined;
    },
  }
});

export const usersReducer = usersSlice.reducer;

export const {
  setUser,
  clearUserData,
} = usersSlice.actions;



export const selectUserData = (state: ReduxState) => (
  state.users.user
);

export const selectCurrentFundUserPortfolio = (state: ReduxState): UserFund | undefined => {
  const currFundInfo = selectCurrentFundInfo(state);
  if (!currFundInfo)
    return undefined;

  const user = selectUserData(state);
  if (!user)
    return undefined;

  return user.user_portfolios.find(portfolio => portfolio.fund_code === currFundInfo.code);
}