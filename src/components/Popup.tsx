import React from "react";
import styled from 'styled-components';

type PopupProps = {
  text: string,
  closePopup(): void,
}

export const Popup = ({ text, closePopup }: PopupProps) => {
  return (
    <Background>
      <Box>
        <CloseRow>
          <CloseButton onClick={closePopup}>+</CloseButton>
        </CloseRow>
        <Heading>{text}</Heading>
        <Content>
          <a target="_blank" rel="noreferrer" href="https://buy.stripe.com/cN2bML22e1Fs0yAeUU">
            <SupportUsButton>Support Us</SupportUsButton>
          </a>
        </Content>
      </Box>
    </Background>
  );
};

const Background = styled.div`
  padding: 5px;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const Box = styled.div`
  position: absolute;
  left: 20%;
  right: 20%;
  bottom: 20%;
  top: 30%;
  text-align: center;
  border-radius: 15px;
  border-color: black;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.span`
  font-size: 25pt;
`;

const CloseRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const CloseButton = styled.span`
    font-size: 30pt;
    font-weight: 200;
    transform: rotate(45deg);
    padding-top: 5px;
    padding-right: 10px;
    padding-bottom: 5px;
`;

const SupportUsButton = styled.button`
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
    width: 150px;
    height: 100%;
`;

const Content = styled.div`
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
`;

export default Popup;