/* eslint-disable @typescript-eslint/no-unsafe-call */
import patientData from "../data/patients";
import { v4 as uuidv4 } from "uuid";

import {
  PatientEntry,
  NonSensitivePatientEntry,
  NewPatientEntry,
} from "../types";

const patients: Array<PatientEntry> = patientData;

const getEntries = (): Array<PatientEntry> => {
  return patients;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
  return patients.map(
    ({ id, name, dateOfBirth, gender, occupation, entries }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
      entries,
    })
  );
};

const findById = (id: string): PatientEntry | undefined => {
  const entry = patients.find((p) => p.id === id);
  return entry;
};

const addPatient = (entry: NewPatientEntry): PatientEntry => {
  const newPatientEntry = {
    id: uuidv4(),
    ...entry,
  };

  patients.push(newPatientEntry);
  return newPatientEntry;
};

/* const addEntry = () => {
  return [];
};
 */
export default {
  getEntries,
  getNonSensitiveEntries,
  findById,
  addPatient,
};
