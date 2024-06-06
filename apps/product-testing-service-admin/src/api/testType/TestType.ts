import { Measurement } from "../measurement/Measurement";

export type TestType = {
  createdAt: Date;
  description: string | null;
  id: string;
  measurements?: Array<Measurement>;
  name: string | null;
  updatedAt: Date;
};
