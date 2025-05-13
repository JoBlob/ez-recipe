import { Colors } from "@/constants/Colors";
import { Button, ButtonProps } from "react-native";

type ButtonBaseType = Pick<
  ButtonProps,
  "onPress" | "title" | "color" | "accessibilityLabel"
>;

type ButtonType = Omit<ButtonBaseType, "color">;

export function ButtonBase({
  onPress,
  title,
  color,
  accessibilityLabel,
}: ButtonBaseType) {
  return (
    <Button
      title={title}
      onPress={onPress}
      color={color}
      accessibilityLabel={accessibilityLabel}
    />
  );
}

export function ButtonSubmit({
  onPress,
  title,
  accessibilityLabel,
}: ButtonType) {
  return (
    <Button
      title={title}
      onPress={onPress}
      color={Colors.success}
      accessibilityLabel={accessibilityLabel}
    />
  );
}

export function ButtonWarning({
  onPress,
  title,
  accessibilityLabel,
}: ButtonType) {
  return (
    <Button
      title={title}
      onPress={onPress}
      color={Colors.warning}
      accessibilityLabel={accessibilityLabel}
    />
  );
}
export function ButtonDanger({
  onPress,
  title,
  accessibilityLabel,
}: ButtonType) {
  return (
    <Button
      title={title}
      onPress={onPress}
      color={Colors.danger}
      accessibilityLabel={accessibilityLabel}
    />
  );
}
