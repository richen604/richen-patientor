"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosisSelection = exports.NumberField = exports.TextField = exports.SelectField = void 0;
const react_1 = __importDefault(require("react"));
const formik_1 = require("formik");
const semantic_ui_react_1 = require("semantic-ui-react");
const SelectField = ({ name, label, options }) => (react_1.default.createElement(semantic_ui_react_1.Form.Field, null,
    react_1.default.createElement("label", null, label),
    react_1.default.createElement(formik_1.Field, { as: "select", name: name, className: "ui dropdown" }, options.map(option => (react_1.default.createElement("option", { key: option.value, value: option.value }, option.label || option.value))))));
exports.SelectField = SelectField;
const TextField = ({ field, label, placeholder }) => (react_1.default.createElement(semantic_ui_react_1.Form.Field, null,
    react_1.default.createElement("label", null, label),
    react_1.default.createElement(formik_1.Field, Object.assign({ placeholder: placeholder }, field)),
    react_1.default.createElement("div", { style: { color: 'red' } },
        react_1.default.createElement(formik_1.ErrorMessage, { name: field.name }))));
exports.TextField = TextField;
const NumberField = ({ field, label, min, max }) => (react_1.default.createElement(semantic_ui_react_1.Form.Field, null,
    react_1.default.createElement("label", null, label),
    react_1.default.createElement(formik_1.Field, Object.assign({}, field, { type: 'number', min: min, max: max })),
    react_1.default.createElement("div", { style: { color: 'red' } },
        react_1.default.createElement(formik_1.ErrorMessage, { name: field.name }))));
exports.NumberField = NumberField;
const DiagnosisSelection = ({ diagnoses, setFieldValue, setFieldTouched }) => {
    const field = "diagnosisCodes";
    const onChange = (_event, data) => {
        setFieldTouched(field, true);
        setFieldValue(field, data.value);
    };
    const stateOptions = diagnoses.map(diagnosis => ({
        key: diagnosis.code,
        text: `${diagnosis.name} (${diagnosis.code})`,
        value: diagnosis.code
    }));
    return (react_1.default.createElement(semantic_ui_react_1.Form.Field, null,
        react_1.default.createElement("label", null, "Diagnoses"),
        react_1.default.createElement(semantic_ui_react_1.Dropdown, { fluid: true, multiple: true, search: true, selection: true, options: stateOptions, onChange: onChange }),
        react_1.default.createElement(formik_1.ErrorMessage, { name: field })));
};
exports.DiagnosisSelection = DiagnosisSelection;
