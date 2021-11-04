import React, { useState, useEffect} from 'react';
import { db } from "./firebase";

const Lottery_Setup = () => {


    const [draw, setDraw] = useState([]);
    const [winners, setWinner] = useState([]);
    const [winbox, setWinbox] = useState("none");

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
            const nums = Array.from({length: winvariable.toString().length}, () => random(1, 5)); // losuje tyle liczb ile kod ma znaków zmiana zmiennej na string
            yourCodeArray.push(nums);
            let k = setDraw(nums);

            return {...draw};

        };

        console.log(...yourCodeArray, "czy ma liczby ?! <<<<<<<<<<<<");

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
            console.log("Przegrana :(")
        }                                                // too many renders - useEffect
    },[draw])


    const handleClose = () => {
        const closefunc = document.querySelector(".lottery__win__box");
        closefunc.style.display = 'none';
        console.log(closefunc, "nasz div");
    }


    console.log(yourcodenumber, typeof(yourcodenumber), winvariable , typeof(winvariable), newyourcode, typeof(newyourcode));


        return (
            <>
                <div className="lottery__win__box" style={{display: winbox}}>
                    <h1>CONGRATULATION ! YOU WIN !</h1>
                <form><label>WKLEJ SWÓJ KOD</label><input />
                <button>SUBMIT</button>
                </form>
                    <button onClick={handleClose}>Close</button>
                </div>
        <div className="final_lottery_box">

                <button onClick={handleClick} className="btn__lottery__start">Start</button>
                <p class="lottery__basic__text">{draw} :yours code of lottery </p>

                <ul>{winners.map((winner, i) => {
                    return <li key={i}>{winner.firstcode}</li>
                })}
                </ul>
        </div>

            </>
        )



}

export default Lottery_Setup;