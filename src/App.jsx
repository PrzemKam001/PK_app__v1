import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import Account from "components/Account";
import Chains from "components/Chains";
import Header from "./Header";
import Data_Token from "./DataToken";
import Form from "./Form";

import Wallet from "components/Wallet";


const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "100px",
  },
  headerRight: {
    display: "flex",
    gap: "10px",
  },
  navLink: {
    textDecoration: "none",
    fontWeight: "800",
    color: "#374f72",
    fontFamily: "Roboto, sans-serif",
    fontSize: "18px",
  },
  navLinkActive: {
    textDecoration: "none",
    fontWeight: "800",
    color: "#041836",
    fontFamily: "Roboto, sans-serif",
    fontSize: "18px",
  },
  navBar: {
    display: "flex",
    gap: "30px",
  },
};
const App = () => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <div>
      <div
        container
        justifyContent="space-between"
        alignItems="center"
        margin="15px 0"
        padding="0 20px"
      >
        <Logo />
        <div style={styles.navBar}>

        </div>
        <Chains  bsc />
        <Account />
        <Header></Header>
        <div style={styles.headerRight}>


        </div>
      </div>
      <div style={styles.content}>

      <Wallet />

      </div>

<Data_Token></Data_Token>
      <Form/>

      <div>
        <p>this is last version</p>
      </div>
    </div>
  );
};

export const Logo = () => (
  <svg width="50" height="38" viewBox="0 0 50 38" fill="none" xmlns="http://www.w3.org/2000/svg">

    />
  </svg>
);

export default App;
