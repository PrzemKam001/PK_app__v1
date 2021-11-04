import React, {useState, useEffect} from 'react'
import {ethers} from 'ethers';
import { useMoralis } from "react-moralis";
import Account from "components/Account";
import logo from "images/logo_fan.png";


const WalletSetup = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [transactionSuccessMessage, setTransactionSuccessMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState("0,00");
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');
    const [provider, setProvider] = useState(null);



    return (
        <>
            <div className="container__header">
                <div className="logo__top"><img src={logo} /></div>
                <div>
                <Account />
                <p className="small__text__basic">set up BSC Network on MetaMask</p>

                <div className='walletCard'>
                                       {errorMessage}
                    {transactionSuccessMessage}
                </div>
                </div>
            </div>
            <div className="section__line"></div>
               </>
    );
}

export default WalletSetup;


