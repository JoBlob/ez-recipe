import {
  FieldValues,
  Form,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import { ButtonBase, ButtonDanger, ButtonSubmit } from "../buttons/button";
import { FormTextInput } from "../inputs/inputs";
import { Text, View } from "react-native";

type RecipeFormValues = {
  ingredients: {
    item: string;
    quantity: string;
  }[];
};

export function RecipeForm({
  onSubmit,
}: {
  onSubmit: (data: FieldValues) => void;
}) {
  const methods = useFormContext<RecipeFormValues>();

  const { control } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
    rules: { minLength: 1 },
  });

  console.log("fields", fields);

  return (
    <View className="p-5">
      {fields.map((field, index) => (
        <View key={field.id} className="gap-2 pb-4 mb-3 border-b border-white">
          <Text className="text-white">Name</Text>
          <FormTextInput name={`ingredients.${index}.item`} />
          <Text className="text-white">Quantity</Text>
          <FormTextInput name={`ingredients.${index}.quantity`} />

          <ButtonDanger
            title="Remove Ingeredient"
            onPress={() => remove(index)}
          />
        </View>
      ))}
      <View className="gap-3">
        <ButtonBase
          title="Add Ingredient"
          onPress={() => append({ item: "", quantity: "" })}
        />
        <ButtonSubmit title="Submit" onPress={methods.handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}
