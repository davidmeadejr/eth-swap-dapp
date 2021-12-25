import React from "react";
import "./page-header.component.scss";
import ClaimButton from "../ClaimButton/claim-button.component";
import SwapButton from "../SwapButton/swap-button.component";
import ConnectWallet from "../ConnectWallet/connect-wallet.component";

const PageHeader = () => {
  return (
    <div className="container">
      <div className="cloudswap-logo">
        <img src="/images/cloudswap-logo.png" alt="Cloudswap Logo" />
      </div>
      <div className="swap-claim-toggle">
        <SwapButton />
        <ClaimButton />
      </div>
      <ConnectWallet />
    </div>
  );
};

export default PageHeader;
