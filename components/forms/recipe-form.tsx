import { FieldValues, Form, useForm } from "react-hook-form";
import { ButtonSubmit } from "../buttons/button";
import { FormTextInput } from "../inputs/inputs";

export function RecipeForm({
  onSubmit,
}: {
  onSubmit: (data: FieldValues) => void;
}) {
  const methods = useForm();

  return (
    <Form onSubmit={onSubmit}>
      <FormTextInput name="field" />
      <ButtonSubmit title="Submit" onPress={methods.handleSubmit(onSubmit)} />
    </Form>
  );
}
