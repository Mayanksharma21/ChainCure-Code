import React, { useEffect } from "react";
import { connectWallet } from "../utils/connectWallet.js";
import { useWeb3Contexst } from "../contexts/useWeb3context.jsx";
import { useNavigate } from "react-router-dom";

const Wallet = () => {
  const navigateTo = useNavigate();
  const { updateWeb3State, web3State } = useWeb3Contexst();
  const { selectedAccount } = web3State;

  useEffect(() => {
    if (selectedAccount) {
      navigateTo("/home");
    }
  }, [selectedAccount, navigateTo]);

  const handleWalletConnection = async () => {
    const {
      selectedAccount,
      batchCreationContractInstance,
      batchHandoberToLogisticsContractInstance,
    } = await connectWallet();
    updateWeb3State({
      selectedAccount,
      batchCreationContractInstance,
      batchHandoberToLogisticsContractInstance,
    });
  };

  return <button onClick={handleWalletConnection}>Connect Wallet</button>;
};

export default Wallet;
