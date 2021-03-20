"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const diagnoses_1 = __importDefault(require("./routes/diagnoses"));
const patients_1 = __importDefault(require("./routes/patients"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(express_1.default.static("build"));
app.get("/api/ping", (_req, res) => {
    console.log("someone pinged here");
    res.send("pong");
});
app.use("/api/diagnoses", diagnoses_1.default);
app.use("/api/patients", patients_1.default);
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});
