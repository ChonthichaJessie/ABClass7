"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSupport = void 0;
const react_1 = require("react");
const Checkout_1 = __importDefault(require("./Checkout"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_2 = __importDefault(require("react"));
const UserSupport = () => {
    const [show, setShow] = (0, react_1.useState)(false);
    if (!show) {
        return (react_2.default.createElement(HomeSupportUsButton, { className: 'buy-btn', type: "submit", onClick: () => setShow(true) }, "Support us"));
    }
    return (react_2.default.createElement(Wrapper, null,
        react_2.default.createElement(CloseRow, null,
            react_2.default.createElement(CloseButton, { onClick: () => setShow(false) }, "x")),
        react_2.default.createElement(Checkout_1.default, null)));
};
exports.UserSupport = UserSupport;
const Wrapper = styled_components_1.default.div `
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
`;
const CloseRow = styled_components_1.default.div `
    display: flex;
    flex-direction: row;
    margin-bottom: 25px;
`;
const CloseButton = styled_components_1.default.span `
    font-size: 15pt;
    font-weight: 200;
    margin-bottom: 3px;
    position: fixed;
    right: 5px;
`;
const HomeSupportUsButton = styled_components_1.default.button `
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
exports.default = exports.UserSupport;
