import React from "react";
import { useMoralis } from "react-moralis";
import Address from "./Address/Address";
import Chains from "./Chains/Chains"
import "../css/address.css"


const Web3 = require("web3");
const providerIsNew = "https://floral-billowing-glade.bsc.quiknode.pro/29ea12cb502ef5492fc8c5800415e29b801c933b/"
// const providerIsNew = "http://localhost:7545"
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
