import React, { useState, useEffect } from "react";
import { useMoralisDapp } from "../../providers/MoralisDappProvider/MoralisDappProvider";
import { getEllipsisTxt } from "../../utils/formatters";


const Web3 = require("web3");
const providerIsNew = "https://fragrant-snowy-dust.bsc.quiknode.pro/7734e3aae2d98d757423c41d05ead6d4fb4eab4c/"
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

function Address(props) {
  const { walletAddress } = useMoralisDapp();
  const [address, setAddress] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [userBalance, setUserBalance] = useState("0,00");



  useEffect(() => {
    setAddress(walletAddress);

    const tokenAddress = "0xb6d48fcef36e19681ee29896b19c1b6cbd1eab1b";
    const contract = new Web3Client.eth.Contract(minABI, tokenAddress);

    async function getBalanceOf() {
      const result = await contract.methods.balanceOf(walletAddress).call(); // importing value;
      const format = Web3Client.utils.fromWei(result); // 18 decimals according to contract
      const num = parseFloat(format);
      const rounded = num.toFixed(2);    // changing value to 2 numbers;


      Web3Client.eth.getBalance(walletAddress, (err, bal) => {    /// setting ballance as promise
        setUserBalance(rounded);


      })

      function calculate() {
        var num = parseFloat(format);
        var rounded = num.toFixed(2);

        return rounded;
      }

      calculate();
    }


    const wellbal = getBalanceOf();

  }, [walletAddress]);

  if (!address) return null;

  const Copy = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#1780FF"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ cursor: "pointer" }}
      onClick={() => {
        navigator.clipboard.writeText(address);
        setIsClicked(true);
      }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 3v4a1 1 0 0 0 1 1h4" />
      <path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z" />
      <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
      <title id="copy-address">Copy Address</title>
    </svg>
  );

  return (
      <>
    <div className="address__inside">
      {props.avatar}
      <p>{props.size ? getEllipsisTxt(address, props.size) : address}</p>
      {props.copyable && (isClicked ? <Check /> : <Copy />)}
      <div className='balanceDisplay'>
        <h3>Balance: <span className="header__balance">{userBalance}</span> FAN</h3>
      </div>
    </div>
        <p className="connected__text">Connected</p>
      </>
  );
}

export default Address;

const Check = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="3"
    stroke="rgb(33, 191, 150)"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 12l5 5l10 -10" />
    <title id="copied-address">Copied!</title>
  </svg>
);
