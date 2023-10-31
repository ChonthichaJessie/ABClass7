import React from "react";
import "./Popup.css";
import UserSupport from '../UserSupport/UserSupport';
export const Popup = ({ text, closePopup }) => {
  return (
    <div className="popup-container">
      <div className="popup-body">
        <button onClick={closePopup}>Close X</button>
        <h1>{text}</h1>
        {/* User support paypal */}
        <UserSupport />
      </div>
    </div>
  );
};
export default Popup;