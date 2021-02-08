/* eslint-disable @typescript-eslint/no-empty-interface */
export interface DiagnoseEntry {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  male = "male",
  female = "female",
  other = "other",
}

export interface Entry {}

export type NonSensitiveDiagnoseEntry = Omit<DiagnoseEntry, "latin">;

export type PatientEntry = {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
  entries: Entry[];
};

export type NonSensitivePatientEntry = Omit<PatientEntry, "ssn">;

export type PublicPatient = Omit<PatientEntry, "ssn" | "entries">;

export type NewPatientEntry = Omit<PatientEntry, "id">;
