import React, { Fragment } from "react";
import "./page-header.component.scss";
import SwapClaimToggle from "../SwapClaimToggle/swap-claim-toggle.component";
import ConnectWallet from "../ConnectWallet/connect-wallet.component";

const PageHeader = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="cloudswap-logo">
          <img src="/images/cloudswap-logo.png" alt="Cloudswap Logo" />
        </div>
        <ConnectWallet />
      </div>
      <SwapClaimToggle />
    </Fragment>
  );
};

export default PageHeader;
