"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const AddPatientForm_1 = __importDefault(require("./AddPatientForm"));
const AddPatientModal = ({ modalOpen, onClose, onSubmit, error }) => (react_1.default.createElement(semantic_ui_react_1.Modal, { open: modalOpen, onClose: onClose, centered: false, closeIcon: true },
    react_1.default.createElement(semantic_ui_react_1.Modal.Header, null, "Add a new patient"),
    react_1.default.createElement(semantic_ui_react_1.Modal.Content, null,
        error && react_1.default.createElement(semantic_ui_react_1.Segment, { inverted: true, color: "red" }, `Error: ${error}`),
        react_1.default.createElement(AddPatientForm_1.default, { onSubmit: onSubmit, onCancel: onClose }))));
exports.default = AddPatientModal;
