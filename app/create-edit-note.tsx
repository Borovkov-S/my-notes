import { COLORS } from "@/constants/ui";
import SelectDeadline from "@/layouts/select-deadline";
import useNoteStore from "@/store/note-store";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function CreateEditNote() {
  const {
    editOrCreateFlag,
    notes,
    currentNoteId,
    currentNoteValue,
    setCurrentNoteValue,
    setSelectedDeadline,
    hasHydrated,
  } = useNoteStore();
  const navigation = useNavigation();

  useEffect(() => {
    //Определение заголовка
    const title =
      editOrCreateFlag === "edit"
        ? "Редактирование"
        : editOrCreateFlag === "create"
          ? "Создание"
          : undefined;

    navigation.setOptions({
      title: title,
    });

    //Определение содержимого открытой заметки или очищение полей при создании новой
    if (editOrCreateFlag === "edit") {
      const currentNote = notes.filter((note) => note.id === currentNoteId)[0];

      setCurrentNoteValue(currentNote.content);
    } else {
      setCurrentNoteValue('')
      setSelectedDeadline('')
    }
  }, [editOrCreateFlag, navigation, setCurrentNoteValue, currentNoteId, setSelectedDeadline, notes]);

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
        value={currentNoteValue}
        onChangeText={setCurrentNoteValue}
        placeholder="Введите текст"
        textAlignVertical="top"
        multiline={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND,
    padding: 10,
    flex: 1,
  },
  textInput: {
    color: COLORS.GREY.DARK,
    flex: 1,
  },
});
