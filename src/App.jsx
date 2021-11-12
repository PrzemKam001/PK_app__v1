import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import Header from "./Header";
import Data_Token from "./DataToken";
import Form from "./Form";
import LotterySection from "./Lottery_section";
import "./css/basics.css"
import Welcome from "./Welcome";
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);



  return ( // Header = WalletSetup + Account + Address + Chains + Data_Token
    <>
        <Welcome />
        <div className="app_main">
        <div className="app__background">
                <Header />
                    <Data_Token />
            <div className="container__lottery">
                <div className="lottery__parent">
                    <LotterySection />
                </div>
            </div>
            <div className="section__line"></div>
            <Form />
        </div>
        </div>
    </>
  );
};


export default App;
