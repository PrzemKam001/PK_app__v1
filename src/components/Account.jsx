import React from "react";
import { useMoralis } from "react-moralis";
import Address from "./Address/Address";
import Chains from "./Chains/Chains"
import "../css/address.css"


const Web3 = require("web3");
const providerIsNew = "https://fragrant-snowy-dust.bsc.quiknode.pro/7734e3aae2d98d757423c41d05ead6d4fb4eab4c/"
const Web3Client = new Web3(new Web3.providers.HttpProvider(providerIsNew));            //provider by QuickNode


const minABI = [
  // construct of balance
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function",
  },
];




function Account() {
  const { authenticate, isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) {

    return (
      <div className="account">
        <p
          onClick={() => authenticate({ signingMessage: "Hello World!" })}
          style={{ padding: "0 10px" }}
        >
          Authenticate
        </p>
      </div>
    );
  }

  return (
    <div className="account wrapper" onClick={() => logout()}>

      <Address avatar size="5" />
    </div>
  );
}

export default Account;
