import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import "./index.css";
import { MoralisDappProvider } from "./providers/MoralisDappProvider/MoralisDappProvider";

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;


ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={"0IW369tYfkX5QU81PHwOrI76NJIIoVfpG1q8Oe3M"} serverUrl={"https://46lrdbnqnpyu.usemoralis.com:2053/server"}>
      <MoralisDappProvider>
        <App />
      </MoralisDappProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
