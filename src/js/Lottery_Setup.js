import React, { useState, useEffect} from 'react';
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider"


import { db } from "./firebase";
import Address from "../components/Address/Address";
import "../css/lottery_section_css.css";
import {getEllipsisTxt} from "../utils/formatters";
import Web3 from "web3";

const Lottery_Setup = () => {


    const [draw, setDraw] = useState([]);
    const [winners, setWinner] = useState([]);
    const [winbox, setWinbox] = useState("none");
    const [lotterybox, setLotterybox] = useState ("block");
    const [answeraddress, setAnsweraddress] = useState("");
    const [showElement, setShowElement] = React.useState(true);
    const [startstate, setStartstate] = useState ("");

    const [loader, setLoader] = useState(false);

        useEffect(() => {
            db.collection("winner")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        setWinner((state) => [
                                ...state,
                            {
                                ...doc.data(),
                                id: doc.id,
                            },
                        ]);
                    });
                });

        }, []);


        function random(min, max) {
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
        }

        let yourCodeArray = [];


        const handleClick = e => {

            const startbutton = document.querySelector(".btn__lottery__start");
            startbutton.setAttribute("disabled", "disabled");

            const nums = Array.from({length: winvariable.toString().length}, () => random(1, 1)); // losuje tyle liczb ile kod ma znaków zmiana zmiennej na string
            yourCodeArray.push(nums);
            let k = setDraw(nums);

            setTimeout(function () {
                    setShowElement(false);
                }, 3000);

            return {...draw};
        };


        const apiVariableArray = [];           /// destrukturyzacja tablicy otrzymanej z bazy danych

    winners.map((winner, i) => {
        return apiVariableArray.push(winner.firstcode);
    })

    const x = apiVariableArray;                           ///
    const [winvariable] = x;                 /// zmienna odpowiadajaca za ilość losowanych liczb
      /// zmienna -> w string żeby wylosować jej długość
                                                                     //console.log(typeof(winvariable));

     const yourcode =  draw;
  //   const [yourcodenum, b] = yourcode
  //  console.log(yourcodenum, b);




   const newyourcode = yourcode.join("");                           // zmienna odpowiadająca za wylosowane numery STRING

  //

    var yourcodenumber = parseInt(newyourcode, 10);


    useEffect(() => {
        if (yourcodenumber === winvariable) {                                    // OTWIERA MODAL

            setWinbox("block");

            db.collection("lottery_winner")
                .add({
                    answeraddress: address,
                })
                .then(() => {
                    setWinbox("none");
                    setLoader(false);
                    alert("Your message has been submitted👍");
                })
                .catch((error) => {
                    alert(error.message);
                    setLoader(false);
                });

        } else {

            setLotterybox("none");
            // HERE SHOULD CLOSE THE Purple DIV (.final_lottery_box) WITH start button etc. after 2-3s

        }                                                // too many renders - useEffect
    },[draw])


    const handleClose = () => {
        const closefunc = document.querySelector(".lottery__win__box");
        closefunc.style.display = 'none';
    }



    const [address, setAddress] = useState();
    const { walletAddress } = useMoralisDapp();

    function Address(props) {

        useEffect(() => {
            setAddress(walletAddress);
        },[]);

        if (!address) return null;

        return address
    }






//style={{display: closewallet}}
        return (
            <>
                <div className="lottery__win__box" style={{display: winbox}}>
                    <h1 className="lottery__win__box_text">CONGRATULATION ! YOU WIN !</h1>

                    <div className="AddressHide">
                        <Address size="5" copyable />
                        </div>

                </div>
                <div>
                    {showElement ? (
        <div className="final_lottery_box" >
            <p className="small__text__basic">SUCCESSFULL TRANSACTION</p>
<div className="final__lottery__container">

                <button onClick={handleClick} className="btn__lottery__start">Start</button>
    <div className="lottery__text__div">
                <p class="lottery__basic__text">{draw}</p>
        <p className="lottery__basic__text">:yours code</p>
    </div>
    <p className="lottery__basic__instruction">Click start and You will draw Your lottery code, after it You will get the result</p>
</div>
        </div>  ) : (
                        <div></div>
                    )}{" "}

                </div>

            </>
        )



}

export default Lottery_Setup;