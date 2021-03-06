"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
require("semantic-ui-css/semantic.min.css");
const App_1 = __importDefault(require("./App"));
const state_1 = require("./state");
react_dom_1.default.render(react_1.default.createElement(state_1.StateProvider, { reducer: state_1.reducer },
    react_1.default.createElement(App_1.default, null)), document.getElementById("root"));
