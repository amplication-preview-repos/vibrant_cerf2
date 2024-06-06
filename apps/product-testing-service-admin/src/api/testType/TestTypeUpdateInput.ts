import { MeasurementUpdateManyWithoutTestTypesInput } from "./MeasurementUpdateManyWithoutTestTypesInput";

export type TestTypeUpdateInput = {
  description?: string | null;
  measurements?: MeasurementUpdateManyWithoutTestTypesInput;
  name?: string | null;
};
