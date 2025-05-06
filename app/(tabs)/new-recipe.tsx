import { StyleSheet, Image, Platform, TextInputBase } from "react-native";

import { FieldValues, Form, FormProvider, useForm } from "react-hook-form";
import { FormTextInput } from "@/components/inputs/inputs";

// @TODO styles
export default function TabTwoScreen() {
  const methods = useForm();

  // @TODO API
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <FormProvider {...methods}>
      <Form onSubmit={onSubmit}>
        <FormTextInput name="name" />
        <input type="submit" />
      </Form>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
