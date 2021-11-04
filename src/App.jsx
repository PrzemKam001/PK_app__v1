import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import Header from "./Header";
import Data_Token from "./DataToken";
import Form from "./Form";
import LotterySection from "./Lottery_section";


const App = () => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return ( // Header = WalletSetup + Account + Address + Chains + Data_Token
    <div>

        <Header></Header>
        <Data_Token />
        <div className="container__lottery">
            <div className="lottery__parent">
                <LotterySection />

            </div>
        </div>
        <div className="section__line"></div>
        <Form/>
      <div>
        <p>this is last version</p>
      </div>
    </div>
  );
};


export default App;
