import React, { useState } from "react";
import Transfer from "./Transfer";
import Address from "../Address/Address";


const styles = {

  title: {
    fontSize: "30px",
    fontWeight: "600",
  },
  header: {
    paddingTop: "20px",
    fontWeight: "700",
    fontSize: "18px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    width: "450px",
    background: "#FFFFFF",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    border: "2px solid #e7eaf3", 
    borderRadius: "15px",
    marginBottom: "20px",
    display: "flex", 
    alignItems: "center",
    flexDirection: "column",
  },
  navLinks: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
    marginTop: "20px",
    paddingBottom: "20px",
  },
  navLink: {
    textDecoration: "none",
    fontWeight: "700",
    color: "#4b5552",
  },
  activeLink: {
    color: "#21BF96",
  },
};




function Wallet() {

  const [show, setShow] = useState(true);



  return (
    <div maxWidth="1200px" className="buyticket__box">

      <div style={styles.card}>
        <div style={styles.header}>
                    <Address size="6" copyable />
          <div>
            <button onClick={() => setShow((s) => !s)}>CLOSE</button>

          </div>

        </div>

        <div style={styles.navLinks}>

          <Transfer />

          {/* <NavLink to="/wallet/transactions" style={styles.navLink} activeStyle={styles.activeLink}>
            Transactions
          </NavLink> */}

        </div>
      </div>
    </div>
  );
}

export default Wallet;
