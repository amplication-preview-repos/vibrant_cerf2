import { TestType as TTestType } from "../api/testType/TestType";

export const TESTTYPE_TITLE_FIELD = "name";

export const TestTypeTitle = (record: TTestType): string => {
  return record.name?.toString() || String(record.id);
};
