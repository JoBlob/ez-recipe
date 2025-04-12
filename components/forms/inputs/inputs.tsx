import { useController, UseControllerProps } from "react-hook-form";
import { TextInput, TextInputProps } from "react-native";

type TextInputPropsBase = Pick<TextInputProps, "style"> &
  Pick<UseControllerProps, "control" | "name">;

const TextInputBase = ({
  style,
  control,
  name,
}: TextInputPropsBase & UseControllerProps) => {
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
