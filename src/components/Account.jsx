import React from "react";
import { useMoralis } from "react-moralis";
import Address from "./Address/Address";
import Chains from "./Chains/Chains"


const styles = {
  account: {
    height: "42px",
    gap: "5px",
    width: "fit-content",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "700",
    fontSize: "16px",
    color: "white",
    backgroundColor: "#041836",
    cursor: "pointer",
  },
  wrapper: { padding: "0 3px 0 10px" },
};


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
      <div style={styles.account}>
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
    <div style={{ ...styles.account, ...styles.wrapper }} onClick={() => logout()}>

      <Address avatar size="5" /><Chains bsc />
    </div>
  );
}

export default Account;
