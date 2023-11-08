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
const styled_components_1 = __importDefault(require("styled-components"));
const SingleQuestion = ({ data }) => {
    const [answer, setAnswer] = (0, react_1.useState)(false);
    const showAnswer = () => setAnswer(true);
    //Everytime when the [data] change, answer will be reset to be false (initial state)
    (0, react_1.useEffect)(() => {
        setAnswer(false);
    }, [data]);
    return (react_1.default.createElement(Wrapper, null,
        react_1.default.createElement(QuestionRow, null, data.id + ". " + data.question),
        !!data.picture && react_1.default.createElement(QuestionPicture, { src: `./images/${data.picture}`, alt: "supporting" }),
        answer ? react_1.default.createElement(AnswerRow, null, data.answer) : react_1.default.createElement(AnswerButton, { onClick: showAnswer }, "Answer")));
};
const Wrapper = styled_components_1.default.div `
display: flex;
flex-direction: column;
`;
const QuestionRow = styled_components_1.default.div `
    font-family: din-round,sans-serif;
    font-size: 30px;
    font-weight: 300;
    margin: 10px;
`;
const AnswerRow = styled_components_1.default.div `
    font-family: din-round,sans-serif;
    font-size: 25px;
    font-weight: 300;
    margin: 20px;
`;
const QuestionPicture = styled_components_1.default.img `
    margin: 10px;
    width: 40%;
`;
const AnswerButton = styled_components_1.default.button `
    appearance: button;
    background-color: #4c9900;
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
    margin-top: 20px;
    margin-left: 10px;
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
    width: 100px;
    height: 100%;
`;
exports.default = SingleQuestion;
