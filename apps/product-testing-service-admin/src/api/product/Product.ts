import { Measurement } from "../measurement/Measurement";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  measurements?: Array<Measurement>;
  name: string | null;
  sku: string | null;
  updatedAt: Date;
};
