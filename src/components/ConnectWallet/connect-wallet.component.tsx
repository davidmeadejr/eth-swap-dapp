import React, { useState } from "react";
import "./connect-wallet.component.scss";
import { ethers, providers, Wallet } from "ethers";

declare let window: any;

const ConnectWallet = () => {
  // Error message setup
  const [errorMessage, setErrorMessage] = useState("");

  // Metamask account setup
  const [defaultAccount, setDefaultAccount] = useState("");

  const [userBalance, setUserBalance] = useState("");

  // Connect button text which is dynamically rendered
  const [connectedButtonText, setConnectedButtonText] =
    useState("Connect Wallet");

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result: any[]) => {
          accountChangedHandler(result[0]);
          setConnectedButtonText("");
        });
      let showPubKey = (document.getElementById(
        "accountDetailsContainer"
      )!.style.display = "block");
      return showPubKey;
    } else {
      setErrorMessage("Please install Metamask 🦊");
    }
  };

  const accountChangedHandler = (newAccount: React.SetStateAction<string>) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount);
  };

  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };

  const showPublicKey = () => {
    let publicKey = defaultAccount;

    let startOfPublicKey = publicKey.slice(0, 4);
    startOfPublicKey += "...";
    let endOfPublicKey = publicKey.slice(-3);

    let formatPublicKey = startOfPublicKey.concat(endOfPublicKey);

    return formatPublicKey;
  };

  return (
    <div>
      <button className="connect-wallet-button" onClick={connectWalletHandler}>
        <span>{[connectedButtonText]}</span>
        <div id="accountDetailsContainer">
          <div className="account-details">
            <div id="balanceDisplay">{userBalance}</div>
            <span>{showPublicKey()}</span>
          </div>
        </div>
      </button>
      {errorMessage}
    </div>
  );
};

export default ConnectWallet;
