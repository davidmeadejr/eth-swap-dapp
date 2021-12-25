import React, { Fragment, useState } from "react";
import "./swap-claim-toggle.component.scss";
import SwapModal from "../SwapModal/swap-modal.component";
import ClaimModal from "../ClaimModal/claim-modal.component";

const SwapClaimToggle = () => {
  /*
   * Declares a new state variable called tabName to handle the modal state toggle functionality.
   * Declares a new state variable called claimButtonColorOn to handle the claim button color toggle state.
   * Declares a new state variable called swapButtonColorOff to handle the swap button color toggle state.
   */
  const [tabName, setTabName] = useState("swap");
  const [claimButtonColorOn, setClaimButtonColorOn] = useState("#0ed4ff");
  const [swapButtonColorOff, setSwapButtonColorOff] = useState("#e6f7ff");

  return (
    <Fragment>
      <div className="swap-claim-toggle-container">
        <div className="swap-claim-toggle">
          <button
            style={{
              background: swapButtonColorOff,
            }}
            className="swap-button"
            onClick={() => {
              setTabName("swap");
              setClaimButtonColorOn("#0ed4ff");
              setSwapButtonColorOff("#e6f7ff");
            }}
          >
            Swap
          </button>
          <button
            className="claim-button"
            style={{
              background: claimButtonColorOn,
            }}
            onClick={() => {
              setTabName("claim");
              setClaimButtonColorOn("#e6f7ff");
              setSwapButtonColorOff("#0ed4ff");
            }}
          >
            Claim
          </button>
        </div>
        <div>{tabName === "swap" && <SwapModal />}</div>
        <div>{tabName === "claim" && <ClaimModal />}</div>
      </div>
    </Fragment>
  );
};

export default SwapClaimToggle;
