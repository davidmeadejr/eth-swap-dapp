import { configureStore } from "@reduxjs/toolkit";

/*
 * The approveReducer handles the approve swap state within the swap modal.
 * The confirmSwapReducer handles the confirm swap state within the swap modal.
 * The completedSwapReducer handles the completed swap state within the swap modal.
 * The showSwapModal handles the state of the modal when the user has clicked the swap button.
 * The showClaimModal handles the state of the modal when the user has clicked the swap button.
 */
import approveReducer from "./features/swap/approve-swap";
import confirmSwapReducer from "./features/swap/confirm-swap";
import completedSwapReducer from "./features/swap/completed-swap";
import showSwapModal from "./features/Modal/swap-modal";
import showClaimModal from "./features/Modal/claim-modal";

// Enables global access to the reducers throughout the app.
export const store = configureStore({
  reducer: {
    approve: approveReducer,
    confirm: confirmSwapReducer,
    completed: completedSwapReducer,
    swapModal: showSwapModal,
    claimModal: showClaimModal,
  },
});
