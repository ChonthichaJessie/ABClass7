"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backbutton = void 0;
require("./BackButton.css");
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Backbutton = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("button", { onClick: () => navigate(-1) }, "Back")));
};
exports.Backbutton = Backbutton;
exports.default = exports.Backbutton;
