import { Product } from "../product/Product";
import { TestType } from "../testType/TestType";

export type Measurement = {
  createdAt: Date;
  id: string;
  measuredAt: Date | null;
  product?: Product | null;
  testType?: TestType | null;
  updatedAt: Date;
  value: number | null;
};
