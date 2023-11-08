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
exports.UserFeedback = void 0;
const react_1 = __importStar(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const axios_1 = __importDefault(require("axios"));
const styled_components_1 = __importDefault(require("styled-components"));
const UserFeedback = ({ closeFeedback }) => {
    const [name, setName] = (0, react_1.useState)('');
    const [email, setEmail] = (0, react_1.useState)('');
    const [message, setMessage] = (0, react_1.useState)('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const objt = { name, email, message };
        //Connection URL from sheet.best
        axios_1.default.post('https://sheet.best/api/sheets/112ec73a-9f55-40bd-8c9e-61eec97a8bad', objt)
            .then(response => {
            console.log(response);
        });
    };
    return (react_1.default.createElement(semantic_ui_react_1.Container, { fluid: true, className: "container" },
        react_1.default.createElement(CloseRow, null,
            react_1.default.createElement(WelcomeText, null, "What can we improve"),
            react_1.default.createElement(CloseButton, { onClick: closeFeedback }, "x")),
        react_1.default.createElement(semantic_ui_react_1.Form, { className: "form" },
            react_1.default.createElement(semantic_ui_react_1.Form.Field, null,
                react_1.default.createElement(Name, null,
                    react_1.default.createElement(NameLabel, null, "Name"),
                    react_1.default.createElement(NameInput, { placeholder: "Enter your Name", onChange: (e) => setName(e.target.value) }))),
            react_1.default.createElement(semantic_ui_react_1.Form.Field, null,
                react_1.default.createElement(Email, null,
                    react_1.default.createElement(EmailLabel, null, "Email"),
                    react_1.default.createElement(EmailInput, { placeholder: "Enter your Email", onChange: (e) => setEmail(e.target.value) }))),
            react_1.default.createElement(semantic_ui_react_1.Form.Field, null,
                react_1.default.createElement(Message, null,
                    react_1.default.createElement(MessageLabel, null, "Message"),
                    react_1.default.createElement(MessageInput, { placeholder: "Enter your message", onChange: (e) => setMessage(e.target.value) }))),
            react_1.default.createElement(semantic_ui_react_1.Button, { color: "blue", type: "submit", onClick: handleSubmit }, "Submit"))));
};
exports.UserFeedback = UserFeedback;
const CloseRow = styled_components_1.default.div `
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
`;
const CloseButton = styled_components_1.default.span `
    font-size: 15pt;
    font-weight: 200;
	position: fixed;
	right: 5px;
`;
const WelcomeText = styled_components_1.default.header `
	font-family: din-round,sans-serif;
    font-size: 15px;
    font-weight: 300;
    margin: 3px;	
`;
const Name = styled_components_1.default.div `
display: flex;
flex-direction: row;
`;
const Email = styled_components_1.default.div `
display: flex;
flex-direction: row;
`;
const Message = styled_components_1.default.div `
display: flex;
flex-direction: column;
`;
const NameLabel = styled_components_1.default.label `
font-family: din-round,sans-serif;
    font-size: 15px;
    font-weight: 300;
    margin: 3px;
	flex: 0;
`;
const NameInput = styled_components_1.default.input `
	flex: 1;
	margin-bottom: 5px;
`;
const EmailLabel = styled_components_1.default.label `
font-family: din-round,sans-serif;
    font-size: 15px;
    font-weight: 300;
    margin: 3px;
	flex: 0;
`;
const EmailInput = styled_components_1.default.input `
	flex: 1;
	margin-bottom: 5px;
`;
const MessageLabel = styled_components_1.default.label `
font-family: din-round,sans-serif;
    font-size: 15px;
    font-weight: 300;
    margin: 3px;
`;
const MessageInput = styled_components_1.default.textarea `
height: 50px;
margin-bottom: 5px;
`;
exports.default = exports.UserFeedback;
