import React, { useState, useEffect} from 'react';
import { db } from "./firebase";
import Address from "../components/Address/Address"

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
            console.log("WYGRANAAAA")
            setWinbox("block");
        } else {
            console.log(...draw, "Przegrana :(");
            setLotterybox("none");
            // HERE SHOULD CLOSE THE Purple DIV (.final_lottery_box) WITH start button etc. after 2-3s

        }                                                // too many renders - useEffect
    },[draw])


    const handleClose = () => {
        const closefunc = document.querySelector(".lottery__win__box");
        closefunc.style.display = 'none';
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        const submitbutton = document.querySelector(".form__winner__submit");
        submitbutton.setAttribute("disabled", "disabled");

        db.collection("lottery_winner")
            .add({
                answeraddress: answeraddress,
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




        setAnsweraddress("");

    };


    console.log(yourcodenumber, typeof(yourcodenumber), winvariable , typeof(winvariable), newyourcode, typeof(newyourcode));

//style={{display: closewallet}}
        return (
            <>
                <div className="lottery__win__box" style={{display: winbox}}>
                    <h1>CONGRATULATION ! YOU WIN !</h1>
                    <div className="AddressHide">
                        <Address size="5" copyable />
                        </div>
                <form onSubmit={handleSubmit} className="form__winner__submit">
                    <label>WKLEJ SWÓJ ADDRESS PORTFELA</label>
                    <input placeholder="Type Your Address here 0x38.." value={answeraddress} onChange={(e) => setAnsweraddress(e.target.value)}/>
                        <button
                        type="submit"
                        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
                    >
                        Submit
                    </button>
                </form>
                    <button onClick={handleClose}>Close</button>
                </div>
                <div>
                    {showElement ? (
        <div className="final_lottery_box" >

                <button onClick={handleClick} className="btn__lottery__start">Start</button>
                <p class="lottery__basic__text">{draw} :yours code of lottery </p>

                <ul>{winners.map((winner, i) => {
                    return <li key={i}>{winner.firstcode}</li>
                })}
                </ul>
        </div>  ) : (
                        <div></div>
                    )}{" "}
                </div>

            </>
        )



}

export default Lottery_Setup;