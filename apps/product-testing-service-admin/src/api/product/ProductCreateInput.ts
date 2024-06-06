import { MeasurementCreateNestedManyWithoutProductsInput } from "./MeasurementCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  measurements?: MeasurementCreateNestedManyWithoutProductsInput;
  name?: string | null;
  sku?: string | null;
};
