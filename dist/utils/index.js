"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
const formik_1 = require("formik");
const types_1 = require("../types");
const parseString = (arg) => {
    if (!arg || !formik_1.isString(arg)) {
        throw new Error(`Incorrect or missing arg:  ${arg}`);
    }
    return arg;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const parseDate = (date) => {
    if (!date || !formik_1.isString(date) || !isDate(date)) {
        throw new Error(`Incorrect or missing date: ${date}`);
    }
    return date;
};
const isGender = (param) => {
    return Object.values(types_1.Gender).includes(param);
};
const parseGender = (gender) => {
    if (!gender || !isGender(gender) || !formik_1.isString(gender)) {
        throw new Error(`Incorrect or missing gender: ${gender}`);
    }
    return gender;
};
/* const isEntry = (param: any): param is Entry[] => {
  return Object.values(Entry).includes(param);
};

const parseEntryType = (entryType: any): EntryType => {
  if (!Object.values(EntryType).includes(entryType)) {
    throw new Error(`Incorrect or missing type: ${entryType || ""}`);
  }

  return entryType;
};

const toNewBaseEntry = (object: any): NewBaseEntry => {
  const newBaseEntry: NewBaseEntry = {
    type: parseEntryType(object.type),
    description: parseString(object.description),
    date: parseDate(object.date),
    specialist: parseString(object.specialist),
  };

  if (object.diagnosisCodes) {
    newBaseEntry.diagnosisCodes = parseDiagnosesCodes(object.diagnosisCodes);
  }

  return newBaseEntry;
}; */
const toNewPatientEntry = (object) => {
    return {
        name: parseString(object.name),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseString(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseString(object.occupation),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        entries: object.entries,
    };
};
exports.default = toNewPatientEntry;
