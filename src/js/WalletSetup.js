import React, {useState, useEffect} from 'react'
import {ethers} from 'ethers';
import { useMoralis } from "react-moralis";
import Account from "components/Account";
import Chains from "components/Chains";
import DataToken from "../DataToken";
import Lottery_Setup from "./Lottery_Setup";
import logo from "images/logo_fan.png";



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


    return (
        <>
            <div className="container__header">
                <div className="logo__top"><img src={logo} /></div>
                <div>
                <Account />
                <Chains bsc /><p>set up BSC Network on MetaMask</p>
                </div>
                <div className='walletCard'>
                                       {errorMessage}
                    {transactionSuccessMessage}
                </div>
            </div>
            <div className="section__line"></div>



               </>
    );


}

export default WalletSetup;


