import { Button } from "@/components/button";
import { COLORS } from "@/constants/ui";
import { StyleSheet, Text, View } from "react-native";

export default function Projects() {
  return (
    <View style={styles.container}>
      <Text>Проекты</Text>
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
  },
});
