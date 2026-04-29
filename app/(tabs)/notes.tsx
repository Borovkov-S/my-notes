import { COLORS } from "@/constants/ui";
import ActionMenu from "@/layouts/action-menu";
import { ActionMenuButton } from "@/layouts/action-menu-button";
import { AddDeleteButton } from "@/layouts/add-delete-button";
import TaskItem from "@/layouts/note-item";
import Search from "@/layouts/search";
import useNoteStore from "@/store/note-store";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Notes = () => {
  const router = useRouter();
  const notes = useNoteStore((s) => s.notes);
  const setEditOrCreateFlag = useNoteStore((s) => s.setEditOrCreateFlag);
  const setSelectedDeadline = useNoteStore((s) => s.setSelectedDeadline);
  const removeNote = useNoteStore((s) => s.removeNote);

  const [isSelectionMode, setIsSelectionMode] = useState<boolean>(false);
  const [selectedNotes, setSelectedNotes] = useState<Set<string>>(new Set());
  const [actionMenuIsOpen, setActionMenuIsOpen] = useState<boolean>(false);
  const [searchedPhrase, setSearchedPhrase] = useState<string>('');

  const navigation = useNavigation();

  const searchedNotes = notes.filter((note) => note.content.toLowerCase().includes(searchedPhrase.toLowerCase()))
  const resultNotes = searchedNotes ?? notes

  useEffect(() => {
    //Отображаем количество выделенных заметок, если они есть и кнопку отображения меню действий
    const selectedNotesCount = selectedNotes.size;
    navigation.setOptions({
      headerRight: () => (
        <>
          {isSelectionMode && (
            <Text
              style={{
                fontSize: 18,
                color: COLORS.GREY.DARK,
                marginRight: 15,
                fontWeight: 500,
              }}
            >
              Выбрано: {selectedNotesCount}
            </Text>
          )}
          <ActionMenuButton
            onPress={() => setActionMenuIsOpen((prev) => !prev)}
          />
        </>
      ),
    });
  }, [isSelectionMode, navigation, selectedNotes.size]);

  //Длительное нажатие на заметку
  const handleLongPress = (noteId: string) => {
    if (!isSelectionMode) {
      setIsSelectionMode(true);
      setSelectedNotes(new Set([noteId]));
    } else {
      toggleNoteSelection(noteId);
    }
  };

  //Кратковременное нажатие на заметку
  const handlePress = (
    noteId: string,
    noteDeadline: string,
    setCurrentNoteId: (noteId: string) => void,
    setEditOrCreateFlag: (value: "edit") => void,
  ) => {
    if (isSelectionMode) {
      toggleNoteSelection(noteId);
    } else {
      setCurrentNoteId(noteId);
      setSelectedDeadline(noteDeadline);
      setEditOrCreateFlag("edit");
      router.push("/create-edit-note");
    }
  };

  //Выделение заметки (выделить/снять выделение)
  const toggleNoteSelection = (noteId: string) => {
    const newSelected = new Set(selectedNotes);
    if (newSelected.has(noteId)) {
      newSelected.delete(noteId);
    } else {
      newSelected.add(noteId);
    }

    setSelectedNotes(newSelected);

    if (newSelected.size === 0) {
      setIsSelectionMode(false);
    }
  };

  return (
    <View style={styles.container}>
      <Search searchedPhrase={searchedPhrase} setSearchedPhrase={setSearchedPhrase} />
      <FlatList
        data={resultNotes}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 2,
              backgroundColor: COLORS.BLUE.DARK,
              marginVertical: 4,
            }}
          />
        )}
        contentContainerStyle={{
          padding: 10,
        }}
        renderItem={({ item }) => {
          const isSelected = selectedNotes.has(item.id);
          return (
            <TaskItem
              item={item}
              onPress={handlePress}
              onLongPress={handleLongPress}
              isSelected={isSelected}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
      {isSelectionMode && (
        <AddDeleteButton
          variant="delete"
          onPress={() => {
            selectedNotes.forEach((id) => removeNote(String(id)));
            setIsSelectionMode(false);
          }}
        />
      )}
      <AddDeleteButton
        variant="add"
        onPress={() => {
          setEditOrCreateFlag("create");
          router.push("../create-edit-note");
        }}
      />
      {actionMenuIsOpen && (
        <TouchableWithoutFeedback onPress={() => setActionMenuIsOpen(false)}>
          <View style={styles.actionMenuOverlay}>
            <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
              <ActionMenu
                selectedNotes={selectedNotes}
                setSelectedNotes={setSelectedNotes}
                setIsSelectionMode={setIsSelectionMode}
              />
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
  },
  actionMenuOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Notes;
