import { COLORS } from "@/constants/ui";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

type ButtonProps = {
  label?: string;
  onPress?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ label, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons name="add-circle-outline" size={75} color={COLORS.BLUE} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  buttonLabel: {},
});

export default Button;
