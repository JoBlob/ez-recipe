import {
  useController,
  UseControllerProps,
  useFormContext,
} from "react-hook-form";
import { TextInput, TextInputProps } from "react-native";

type TextInputPropsBase = Pick<TextInputProps, "style" | "className"> &
  Pick<UseControllerProps, "control" | "name">;

const defaultStyle =
  "border border-gray-300 rounded-md p-3 text-black bg-white";

export const FormTextInput = ({
  style,
  name,
  className,
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
      onBlur={onBlur}
      className={`${className} ${defaultStyle}`}
    />
  );
};
