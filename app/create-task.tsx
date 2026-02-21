import { COLORS } from "@/constants/ui";
import SelectDeadline from "@/layouts/select-deadline";
import useNoteStore from "@/store/note-store";
import { ActivityIndicator, StyleSheet, TextInput, View } from "react-native";

export default function CreateTask() {
  const { createdNote, setCreatedNote, hasHydrated } = useNoteStore();

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
      <SelectDeadline />
      <TextInput
        style={styles.textInput}
        value={createdNote}
        onChange={(e: any) => setCreatedNote(e.target.value)}
        placeholder="Введите текст"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
    padding: 10,
  },
  textInput: {
    color: COLORS.GREY,
  },
});
