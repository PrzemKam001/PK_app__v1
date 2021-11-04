import React, { useEffect } from "react";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import Lottery_Setup from "../../js/Lottery_Setup";
import "../../css/final_lottery_box.css";


const styles = {
  card: {
    alignItems: "center",
    width: "100%",
  },
  tranfer: {
    padding: "20px",
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
  },
  header: {
    textAlign: "center",
  },
  input: {
    width: "100%",
    outline: "none",
    fontSize: "16px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textverflow: "ellipsis",
    appearance: "textfield",
    color: "#041836",
    fontWeight: "700",
    border: "none",
    backgroundColor: "transparent",
  },
  select: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  row: {
    display: "flex",
    marginLeft: "25px",
    alignItems: "center",
    gap: "10px",
    flexDirection: "row",
  },
  button: {
    marginTop: "10px",
    width: "100%",
    border: "0px",
    cursor: "pointer",
    fontSize: "16px",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "600",
    borderRadius: "13px",
    outline: "0px",
    height: "46px",
    color: "white",
    backgroundColor: "#21BF96",
  },
  field: {
    backgroundColor: "aliceblue",
    borderRadius: "8px",
    height: "45px",
    alignItems: "center",
    display: "flex",
    width: "100%",
    padding: "0 10px",
  },
};
function Transfer() {
  const { Moralis } = useMoralis();
  const [receiver, setReceiver] = useState("0xB16b1a09C39D001728163E485304f24d8685D829");
  const [token, setToken] = useState("0xb6d48fcef36e19681ee29896b19c1b6cbd1eab1b");
  const [tx, setTx] = useState();
  const [amount, setAmount] = useState(101);
  const [isPending, setIsPending] = useState(false);
  const [drawbox, setDrawbox] = useState("none");
  const [closewallet, setClosewallet] = useState("block");

  useEffect(() => {
    if (token && amount && receiver) setTx({ amount, receiver, token });
  }, [token, amount, receiver]);


  async function transfer() {


    const { amount, receiver, token } = tx;
    const options = {
      type: "erc20",
      amount: Moralis.Units.Token("2", "18"),
      receiver,
      contractAddress: "0xb6d48fcef36e19681ee29896b19c1b6cbd1eab1b",
    };
    console.log(isPending);
    setIsPending(true);
    await Moralis.transfer(options)
      .then((tx) => {
        console.log(tx, tx.status , tx.gasUsed );
        setIsPending(false);

        if (tx.status === true) {
          console.log("POSZLO ZNAKOMICIE, TERAZ TUTAJ OTWÓRZ DIV");
          setDrawbox("block");
          setClosewallet("none");

        }


      })
      .catch((e) => {
        alert(e.message);
        setIsPending(false);
      });




  }


  return (
      <>
        <div clasName="final_lottery_box" style={{display: drawbox}}>
          <Lottery_Setup />
        </div>
        <div maxWidth="1200px" className="buyticket__box"style={{display: closewallet}}>

    <div style={styles.card} style={{display: closewallet}}>
      <div style={styles.tranfer} style={{display: closewallet}}>
        <div style={styles.header} style={{display: closewallet}}>
          <div className="AddressHide" style={{display: closewallet}}>

          </div>
                   <h3>BUY TICKET</h3>
          <h1>cost: 100 FAN</h1>
          <div style={styles.navLinks} style={{display: closewallet}}>
        </div>

        <button style={styles.button} disabled={!tx} onClick={() => transfer()}>
          {isPending ? <Loader /> : "Transfer TUTAJ"}
        </button>
      </div>
    </div>

    </div>
        </div>
        </>
  );
}

export default Transfer;

const Loader = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ margin: "auto", display: "block", shapeRendering: "auto" }}
    width="48px"
    height="48px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="white"
      strokeWidth="7"
      r="20"
      stroke-dasharray="94.24777960769379 33.41592653589793"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      ></animateTransform>
    </circle>
  </svg>
);
