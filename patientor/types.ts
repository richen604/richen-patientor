export interface DiagnoseEntry {
    code: string,
    name: string,
    latin?: string
}

export enum Gender {
    male = "male",
    female = "female",
    other = "other",
}

export type NonSensitiveDiagnoseEntry = Omit<DiagnoseEntry, 'latin'>;

export type PatientEntry ={
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: string,
    occupation: string
};

export type NonSensitivePatientEntry = Omit<PatientEntry, 'ssn'>;

export type NewPatientEntry = Omit<PatientEntry, 'id'>;
