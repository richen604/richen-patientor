"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const utils_1 = __importDefault(require("../utils"));
const express_1 = __importDefault(require("express"));
const patients_1 = __importDefault(require("../services/patients"));
const router = express_1.default.Router();
router.get("/", (_req, res) => {
    res.json(patients_1.default.getNonSensitiveEntries());
});
router.get("/:id", (req, res) => {
    const patient = patients_1.default.findById(req.params.id);
    if (patient) {
        res.send(patient);
    }
    else {
        res.sendStatus(404);
    }
});
router.post("/", (req, res) => {
    try {
        const NewPatientEntry = utils_1.default(req.body);
        const addedEntry = patients_1.default.addPatient(NewPatientEntry);
        res.json(addedEntry);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
router.post("/", (_req, res) => {
    res.send("Saving a diary!");
});
exports.default = router;
