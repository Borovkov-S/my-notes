import { Button } from "@/components/button";
import { COLORS } from "@/constants/ui";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Tasks = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Tasks</Text>
      <Button onPress={() => router.push("../create-task")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
  },
});

export default Tasks;
