import React, { useState, useEffect } from "react";
import "../form_form.css";
import { db } from "./firebase";

const Form_Setup = () => {
    const [question, setQuestion] = useState("");
    const [yourperiod, setYourperiod] = useState("From the day 0");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("ama_questions")
            .add({
                question: question,
                timeperiod: yourperiod,
            })
            .then(() => {
                setLoader(false);
                alert("Your message has been submitted👍");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setQuestion("");
        setYourperiod("");
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>THIS IS THE PLACE WHEN YOU CAN SEND US YOUR AMA QUESTION</h1>

            <label>QUESTION</label>
            <input
                placeholder="TYPE YOUR QUESTION HERE"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />

            <label>Additional Message</label>
            <select value={yourperiod} onChange={(e) => setYourperiod(e.target.value)}>
                <option value="From0">From day 0</option>
                <option value="3months">About 3 months</option>
                <option value="Month">Less than month</option>
                <option value="Newbie">I am newbie</option>
            </select>

            <button
                type="submit"
                style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
            >
                Submit
            </button>
        </form>
    );
};

export default Form_Setup;