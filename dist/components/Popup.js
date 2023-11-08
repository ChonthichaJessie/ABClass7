"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popup = void 0;
const react_1 = __importStar(require("react"));
// import UserSupport from '../UserSupport/UserSupport';
const styled_components_1 = __importDefault(require("styled-components"));
const Checkout_1 = __importDefault(require("./Checkout"));
const Popup = ({ text, closePopup }) => {
    const [openPaypal, setOpenPaypal] = (0, react_1.useState)(false);
    return (react_1.default.createElement(Background, null,
        react_1.default.createElement(Box, null,
            react_1.default.createElement(CloseRow, null,
                react_1.default.createElement(CloseButton, { onClick: closePopup }, "+")),
            react_1.default.createElement(Heading, null, text),
            react_1.default.createElement(Content, null, openPaypal ? react_1.default.createElement(Checkout_1.default, null) : react_1.default.createElement(SupportUsButton, { onClick: () => setOpenPaypal(true) }, "Support us")))));
};
exports.Popup = Popup;
const Background = styled_components_1.default.div `
  padding: 5px;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
const Box = styled_components_1.default.div `
  position: absolute;
  left: 30%;
  right: 30%;
  bottom: 30%;
  top: 30%;
  text-align: center;
  border-radius: 15px;
  border-color: black;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
`;
const Heading = styled_components_1.default.span `
  font-size: 25pt;
`;
const CloseRow = styled_components_1.default.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;
const CloseButton = styled_components_1.default.span `
    font-size: 30pt;
    font-weight: 200;
    transform: rotate(45deg);
    padding-top: 5px;
    padding-right: 10px;
    padding-bottom: 5px;
`;
const SupportUsButton = styled_components_1.default.button `
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
const Content = styled_components_1.default.div `
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
`;
exports.default = exports.Popup;
