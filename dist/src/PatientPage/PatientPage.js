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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../constants");
const semantic_ui_react_1 = require("semantic-ui-react");
const EntryDetails_1 = __importDefault(require("./EntryDetails"));
const genderIconProps = {
    male: { name: "mars", color: "blue" },
    female: { name: "venus", color: "pink" },
    other: { name: "genderless", color: "grey" },
};
const PatientPage = () => {
    const [patient, setPatient] = react_1.useState(undefined);
    const { id } = react_router_dom_1.useParams();
    react_1.useEffect(() => {
        const fetchPatient = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const { data: patient } = yield axios_1.default.get(`${constants_1.apiBaseUrl}/patients/${id}`);
                setPatient(patient);
            }
            catch (e) {
                console.error(e);
            }
        });
        fetchPatient().catch((error) => console.log(error));
    }, []);
    if (!patient)
        return react_1.default.createElement("div", null, "Patient Not Found");
    return (react_1.default.createElement(semantic_ui_react_1.Container, null,
        react_1.default.createElement("div", null,
            patient.name,
            " ",
            react_1.default.createElement(semantic_ui_react_1.Icon, Object.assign({}, genderIconProps[patient.gender]))),
        react_1.default.createElement("p", null,
            react_1.default.createElement("strong", null, "SSN:"),
            " ",
            patient.ssn),
        react_1.default.createElement("p", null,
            react_1.default.createElement("strong", null, "Date of Birth:"),
            " ",
            patient.dateOfBirth),
        react_1.default.createElement("p", null,
            react_1.default.createElement("strong", null, "Occupation:"),
            " ",
            patient.occupation),
        react_1.default.createElement(semantic_ui_react_1.Card.Group, null, patient.entries.map(entry => (react_1.default.createElement(EntryDetails_1.default, { key: entry.id, entry: entry }))))));
};
exports.default = PatientPage;
