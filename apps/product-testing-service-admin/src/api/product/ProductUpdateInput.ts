import { MeasurementUpdateManyWithoutProductsInput } from "./MeasurementUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  measurements?: MeasurementUpdateManyWithoutProductsInput;
  name?: string | null;
  sku?: string | null;
};
