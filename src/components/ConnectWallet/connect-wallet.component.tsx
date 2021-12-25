import React, { useState } from "react";
import "./connect-wallet.component.scss";
import { ethers, providers, Wallet } from "ethers";

// Global declaration which enables the window.ethereum global API to be used
declare global {
  interface Window {
    ethereum: any;
  }
}

const ConnectWallet = () => {
  /*
   * Declares a new state variable, which is called defaultAccount to handle the state of gaining access the users ETH account.
   * Declares a new state variable, which is called userBalance to handle the state of accessing the current ETH balance from the users account.
   * Declares a new state variable, which is called connectedButtonText to handle the state of the connect wallet button.
   */
  const [defaultAccount, setDefaultAccount] = useState("");
  const [userBalance, setUserBalance] = useState("");
  const [connectedButtonText, setConnectedButtonText] =
    useState("Connect Wallet");

  /*
   * When the user clicks on the connect wallet button connectWalletHandler
   * checks if the metamask global api window.ethereum is connected
   * if connected to metamask it then requests access to the users ETH account
   * where if the users grants permission
   * it will now render the users current ETH balance and public key
   * if the user rejects permission and alert box appears and error is logged in the console
   */
  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result: string[]) => {
          accountChangedHandler(result[0]);
          setConnectedButtonText("");
          let showPubKey = (document.getElementById(
            "accountDetailsContainer"
          )!.style.display = "block");
          return showPubKey;
        })
        .catch((error: { code: number }) => {
          if (error.code === 4001) {
            alert("Please install Metamask 🦊");
          }
        });
    } else {
      console.error(Error);
    }
  };

  /*
   * Updates the state variable defaultAccount with the connected users ETH account
   * Updates the state variable userBalance with the users current ETH balance
   * Enables the values for each state to be accessed by calling accountChangedHandler
   */
  const accountChangedHandler = (newAccount: React.SetStateAction<string>) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount);
  };

  /*
   * Injects the metamask global api window.ethereum to access the users ETH account
   * then it requests the users address to check for balance
   * where it then formats the balance from wei to ether
   * then assigns the formatted balance to the variable getUserBalance.
   */
  const getUserBalance = (address: React.SetStateAction<string>) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance: ethers.BigNumberish) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };

  /*
   *  Returns a formatted version of the users public key address by getting the first 4 and last 3 characters
   *  while adding an ellipses in-between
   *  then assigns the newly formatted public key as a new string which can be accessed by calling showPublicKey.
   */
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
            <div id="balanceDisplay">{userBalance + " ETH"}</div>
            <span>{showPublicKey()}</span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ConnectWallet;
