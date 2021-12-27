import React, { Fragment, useState } from "react";
import "./swap-claim-toggle.component.scss";
import SwapModal from "../SwapModal/swap-modal.component";
import ClaimModal from "../ClaimModal/claim-modal.component";

const SwapClaimToggle = () => {
  /*
   * Declares a new state variable called tabName to handle the modal state toggle functionality.
   * Declares a new state variable called claimButtonColorToggle to handle the claim button color toggle state.
   * Declares a new state variable called swapButtonColorToggle to handle the swap button color toggle state.
   */
  const [tabName, setTabName] = useState("swap");
  const [claimButtonColorToggle, setClaimButtonColorToggle] =
    useState("#0ed4ff");
  const [swapButtonColorToggle, setSwapButtonColorToggle] = useState("#e6f7ff");

  return (
    <Fragment>
      <div className="swap-claim-toggle-container">
        <div className="swap-claim-toggle">
          <button
            style={{
              background: swapButtonColorToggle,
            }}
            className="swap-button"
            onClick={() => {
              setTabName("swap");
              setClaimButtonColorToggle("#0ed4ff");
              setSwapButtonColorToggle("#e6f7ff");
            }}
          >
            Swap
          </button>
          <button
            className="claim-button"
            style={{
              background: claimButtonColorToggle,
            }}
            onClick={() => {
              setTabName("claim");
              setClaimButtonColorToggle("#e6f7ff");
              setSwapButtonColorToggle("#0ed4ff");
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
