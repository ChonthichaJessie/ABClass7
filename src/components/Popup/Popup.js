import React, { useState } from "react";
import "./Popup.css";
import UserSupport from '../UserSupport/UserSupport';
import styled from 'styled-components';
import Checkout from "../Checkout";

export const Popup = ({ text, closePopup }) => {
  const [openPaypal,setOpenPaypal] = useState(false)

  return (
    <div className="popup-container">
      <div className="popup-body">
        <CloseButton onClick={closePopup}>+</CloseButton>
        <h1>{text}</h1>
        {/* User support paypal */}
        {!openPaypal ? <button onClick={()=>setOpenPaypal(true)}>Support us</button> : <CheckoutBody><Checkout/></CheckoutBody>}
      </div>
    </div>
  );
};

const CloseButton = styled.span`
    font-size: 30px;
    font-weight: 200;
    display: inline-block;
    transform: rotate(45deg);
    float: right;
`;

const CheckoutBody = styled.div`
    margin-left: 3%;
    margin-right: 3%;
    

`;

export default Popup;