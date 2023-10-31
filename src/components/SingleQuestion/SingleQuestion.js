import './SingleQuestion.css';
import React, { useEffect, useState } from "react";

const SingleQuestion = ({ data }) => {
    const [answer, setAnswer] = useState(false);
    const showAnswer = () => setAnswer(true);

    //Everytime when the [data] change, answer will be reset to be false (initial state)
    useEffect(() => {
        setAnswer(false);
    }, [data]);

    return (
        <div>
            <p>{data.id}</p>
            <p>{data.question}</p>
            {!!data.picture && <img src={`./images/${data.picture}`} alt="supporting" />}
            {answer ? <p>{data.answer}</p> : <button onClick={showAnswer}>Answer</button>}
        </div>
    )
};

export default SingleQuestion

