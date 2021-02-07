export interface DiagnoseEntry {
    code: string,
    name: string,
    latin?: string
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
