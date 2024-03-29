import React, { useState } from "react";
import SingleQuestion from './SingleQuestion';
import styled from 'styled-components';
import { Question } from "../model/types";

const useQuestion = (questions: Question[]) => {
  const [index, setIndex] = useState(0);
  const question = questions[index]
  const hasPrev = index > 0
  const hasNext = index < questions.length - 1
  const goNext = () => setIndex(index + 1)
  const goPrev = () => setIndex(index - 1)

  return {
    question, goNext, goPrev, hasNext, hasPrev
  }
}

type QuestionsProps = {
  questions: Question[]
}

export const Questions = ({ questions }: QuestionsProps) => {
  const { question, goNext, goPrev, hasNext, hasPrev } = useQuestion(questions)

  return (
    <div>
      <SingleQuestion data={question} />
      {hasPrev && <BackButton onClick={goPrev}>Back</BackButton>}
      {hasNext && <NextButton onClick={goNext}>Next</NextButton>}
    </div>
  );
};

const BackButton = styled.button`
    appearance: button;
    background-color: #808080;
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
    margin-top: 10px;
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
`;

const NextButton = styled.button`
    appearance: button;
    background-color: #808080;
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
    margin-top: 10px;
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
`;

export default Questions;
