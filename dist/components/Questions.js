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
exports.Questions = void 0;
const react_1 = __importStar(require("react"));
const SingleQuestion_1 = __importDefault(require("./SingleQuestion"));
const styled_components_1 = __importDefault(require("styled-components"));
const useQuestion = (questions) => {
    const [index, setIndex] = (0, react_1.useState)(0);
    const question = questions[index];
    const hasPrev = index > 0;
    const hasNext = index < questions.length - 1;
    const goNext = () => setIndex(index + 1);
    const goPrev = () => setIndex(index - 1);
    return {
        question, goNext, goPrev, hasNext, hasPrev
    };
};
const Questions = ({ questions }) => {
    const { question, goNext, goPrev, hasNext, hasPrev } = useQuestion(questions);
    return (react_1.default.createElement("div", { className: "question-container" },
        react_1.default.createElement(SingleQuestion_1.default, { data: question }),
        hasPrev && react_1.default.createElement(BackButton, { onClick: goPrev }, "Back"),
        hasNext && react_1.default.createElement(NextButton, { onClick: goNext }, "Next")));
};
exports.Questions = Questions;
const BackButton = styled_components_1.default.button `
    appearance: button;
    background-color: #808080;
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
    margin-top: 10px;
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
const NextButton = styled_components_1.default.button `
    appearance: button;
    background-color: #808080;
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
    margin-top: 10px;
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
exports.default = exports.Questions;
