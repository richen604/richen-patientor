/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import toNewPatientEntry from "../utils";
import express from "express";
import patientService from "../services/patients";
const router = express.Router();

router.get("/", (_req, res) => {
  res.json(patientService.getNonSensitiveEntries());
});

router.get("/:id", (req, res) => {
  const patient = patientService.findById(req.params.id);

  if (patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }
});

router.post("/", (req, res) => {
  try {
    const NewPatientEntry = toNewPatientEntry(req.body);

    const addedEntry = patientService.addPatient(NewPatientEntry);
    res.json(addedEntry);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", (_req, res) => {
  res.send("Saving a diary!");
});

export default router;
