import { COLORS } from "@/constants/ui";
import { AddDeleteButton } from "@/layouts/add-delete-button";
import FolderItem from "@/layouts/folder-item";
import useFolderStore from "@/store/folder-store";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";

export default function Folders() {
  const folders = useFolderStore((s) => s.folders)
  const router = useRouter()

  return (
    <View style={styles.container}>
      <FlatList
        data={folders}
        renderItem={FolderItem}
        keyExtractor={(item) => item.id}
      />
      <AddDeleteButton variant={"add"} onPress={() => {
        router.push('../create-folder')
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
  },
});
