import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ApproveState {
  value: {
    id: "swap";
  };
}

const initialState: ApproveState = {
  value: {
    id: "swap",
  },
};

export const approveSlice = createSlice({
  name: "approve",
  initialState,
  reducers: {
    showApproveState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default approveSlice.reducer;
