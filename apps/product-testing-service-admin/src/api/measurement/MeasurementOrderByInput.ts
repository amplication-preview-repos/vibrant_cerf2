import { SortOrder } from "../../util/SortOrder";

export type MeasurementOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  measuredAt?: SortOrder;
  productId?: SortOrder;
  testTypeId?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
