import React, { useState } from "react";
import { Popup } from "./components/Popup/Popup";
import './App.css';
import { Questions } from "./components/Questions/Questions"
import { questionData } from "./questionlist";
import { UserFeedback } from "./components/UserFeedback/UserFeedback";
import { UserSupport } from "./components/UserSupport/UserSupport";


const App = () => {
  //Make welcome popup always open
  const [open, setOpen] = useState(true);
  //Open feedback popup
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div>
      {open && <Popup text="Welcome to Alberta Driver's sknowledge test Class7" closePopup={() => setOpen(false)} />}
      <Questions questions={questionData} />
      <button onClick={() => setShowFeedback(true)}>Feedback us</button>
      {showFeedback && <UserFeedback closeFeedback={() => setShowFeedback(false)} />}
      <UserSupport />
    </div>
  );
};






export default App;