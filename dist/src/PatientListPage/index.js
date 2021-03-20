"use strict";
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
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const react_1 = __importDefault(require("react"));
const axios_1 = __importDefault(require("axios"));
const semantic_ui_react_1 = require("semantic-ui-react");
const AddPatientModal_1 = __importDefault(require("../AddPatientModal"));
const constants_1 = require("../constants");
const HealthRatingBar_1 = __importDefault(require("../components/HealthRatingBar"));
const state_1 = require("../state");
const react_router_dom_1 = require("react-router-dom");
const PatientListPage = () => {
    const [{ patients }, dispatch] = state_1.useStateValue();
    const [modalOpen, setModalOpen] = react_1.default.useState(false);
    const [error, setError] = react_1.default.useState();
    const openModal = () => setModalOpen(true);
    const closeModal = () => {
        setModalOpen(false);
        setError(undefined);
    };
    const submitNewPatient = (values) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { data: newPatient } = yield axios_1.default.post(`${constants_1.apiBaseUrl}/patients`, values);
            dispatch({ type: "ADD_PATIENT", payload: newPatient });
            closeModal();
        }
        catch (e) {
            console.error(e.response.data);
            setError(e.response.data.error);
        }
    });
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(semantic_ui_react_1.Container, { textAlign: "center" },
            react_1.default.createElement("h3", null, "Patient list")),
        react_1.default.createElement(semantic_ui_react_1.Table, { celled: true },
            react_1.default.createElement(semantic_ui_react_1.Table.Header, null,
                react_1.default.createElement(semantic_ui_react_1.Table.Row, null,
                    react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "Name"),
                    react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "Gender"),
                    react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "Occupation"),
                    react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "Health Rating"))),
            react_1.default.createElement(semantic_ui_react_1.Table.Body, null, Object.values(patients).map((patient) => (react_1.default.createElement(semantic_ui_react_1.Table.Row, { key: patient.id },
                react_1.default.createElement(semantic_ui_react_1.Table.Cell, null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: `/patients/${patient.id}` },
                        " ",
                        patient.name)),
                react_1.default.createElement(semantic_ui_react_1.Table.Cell, null, patient.gender),
                react_1.default.createElement(semantic_ui_react_1.Table.Cell, null, patient.occupation),
                react_1.default.createElement(semantic_ui_react_1.Table.Cell, null,
                    react_1.default.createElement(HealthRatingBar_1.default, { showText: false, rating: 1 }))))))),
        react_1.default.createElement(AddPatientModal_1.default, { modalOpen: modalOpen, onSubmit: submitNewPatient, error: error, onClose: closeModal }),
        react_1.default.createElement(semantic_ui_react_1.Button, { onClick: () => openModal() }, "Add New Patient")));
};
exports.default = PatientListPage;
