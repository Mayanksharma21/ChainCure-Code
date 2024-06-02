import { ethers } from "ethers";
import batchCreationContractABI from "../constants/batchCreationContractABI.json";
import batchhandoverToLogisticsContractABI from "../constants/batchhandoverToLogisticsContractABI.json";
import toast from "react-hot-toast";
import axios from "axios";

export const connectWallet = async () => {
  try {
    if (!window.ethereum) {
      throw new Error("Metamask is not installed");
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const selectedAccount = accounts[0];

    const provider = new ethers.BrowserProvider(window.ethereum);

    const signer = await provider.getSigner();

    const message =
      "Sign to authenticate on Pharmacuetical Supply Chain System";
    const signature = await signer.signMessage(message);

    const url = `http://localhost:8000/api/authentication?address=${selectedAccount}`;
    const data = {
      signature,
    };
    const res = await axios.post(url, data);
    console.log(res.data);
    const batchCreationContractAddress =
      "0xB9bE6ED93433559D17f77d7994ABA5C31216aaEb";

    const batchCreationContractInstance = new ethers.Contract(
      batchCreationContractAddress,
      batchCreationContractABI,
      signer
    );

    const batchHandoverToLogisticsAddress =
      "0x6180a2980ce0df437d61356e0cb2acda8113b296";

    const batchHandoberToLogisticsContractInstance = new ethers.Contract(
      batchHandoverToLogisticsAddress,
      batchhandoverToLogisticsContractABI,
      signer
    );

    return {
      selectedAccount,
      batchCreationContractInstance,
      batchHandoberToLogisticsContractInstance,
    };
  } catch (error) {
    toast.error(`Wallet Connetion Failed`);
    console.log(error);
  }
};
