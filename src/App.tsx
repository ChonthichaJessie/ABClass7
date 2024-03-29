import React, { useState } from "react";
import { Popup } from "./components/Popup";
import './App.css';
import { Questions } from "./components/Questions"
import { questionData } from "./questionlist";
import { UserFeedback } from "./components/UserFeedback";
import { UserSupport } from "./components/UserSupport";
import styled from "styled-components";


// USE COMMAND npm run dev instead of npm start ********
const App = () => {
  //Make welcome popup always open
  const [open, setOpen] = useState(true);
  //Open feedback popup
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <Wrapper>
      <ImageColumn>
        <HomeText src='./images/HomeText.png' alt="Alberta Driving Class7 Practice" />
        <HomeImage src='./images/Home.jpg' alt="Alberta Driving Class7 Practice" />
      </ImageColumn>
      <Content>
        {open && <Popup text="Welcome to Alberta Driver's knowledge test Class 7" closePopup={() => setOpen(false)} />}
        <Questions questions={questionData} />
        <ScrollingButtons>
          <UserSupport />
          <Space />
          <FeedbackButton onClick={() => setShowFeedback(true)}>Give feedback</FeedbackButton>
          {showFeedback && <UserFeedback closeFeedback={() => setShowFeedback(false)} />}
        </ScrollingButtons>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  /* background-image: url("./images/Home.jpg");
  background-repeat: no-repeat;
  background-size: 100%; */
`;
const HomeText = styled.img`
  position: fixed;
  width:40%;
  top:0;
  z-index: 1;
`;
const HomeImage = styled.img`
  position: fixed;
  bottom: 0;
  width: 40%;
`;



const Content = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-bottom: 10px;
`;
const Space = styled.div`
  height: 10px;
`;

const FeedbackButton = styled.button`
  appearance: button;
  background-color: #1899D6;
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
  margin-bottom: 5px;
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
  width: 212.25px;
`;

const ScrollingButtons = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 20px;
  z-index: 1;
  background-color: white;
`;

export default App;