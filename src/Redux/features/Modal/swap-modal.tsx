import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SwapModalState {
  value: {
    id: "claimModal";
  };
}

const initialState: SwapModalState = {
  value: {
    id: "claimModal",
  },
};

export const swapModal = createSlice({
  name: "showSwapModal",
  initialState,
  reducers: {
    showSwapModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default swapModal.reducer;
