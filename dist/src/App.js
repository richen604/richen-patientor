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
const react_router_dom_1 = require("react-router-dom");
const semantic_ui_react_1 = require("semantic-ui-react");
const constants_1 = require("./constants");
const state_1 = require("./state");
const PatientListPage_1 = __importDefault(require("./PatientListPage"));
const PatientPage_1 = __importDefault(require("./PatientPage/PatientPage"));
const App = () => {
    const [, dispatch] = state_1.useStateValue();
    react_1.default.useEffect(() => {
        axios_1.default.get(`${constants_1.apiBaseUrl}/ping`).catch((error) => console.log(error));
        const fetchPatientList = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const { data: patientListFromApi } = yield axios_1.default.get(`${constants_1.apiBaseUrl}/patients`);
                dispatch({ type: "SET_PATIENT_LIST", payload: patientListFromApi });
            }
            catch (e) {
                console.error(e);
            }
        });
        fetchPatientList().catch((error) => console.log(error));
    }, [dispatch]);
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(semantic_ui_react_1.Container, null,
                react_1.default.createElement(semantic_ui_react_1.Header, { as: "h1" }, "Patientor"),
                react_1.default.createElement(semantic_ui_react_1.Button, { as: react_router_dom_1.Link, to: "/", primary: true }, "Home"),
                react_1.default.createElement(semantic_ui_react_1.Divider, { hidden: true }),
                react_1.default.createElement(react_router_dom_1.Switch, null,
                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", render: () => react_1.default.createElement(PatientListPage_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/patients/:id" },
                        react_1.default.createElement(PatientPage_1.default, null)))))));
};
exports.default = App;
