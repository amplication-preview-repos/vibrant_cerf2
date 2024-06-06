import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MeasurementListRelationFilter } from "../measurement/MeasurementListRelationFilter";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  measurements?: MeasurementListRelationFilter;
  name?: StringNullableFilter;
  sku?: StringNullableFilter;
};
