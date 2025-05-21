import { StyleSheet, View } from "react-native";

import { FieldValues, FormProvider, useForm } from "react-hook-form";

import { RecipeForm } from "@/components/forms/recipe-form";
import { ScrollView } from "react-native-gesture-handler";

export default function TabTwoScreen() {
  const methods = useForm();

  // @TODO API
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <ScrollView className="bg-gray-900">
      <FormProvider {...methods}>
        <RecipeForm onSubmit={onSubmit} />
      </FormProvider>
    </ScrollView>
  );
}
