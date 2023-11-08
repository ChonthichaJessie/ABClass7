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
const react_1 = __importStar(require("react"));
const Popup_1 = require("./components/Popup");
require("./App.css");
const Questions_1 = require("./components/Questions");
const questionlist_1 = require("./questionlist");
const UserFeedback_1 = require("./components/UserFeedback");
const UserSupport_1 = require("./components/UserSupport");
const styled_components_1 = __importDefault(require("styled-components"));
const App = () => {
    //Make welcome popup always open
    const [open, setOpen] = (0, react_1.useState)(true);
    //Open feedback popup
    const [showFeedback, setShowFeedback] = (0, react_1.useState)(false);
    return (react_1.default.createElement(Wrapper, null,
        react_1.default.createElement(ImageColumn, null,
            react_1.default.createElement(HomeText, { src: `../public/images/HomeText.png`, alt: "Alberta Driving Class7 Practice" }),
            react_1.default.createElement(HomeImage, { src: `../public/images/Home.jpg`, alt: "Alberta Driving Class7 Practice" })),
        react_1.default.createElement(Content, null,
            open && react_1.default.createElement(Popup_1.Popup, { text: "Welcome to Alberta Driver's knowledge test Class 7", closePopup: () => setOpen(false) }),
            react_1.default.createElement(Questions_1.Questions, { questions: questionlist_1.questionData }),
            react_1.default.createElement(ScrollingButtons, null,
                react_1.default.createElement(UserSupport_1.UserSupport, null),
                react_1.default.createElement(FeedbackButton, { onClick: () => setShowFeedback(true) }, "Give feedback"),
                showFeedback && react_1.default.createElement(UserFeedback_1.UserFeedback, { closeFeedback: () => setShowFeedback(false) })))));
};
const Wrapper = styled_components_1.default.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
`;
const ImageColumn = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  flex: 2;
  /* background-image: url("./images/Home.jpg");
  background-repeat: no-repeat;
  background-size: 100%; */
`;
const HomeText = styled_components_1.default.img `
  position: fixed;
  width:40%;
  top:0;
  z-index: 1;
`;
const HomeImage = styled_components_1.default.img `
  position: fixed;
  bottom: 0;
  width: 40%;
`;
const Content = styled_components_1.default.div `
  flex: 3;
`;
const FeedbackButton = styled_components_1.default.button `
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
    height: 100%;
`;
const ScrollingButtons = styled_components_1.default.div `
display: flex;
flex-direction: column;
position: fixed;
top: 60%;
right: 3px;
`;
exports.default = App;
