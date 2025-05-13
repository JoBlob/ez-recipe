import { StyleSheet } from "react-native";

import { FieldValues, FormProvider, useForm } from "react-hook-form";

import { RecipeForm } from "@/components/forms/recipe-form";

export default function TabTwoScreen() {
  const methods = useForm();

  // @TODO API
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <FormProvider {...methods}>
      <RecipeForm onSubmit={onSubmit} />
    </FormProvider>
  );
}

// @TODO styles
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
