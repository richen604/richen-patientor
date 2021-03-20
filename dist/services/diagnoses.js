"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const diagnoses_1 = __importDefault(require("../data/diagnoses"));
const diagnoses = diagnoses_1.default;
const getEntries = () => {
    return diagnoses;
};
const getNonSensitiveEntries = () => {
    return diagnoses.map(({ code, name }) => ({
        code,
        name,
    }));
};
/* const addEntry = () => {
  return [];
};
 */
exports.default = {
    getEntries,
    getNonSensitiveEntries,
};
