import React, { useState } from "react";
import { Popup } from "./components/Popup/Popup";
import './App.css';
import { Questions } from "./components/Questions/Questions"
import { questionData } from "./questionlist";
import { UserFeedback } from "./components/UserFeedback/UserFeedback";
import { UserSupport } from "./components/UserSupport/UserSupport";
import styled from 'styled-components';

const App = () => {
  //Make welcome popup always open
  const [open, setOpen] = useState(true);
  //Open feedback popup
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <Wrapper>
      {open && <Popup text="Welcome to Alberta Driver's sknowledge test Class7" closePopup={() => setOpen(false)} />}
      <Questions questions={questionData} />
      <FeedbackButton onClick={() => setShowFeedback(true)}>Feedback us</FeedbackButton>
      {showFeedback && <UserFeedback closeFeedback={() => setShowFeedback(false)} />}
      <UserSupport />
    </Wrapper>
  );
};

const Wrapper = styled.div`
`;

const FeedbackButton = styled.button`
  background-color: red;
  margin-bottom: 20px;
`;




export default App;