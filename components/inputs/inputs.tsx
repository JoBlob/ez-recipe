import {
  useController,
  UseControllerProps,
  useFormContext,
} from "react-hook-form";
import { TextInput, TextInputProps } from "react-native";

type TextInputPropsBase = Pick<TextInputProps, "style"> &
  Pick<UseControllerProps, "control" | "name">;

export const FormTextInput = ({
  style,
  name,
}: TextInputPropsBase & UseControllerProps) => {
  const { control } = useFormContext();
  const {
    field: { onBlur, onChange, value },
  } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <TextInput
      style={style}
      onChangeText={onChange}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
