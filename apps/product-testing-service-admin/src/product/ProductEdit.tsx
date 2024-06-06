import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MeasurementTitle } from "../measurement/MeasurementTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="measurements"
          reference="Measurement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MeasurementTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="sku" source="sku" />
      </SimpleForm>
    </Edit>
  );
};
