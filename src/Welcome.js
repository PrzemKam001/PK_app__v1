import React, { useState, useEffect} from "react";
import { useMoralis } from "react-moralis";
import Account from "./components/Account";
import "./css/welcome.css";
import Chains from "./components/Chains/Chains";
import Address from "./components/Address/Address";
import pancakeswaplogo from "images/pancakeswap.svg";
import metamaskl from "./images/metamasklogo.png";


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


function Welcome() {
    const { authenticate, isAuthenticated, logout } = useMoralis();
    const [welcomestate, setWelcomestate] = useState("block");

    if (!isAuthenticated) {


        return (
            <>
                <div className="welcome__background">
                    <div className="welcome__component">
                    <div className="welcome__sidebar"></div>
                <div className="welcome__page__container" style={{display: "block"}}>
                    <h1 className="h1__welcome">WELCOME</h1>
            <div style={styles.account} className="welcome__authentication">
                <p
                    onClick={() => authenticate({ signingMessage: "Hello World!" })}
                    style={{ padding: "0 10px" }}
                >
                  Authenticate Your Wallet
                </p>

                <Chains bsc />
            </div>
                    <div className="welcome__inside"><span>Install MetaMask</span>
                        <img src={metamaskl}/>
                    </div>


                    <div className="welcome__inside"><span>Buy FAN</span>
                        <div className="welcome__image"><img src={pancakeswaplogo}/></div>
                    </div>

                </div>
                    <div className="welcome__sidebar"></div>
                    </div>
                </div>
                </>
        );
    }

    return (
        <>
            <div className="welcome__page__container" style={{display: "none"}}>
        <div style={{ ...styles.account, ...styles.wrapper }} onClick={() => logout()}>

            <Address avatar size="5" />

        </div>
            </div>
            </>
    );
}

export default Welcome;
