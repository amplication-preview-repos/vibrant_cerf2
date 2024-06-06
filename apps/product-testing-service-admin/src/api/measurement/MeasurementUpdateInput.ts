import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { TestTypeWhereUniqueInput } from "../testType/TestTypeWhereUniqueInput";

export type MeasurementUpdateInput = {
  measuredAt?: Date | null;
  product?: ProductWhereUniqueInput | null;
  testType?: TestTypeWhereUniqueInput | null;
  value?: number | null;
};
