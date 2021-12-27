import React, { Fragment, useState } from "react";
import "./swap-modal.component.scss";
import { Listbox, ListboxOption } from "@reach/listbox";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";

/*
 * Changes the border colour on the account text field in the from section.
 */
const CssTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor",
})((p: any) => ({
  // input label when focused
  "& label.Mui-focused": {
    color: p.focusColor,
  },
  // focused color for input with variant='standard'
  "& .MuiInput-underline:after": {
    borderBottomColor: p.focusColor,
  },
  // focused color for input with variant='filled'
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: p.focusColor,
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: p.focusColor,
    },
  },
}));

const SwapModal = () => {
  /*
   * Declares a new state variable called fromCoinState to handle the dropdown state in the "from" section.
   * Declares a new state variable called toCoinState to handle the dropdown state in the "to" section.
   * Declares a new state variable called swapButtonState which handles the swap, approve and confirm button states.
   */
  const [fromCoinState, setFromCoinState] = useState("");
  const [toCoinState, setToCoinState] = useState("");
  const [swapButtonState, setSwapButtonState] = useState("SWAP");

  /*
   * In the initial swap state when the user clicks on the SWAP button
   * useState swapButtonState equals "APPROVE"
   * then hideSwapButton is called
   * which hides the swap button.
   */
  const hideSwapButton = () => {
    return (document.getElementById("ctaSwapButton")!.style.visibility =
      "hidden");
  };

  /*
   * In approve state when the user clicks on the APPROVE button
   * useState swapButtonState equals "CONFIRM"
   * then hideApproveButton is called
   * which hides the approve button.
   */
  const hideApproveButton = () => {
    return (document.getElementById("ctaApproveButton")!.style.visibility =
      "hidden");
  };

  /*
   * In approve state when the user clicks on the APPROVE button
   * useState swapButtonState equals "CONFIRM"
   * then expandModalContainer is called
   * which increases the height of the modal container on the swap tab.
   */
  const expandModalContainer = () => {
    return (document.getElementById("swapModalContainer")!.style.height =
      "580px");
  };

  return (
    <div id="swapModalContainer">
      <div className="swap-title">Swap</div>
      <div className="from-border-container">
        <div className="from-content">
          <div className="from-title">FROM</div>
          <div className="from-dropdown-container">
            <Listbox
              className="from-dropdown"
              defaultValue=""
              onChange={(ListboxOptionProps) => {
                const fromCoinState = ListboxOptionProps;
                setFromCoinState(fromCoinState);
              }}
            >
              <ListboxOption value="WETH">WETH</ListboxOption>
              <ListboxOption value="DAI">DAI</ListboxOption>
              <ListboxOption value="BAT">BAT</ListboxOption>
              <ListboxOption value="USDC">USDC</ListboxOption>
              <ListboxOption value="UNI">UNI</ListboxOption>
            </Listbox>
            <div>
              <CssTextField label="account" focusColor="rgb(145, 213, 255)" />
            </div>
          </div>
          <div className="balance-field"> Balance: ETH {fromCoinState}</div>
        </div>
      </div>
      <div className="to-border-container">
        <div className="to-content">
          <div className="to-title">TO</div>
          <div className="to-dropdown-container">
            <Listbox
              className="to-dropdown"
              defaultValue=""
              onChange={(ListboxOptionProps) => {
                const toCoinState = ListboxOptionProps;
                setToCoinState(toCoinState);
              }}
            >
              <ListboxOption value="WETH">WETH</ListboxOption>
              <ListboxOption value="DAI">DAI</ListboxOption>
              <ListboxOption value="BAT">BAT</ListboxOption>
              <ListboxOption value="USDC">USDC</ListboxOption>
              <ListboxOption value="UNI">UNI</ListboxOption>
            </Listbox>
          </div>
        </div>
      </div>
      <div className="token-pair">
        1 {fromCoinState} = {toCoinState}
      </div>
      <div>
        {swapButtonState === "APPROVE" && hideSwapButton() && (
          <Fragment>
            <div className="swap-info-container">
              <div className="swap-info-list">
                <ul className="liquidity-provider">
                  <li>Liquidity Provider Fee</li>
                  <li>0.003 ETH</li>
                </ul>
                <div>
                  <ul>
                    <li>Route</li>
                    <li>ETH -{">"} USDC</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>Price Impact</li>
                    <li>-0.004%</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>Minimum Received</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>Slippage Tolerance</li>
                    <li>0.50%</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  setSwapButtonState("CONFIRM");
                }}
                id="ctaApproveButton"
              >
                APPROVE
              </button>
            </div>
          </Fragment>
        )}
      </div>
      <div>
        {swapButtonState === "CONFIRM" &&
          hideApproveButton() &&
          expandModalContainer() && (
            <Fragment>
              <div>
                <div className="swap-info-container">
                  <div className="swap-info-list">
                    <ul className="liquidity-provider">
                      <li>Liquidity Provider Fee</li>
                      <li>0.003 ETH</li>
                    </ul>
                    <div>
                      <ul>
                        <li>Route</li>
                        <li>ETH -{">"} USDC</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>Price Impact</li>
                        <li>-0.004%</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>Minimum Received</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>Slippage Tolerance</li>
                        <li>0.50%</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <button id="ctaConfirmButton">CONFIRM SWAP</button>
            </Fragment>
          )}
      </div>
      <button
        onClick={() => {
          setSwapButtonState("APPROVE");
        }}
        id="ctaSwapButton"
      >
        SWAP
      </button>
    </div>
  );
};

export default SwapModal;
