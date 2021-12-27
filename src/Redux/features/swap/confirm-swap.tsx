import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ConfirmSwapState {
  value: {
    id: "approve";
  };
}

const initialState: ConfirmSwapState = {
  value: {
    id: "approve",
  },
};

export const confirmSwapSlice = createSlice({
  name: "confirmSwap",
  initialState,
  reducers: {
    showConfirmSwapState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default confirmSwapSlice.reducer;
