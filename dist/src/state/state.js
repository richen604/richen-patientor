"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateValue = exports.StateProvider = exports.StateContext = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const react_1 = __importStar(require("react"));
const initialState = {
    patients: {},
};
exports.StateContext = react_1.createContext([
    initialState,
    () => initialState,
]);
const StateProvider = ({ reducer, children, }) => {
    const [state, dispatch] = react_1.useReducer(reducer, initialState);
    return (react_1.default.createElement(exports.StateContext.Provider, { value: [state, dispatch] }, children));
};
exports.StateProvider = StateProvider;
const useStateValue = () => react_1.useContext(exports.StateContext);
exports.useStateValue = useStateValue;
