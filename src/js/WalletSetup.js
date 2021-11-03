import React, {useState, useEffect} from 'react'
import {ethers} from 'ethers'
import DataToken from "../DataToken";
import Lottery_Setup from "./Lottery_Setup";



const Web3 = require("web3");
const providerIsNew = "https://floral-billowing-glade.bsc.quiknode.pro/29ea12cb502ef5492fc8c5800415e29b801c933b/"
// const providerIsNew = "http://localhost:7545"
const Web3Client = new Web3(new Web3.providers.HttpProvider(providerIsNew));            //provider by QuickNode


const Moralis_Node = "https://speedy-nodes-nyc.moralis.io/0e3338fc0e4dbffd4bd14412/bsc/mainnet";
let web32 = new Web3(new Web3.providers.HttpProvider(Moralis_Node));





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




const WalletSetup = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [transactionSuccessMessage, setTransactionSuccessMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState("0,00");
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');
    const [provider, setProvider] = useState(null);






    const connectWalletHandler = () => {
        if (window.ethereum && defaultAccount == null) {
            setProvider(new ethers.providers.Web3Provider(window.ethereum));


            window.ethereum.request({method: 'eth_requestAccounts'})
                .then(result => {
                    setConnButtonText('Wallet Connected');
                    setDefaultAccount(result[0]);


                })
                .catch(error => {
                    setErrorMessage(error.message);
                });

        } else if (!window.ethereum) {
            console.log('Need to install MetaMask');
            setErrorMessage('Please install MetaMask browser extension to interact');
        }
    }


    useEffect(() => {

        if (defaultAccount) {
            const tokenAddress = "0xb6d48fcef36e19681ee29896b19c1b6cbd1eab1b";
            const contract = new Web3Client.eth.Contract(minABI, tokenAddress);

            async function getBalanceOf() {
                const result = await contract.methods.balanceOf(defaultAccount).call(); // importing value;
                const format = Web3Client.utils.fromWei(result); // 18 decimals according to contract
                const num = parseFloat(format);
                const rounded = num.toFixed(2);    // changing value to 2 numbers;


                Web3Client.eth.getBalance(defaultAccount, (err, bal) => {    /// setting ballance as promise
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

        }
    }, [defaultAccount]);

    console.log(defaultAccount , "czy wyświetla czy nie?")









    const shortcutf = () => {                      //// short long wallet Address into short version

        if (defaultAccount === null) {             /// slice not working on null
            return;
        } else {
            const shortcut = defaultAccount.slice(0, 5);
            const shortcutEnd = defaultAccount.slice(37, 42);
            const finalCut = shortcut + "..." + shortcutEnd;  // build a popular construction of address

            return finalCut;
        }

    }

    const signTransactionAndLog = async () => {
        if (window.ethereum && defaultAccount != null){
            Web3Client.eth
                .sendTransaction({
                    // this could be provider.addresses[0] if it exists
                    from: defaultAccount,
                    to: "0x18d40592df6eaE6C8A1873C37f266310Ff47e846",
                    value: "10",
                    gasPrice: "20000000000",
                    gas: "6721975"
                })
                .then((transaction) => {
                    setTransactionSuccessMessage(transaction.transactionHash)
                })
                .catch((error) => {
                    setTransactionSuccessMessage('');
                    setErrorMessage(error.message)
                });
        }
        else if (!window.ethereum) {
            console.log('Need to install MetaMask');
            setErrorMessage('Please install MetaMask browser extension to interact');
        }
    };


    return (
        <>
            <div className="container__header">
                <div className="logo__top"><img src="logo_fan.png" /></div>
                <div className='walletCard'>
                    <button className="btn__connect" onClick={connectWalletHandler}>{connButtonText}</button>
                    <div className='accountDisplay'>
                        <h3>Address: <span>{shortcutf()}</span></h3>
                    </div>
                    <div className='balanceDisplay'>
                        <h3>Balance: <span className="header__balance">{userBalance}</span> FAN</h3>
                        <button onClick={signTransactionAndLog}>_buy ticket_</button>
                    </div>
                    {errorMessage}
                    {transactionSuccessMessage}
                </div>
            </div>
            <div className="section__line"></div>


            <DataToken />
            <div className="container__lottery">
                <div className="lottery__parent">
                    <Lottery_Setup />
                    <p className="lottery__text__standard">loteria</p>

                </div>
            </div>
            <div className="section__line"></div>
        </>
    );


}

export default WalletSetup;


