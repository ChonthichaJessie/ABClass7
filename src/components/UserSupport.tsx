import { useState } from 'react';
import Checkout from "./Checkout";
import styled from 'styled-components';
import React from 'react';

export const UserSupport = () => {
    const [show, setShow] = useState(false);

    if (!show) {
        return (
            //Cancel using paypal
            // <HomeSupportUsButton className='buy-btn' type="submit" onClick={() => setShow(true)}>
            //     Support us
            // </HomeSupportUsButton>
            <a target="_blank" href = "https://buy.stripe.com/cN2bML22e1Fs0yAeUU"><HomeSupportUsButton>Support us</HomeSupportUsButton></a>

        )
    }

    return (
        <Wrapper>
            <CloseRow>
                <CloseButton onClick={() => setShow(false)}>x</CloseButton>
            </CloseRow>
            <Checkout />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
`;

const CloseRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 25px;
`;

const CloseButton = styled.span`
    font-size: 15pt;
    font-weight: 200;
    margin-bottom: 3px;
    position: fixed;
    right: 5px;
`;

const HomeSupportUsButton = styled.button`
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
    margin-bottom: 10px;
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
    height: 100%;
`;

export default UserSupport;
