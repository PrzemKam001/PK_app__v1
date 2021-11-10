import React, { useEffect } from "react";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import Lottery_Setup from "../../js/Lottery_Setup";
import "../../css/final_lottery_box.css";
import {db} from "../../js/firebase";

function Transfer() {
  const { Moralis } = useMoralis();
  const [receiver, setReceiver] = useState("0xB16b1a09C39D001728163E485304f24d8685D829");
  const [token, setToken] = useState("0xb6d48fcef36e19681ee29896b19c1b6cbd1eab1b");
  const [tx, setTx] = useState();
  const [amount, setAmount] = useState(101);
  const [isPending, setIsPending] = useState(false);
  const [drawbox, setDrawbox] = useState("none");
  const [closewallet, setClosewallet] = useState("block");
  const [winbox, setWinbox] = useState("none");
  const [loader, setLoader] = useState(false);




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
          setDrawbox("block");
          setClosewallet("none");

          db.collection("lotterycount")
              .add({
                lotterycount: 1,
              })
              .then(() => {
                setWinbox("none");
                setLoader(false);
              })
              .catch((error) => {
                alert(error.message);
                setLoader(false);
              });


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

    <div style={{display: closewallet}}>
      <div style={{display: closewallet}}>
        <div style={{display: closewallet}}>
          <div className="AddressHide" style={{display: closewallet}}>
          </div>
           <h3>confirm transaction by clicking the button</h3>
          <h1>cost: 100 FAN</h1>
          <div style={{display: closewallet}}>
        </div>
        <button className="buy__button__wallet" disabled={!tx} onClick={() => transfer()}>
          {isPending ? <Loader /> : "Buy Ticket"}
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
