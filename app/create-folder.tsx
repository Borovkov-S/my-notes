import { COLORS } from "@/constants/ui";
import useFolderStore from "@/store/folder-store";
import { ActivityIndicator, StyleSheet, TextInput, View } from "react-native";

const CreateFolder = () => {
  const { hasHydrated } = useFolderStore()

  if (!hasHydrated) {
    return (
      <ActivityIndicator
        size="large"
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: COLORS.BACKGROUND,
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder="Название"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND
  }
})


export default CreateFolder