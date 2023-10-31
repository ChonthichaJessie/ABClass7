import './Questions.css';
import React, { useState } from "react";
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const useQuestion = (questions) => {
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

export const Questions = ({ questions }) => {
  const { question, goNext, goPrev, hasNext, hasPrev } = useQuestion(questions)

  return (
    <div className="question-container">
      <SingleQuestion data={question} />
      {hasPrev && <button onClick={goPrev}>Back</button>}
      {hasNext && <button onClick={goNext}>Next</button>}
    </div>
  );
};
