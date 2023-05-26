import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../../redux";



export interface AssetScreenReduxState {
  graphInterval: 'h' | 'd' | 'w' | 'm' | 'y' | 'all',
  selectedFund: string, // the fund code,
}

const initialState = {
  graphInterval: 'all',
  selectedFund: 'NFND',
} as AssetScreenReduxState;



export const assetScreenSlice = createSlice({
  name: "assetScreen",
  initialState,
  reducers: {
    setGraphInterval: (
      state, 
      action: PayloadAction<AssetScreenReduxState['graphInterval']>
    ) => {
      state.graphInterval = action.payload;
    },
    setSelectedFund: (state, action: PayloadAction<string>) => {
      state.selectedFund = action.payload;
    },
  }
});



export const assetScreenReducer = assetScreenSlice.reducer;

export const {
  setGraphInterval,
  setSelectedFund,
} = assetScreenSlice.actions;



export const selectGraphInterval = (state: ReduxState) => (
  state.assetScreen.graphInterval
);

export const selectSelectedFundCode = (state: ReduxState) => (
  state.assetScreen.selectedFund
);

