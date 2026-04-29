import Button from "@/components/button";
import { COLORS } from "@/constants/ui";
import useNoteStore from "@/store/note-store";
import { Dispatch, SetStateAction } from "react";
import { StyleSheet, Text, View } from "react-native";

type ActionMenuProps = {
  selectedNotes: Set<string>;
  setSelectedNotes: Dispatch<SetStateAction<Set<string>>>;
  setIsSelectionMode: Dispatch<SetStateAction<boolean>>;
};

const ActionMenu = ({
  selectedNotes,
  setSelectedNotes,
  setIsSelectionMode,
}: ActionMenuProps) => {
  const allNotes = useNoteStore((s) => s.notes);
  const allNotesId = allNotes.map((item) => item.id);
  const { sortNotesByDeadline, sortNotesByCreated } = useNoteStore();

  const allNotesSelected = allNotesId.length === selectedNotes.size;

  //Выделение всех заметок
  const handleSelectAllNotes = () => {
    const allSelectedNotes = new Set(allNotesId);
    setSelectedNotes(allSelectedNotes);
    setIsSelectionMode(true);
  };

  //Снятие выделения со всех заметок
  const handleCancelSelectedNotes = () => {
    setSelectedNotes(new Set());
    setIsSelectionMode(false);
  };

  return (
    <View 
    style={styles.container}>
      {!allNotesSelected && (
        <Button
          onPress={handleSelectAllNotes}
          disabled={!Boolean(allNotes.length)}
        >
          <Text style={styles.label}>Выбрать все</Text>
        </Button>
      )}
      {selectedNotes.size !== 0 && (
        <Button onPress={handleCancelSelectedNotes}>
          <Text style={styles.label}>Снять выделение</Text>
        </Button>
      )}
      <Text style={styles.label}>Сортировать по:</Text>
      <Button
        onPress={() => {
          sortNotesByCreated("new-first");
          setIsSelectionMode(false);
        }}
      >
        <Text style={styles.label}>Сначала новые</Text>
      </Button>
      <Button
        onPress={() => {
          sortNotesByCreated("old-first");
          setIsSelectionMode(false);
        }}
      >
        <Text style={styles.label}>Сначала старые</Text>
      </Button>
      <Button
        onPress={() => {
          sortNotesByDeadline();
          setIsSelectionMode(false);
        }}
      >
        <Text style={styles.label}>Сроку выполнения</Text>
      </Button>
    </View>
  );
};

export default ActionMenu;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: COLORS.BLUE.LIGHT,
    padding: 10,
    rowGap: 10,
    borderRadius: 15,
  },
  label: {
    fontSize: 18,
    color: COLORS.GREY.DARK,
  },
});
