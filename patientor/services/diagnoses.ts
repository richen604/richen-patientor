import diagnoseData from "../data/diagnoses";

import { DiagnoseEntry, NonSensitiveDiagnoseEntry } from "../types";

const diagnoses: Array<DiagnoseEntry> = diagnoseData;

const getEntries = (): Array<DiagnoseEntry> => {
  return diagnoses;
};

const getNonSensitiveEntries = (): NonSensitiveDiagnoseEntry[] => {
  return diagnoses.map(({ code, name }) => ({
    code,
    name,
  }));
};

/* const addEntry = () => {
  return [];
};
 */
export default {
  getEntries,
  getNonSensitiveEntries,
};
