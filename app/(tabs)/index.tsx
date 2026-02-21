import { COLORS } from "@/constants/ui";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Link href='/tasks'>Посмотреть все задачи</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
  }
})
