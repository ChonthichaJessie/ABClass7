import styled from 'styled-components';
import React from 'react';

export const UserSupport = () => {
    return (
        <a target="_blank" rel="noreferrer" href="https://buy.stripe.com/cN2bML22e1Fs0yAeUU"><HomeSupportUsButton>Support us</HomeSupportUsButton></a>
    )

};

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
