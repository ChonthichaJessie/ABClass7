import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Question } from "../model/types";

type SingleQuestionProps = {
    data: Question
}
const SingleQuestion = ({ data }: SingleQuestionProps) => {
    const [answer, setAnswer] = useState(false);
    const showAnswer = () => setAnswer(true);

    //Everytime when the [data] change, answer will be reset to be false (initial state)
    useEffect(() => {
        setAnswer(false);
    }, [data]);

    return (
        <Wrapper>
            <QuestionRow>{data.id+". "+data.question}</QuestionRow>
            {!!data.picture && <QuestionPicture src={`./images/${data.picture}`} alt="supporting" />}
            {answer ? <AnswerRow>{data.answer}</AnswerRow> : <AnswerButton onClick={showAnswer}>Answer</AnswerButton>}
        </Wrapper>
    )
};
const Wrapper = styled.div`
display: flex;
flex-direction: column;
`;
const QuestionRow = styled.div`
    font-family: din-round,sans-serif;
    font-size: 30px;
    font-weight: 300;
    margin: 10px;
`;
const AnswerRow = styled.div`
    font-family: din-round,sans-serif;
    font-size: 25px;
    font-weight: 300;
    margin: 20px;
`;
const QuestionPicture = styled.img`
    margin: 10px;
    width: 40%;
`;
const AnswerButton = styled.button`
    appearance: button;
    background-color: #4c9900;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: din-round,sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: .8px;
    line-height: 20px;
    margin-top: 20px;
    margin-left: 10px;
    outline: none;
    overflow: visible;
    padding: 13px 16px;
    text-align: center;
    text-transform: uppercase;
    touch-action: manipulation;
    transform: translateZ(0);
    transition: filter .2s;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: 100px;
    height: 100%;
`;

export default SingleQuestion

