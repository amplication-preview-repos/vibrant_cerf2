import { MeasurementCreateNestedManyWithoutTestTypesInput } from "./MeasurementCreateNestedManyWithoutTestTypesInput";

export type TestTypeCreateInput = {
  description?: string | null;
  measurements?: MeasurementCreateNestedManyWithoutTestTypesInput;
  name?: string | null;
};
