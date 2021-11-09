import React, { useState, useEffect } from "react";
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
        <div className="form__modal__inside__container">
        <form className="form" onSubmit={handleSubmit}>
            <h1 className="form__h1__modal">Send us Yours suggestion / idea or simple question here</h1>

            <label>What do You want ask our Team?</label>
            <input
                placeholder="TYPE YOUR QUESTION HERE"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />

            <label>How long You are holding FAN token</label>
            <select value={yourperiod} onChange={(e) => setYourperiod(e.target.value)}>
                <option value="From0">From day 0</option>
                <option value="3months">About 3 months</option>
                <option value="Month">Less than month</option>
                <option value="Newbie">I am newbie</option>
            </select>

            <button
                type="submit"
                className="button__form__submit"
            >
                Submit
            </button>
        </form>
        </div>
    );
};

export default Form_Setup;