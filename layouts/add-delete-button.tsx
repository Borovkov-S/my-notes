import { COLORS } from "@/constants/ui";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
  variant: "add" | "delete";
  onPress: () => void;
};

export const AddDeleteButton: React.FC<ButtonProps> = ({
  onPress,
  variant,
}) => {
  return (
    <Pressable
      style={[
        styles.button,
        variant === "add" ? styles.addButton : styles.deleteButton,
      ]}
      onPress={onPress}
    >
      {variant === "add" ? (
        <Text style={styles.buttonLabel}>+</Text>
      ) : (
        <Ionicons name={"trash-sharp"} size={40} color={COLORS.ACCENT.RED} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    borderWidth: 5,
    height: 70,
    justifyContent: "center",
    backgroundColor: COLORS.BACKGROUND,
  },
  addButton: {
    alignItems: "center",
    bottom: 20,
    right: 20,
    width: 70,
    borderRadius: 50,
    borderColor: COLORS.BLUE.DARK,
  },
  deleteButton: {
    bottom: 110,
    right: 0,
    width: 90,
    borderRightWidth: 0,
    borderColor: COLORS.ACCENT.RED,
    paddingLeft: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  buttonLabel: {
    backgroundColor: COLORS.BACKGROUND,
    fontSize: 50,
    lineHeight: 50,
    color: COLORS.BLUE.DARK,
  },
});

export default AddDeleteButton;
