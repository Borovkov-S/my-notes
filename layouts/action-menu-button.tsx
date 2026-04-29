import { COLORS } from "@/constants/ui";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet } from "react-native";

export const ActionMenuButton = ({ ...props }) => {
  return (
    <Pressable style={styles.container} {...props}>
      <Ionicons name={"ellipsis-vertical"} size={24} color={COLORS.GREY.DARK} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
