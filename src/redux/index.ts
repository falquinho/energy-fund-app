import { configureStore } from "@reduxjs/toolkit";
import { assetScreenReducer } from "../screens/asset_details/redux";
import { fundsReducer } from "./funds.slice";
import { usersReducer } from "./users.slice";

const reduxStore = configureStore({
  reducer: {
    assetScreen: assetScreenReducer,
    funds: fundsReducer,
    users: usersReducer,
  }
});

export default reduxStore;

export type ReduxState = ReturnType<typeof reduxStore.getState>;

export type AppDispatch = typeof reduxStore.dispatch;