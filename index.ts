import express from "express";
import cors from "cors";
import diagnoseRouter from "./routes/diagnoses";
import patientRouter from "./routes/patients";
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("build"));

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api/diagnoses", diagnoseRouter);
app.use("/api/patients", patientRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
