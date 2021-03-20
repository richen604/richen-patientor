"use strict";
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react")); // eslint-disable-line no-unused-vars
const semantic_ui_react_1 = require("semantic-ui-react");
const HEALTHBAR_TEXTS = [
    'The patient is in great shape',
    'The patient has a low risk of getting sick',
    'The patient has a high risk of getting sick',
    'The patient has a diagnosed condition',
];
const HealthRatingBar = ({ rating, showText }) => {
    return (react_1.default.createElement("div", { className: "health-bar" },
        react_1.default.createElement(semantic_ui_react_1.Rating, { icon: "heart", disabled: true, rating: 4 - rating, maxRating: 4 }),
        showText ? react_1.default.createElement("p", null, HEALTHBAR_TEXTS[rating]) : null));
};
exports.default = HealthRatingBar;
