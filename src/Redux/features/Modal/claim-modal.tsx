import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ClaimModalState {
  value: {
    id: "swapModal";
  };
}

const initialState: ClaimModalState = {
  value: {
    id: "swapModal",
  },
};

export const claimModal = createSlice({
  name: "showClaimModal",
  initialState,
  reducers: {
    showClaimModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default claimModal.reducer;
