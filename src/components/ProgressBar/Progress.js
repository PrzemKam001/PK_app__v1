import React, { useState, useEffect }  from "react";
import "../../css/progressbar.css";
import {db} from "../../js/firebase";




const ProgressBar = () => {

    const [onewidth, setOnewidth] = useState();
    const [counter, setCounter] = useState([]);
    const [winnercount, setWinnercount] = useState([0]);

    const styles = {
            width: onewidth,
        };

    useEffect(() => {
        db.collection("lotterycount")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setCounter((state) => [
                        ...state,
                        {
                            ...doc.data(),
                            id: doc.id,
                        },
                    ]);
                });
            });
    }, []);


    const apiVariableArray = [];

    counter.map((el, i) => {
        return apiVariableArray.push(el.lotterycount);
    })

    // liczba wygranych


    useEffect(() => {
        db.collection("lottery_winner")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setWinnercount((state) => [
                        ...state,
                        {
                            ...doc.data(),
                            id: doc.id,
                        },
                    ]);
                });
            });
    }, []);


    const apiwinnersarray = [];

    winnercount.map((el, i) => {
        return apiwinnersarray.push(el.answeraddress);
    })


    useEffect(() => {
const percent =  (apiVariableArray.length / apiwinnersarray.length)

        setOnewidth(percent);

    },[winnercount]);



    const percentprogress ={
        width: onewidth
    }

        const houndredpercent ={
            width: "100%"
        }


        return (

                <div className="progress-container" style={houndredpercent}>
                    <div className="bar" style={percentprogress} />
                </div>

        );

}


export default ProgressBar;
