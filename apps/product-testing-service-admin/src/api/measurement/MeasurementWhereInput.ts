import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { TestTypeWhereUniqueInput } from "../testType/TestTypeWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type MeasurementWhereInput = {
  id?: StringFilter;
  measuredAt?: DateTimeNullableFilter;
  product?: ProductWhereUniqueInput;
  testType?: TestTypeWhereUniqueInput;
  value?: FloatNullableFilter;
};
