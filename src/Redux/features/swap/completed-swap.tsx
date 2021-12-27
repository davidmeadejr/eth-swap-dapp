import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompletedSwapState {
  value: {
    id: "confirmSwap";
  };
}

const initialState: CompletedSwapState = {
  value: {
    id: "confirmSwap",
  },
};

export const completedSwapSlice = createSlice({
  name: "completeSwap",
  initialState,
  reducers: {
    showCompletedSwapState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default completedSwapSlice.reducer;
