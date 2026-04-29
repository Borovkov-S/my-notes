import { COLORS } from "@/constants/ui";
import { ReactNode } from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";

type ButtonProps = PressableProps & {
  children: ReactNode;
  onPress?: () => void;
};

const Button = ({ children, onPress, ...props }: ButtonProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress} {...props}>
      {children}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.GREY.DARK,
    borderRadius: 10,
    backgroundColor: COLORS.BLUE.MIDDLE,
    padding: 7,
  },
});
