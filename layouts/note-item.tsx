import { COLORS } from "@/constants/ui";
import useNoteStore from "@/store/note-store";
import { NoteItemProps } from "@/types/note-item-props";
import { parseDateToTimestamp } from "@/utils/parseDateToTimestamp";
import { Pressable, StyleSheet, Text, View } from "react-native";

const NoteItem = ({
  item,
  onPress,
  onLongPress,
  isSelected,
}: NoteItemProps) => {
  const setEditOrCreateFlag = useNoteStore((s) => s.setEditOrCreateFlag);
  const setCurrentNoteId = useNoteStore((s) => s.setCurrentNoteId);

  //Дата создания заметки
  const dateOfCreate = new Date(Number(item.createdAt));
  const formattedDateOfCreate = dateOfCreate.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  //Время создания заметки
  const timeOfCreate = dateOfCreate.toTimeString().slice(0, 5);
  //Выход за дэдлайн
  const deadlineIsPassed = parseDateToTimestamp(item.deadline) < Date.now();

  return (
    <Pressable
      onPress={() =>
        onPress(item.id, item.deadline, setCurrentNoteId, setEditOrCreateFlag)
      }
      onLongPress={() => onLongPress(item.id)}
      delayLongPress={500}
      style={[styles.container, isSelected && styles.selectedNote]}
    >
      <View style={styles.content}>
        <View style={styles.textBlock}>
          <Text style={styles.text} numberOfLines={4}>{item.content}</Text>
          <Text
            style={styles.date}
          >{`${formattedDateOfCreate}  |  ${timeOfCreate}`}</Text>
        </View>
        {item.deadline && (
          <Text
            style={[
              styles.deadline,
              deadlineIsPassed && { backgroundColor: COLORS.ACCENT.RED },
            ]}
          >{`до:\n${item.deadline}`}</Text>
        )}
      </View>
    </Pressable>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLUE.MIDDLE,
    borderWidth: 1,
    borderColor: COLORS.BLUE.DARK,
    borderRadius: 15,
    zIndex: -2,
    maxHeight: 150,
  },
  content: {
    position: "relative",
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 15,
    overflow: "hidden",
  },
  text: {
    fontSize: 18,
    color: COLORS.GREY.DARK,
    paddingBottom: 15,
    paddingTop: 7,
    paddingLeft: 15,
    paddingRight: 130,
    textAlignVertical: "center",
  },
  textBlock: {
    flex: 1,
    height: "100%",
  },
  date: {
    marginTop: 5,
    paddingHorizontal: 15,
    paddingBottom: 7,
    color: COLORS.GREY.DARK,
  },
  deadline: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: 18,
    backgroundColor: COLORS.ACCENT.GREEN,
    color: COLORS.GREY.DARK,
    zIndex: -1,
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderBottomLeftRadius: 15,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.BLUE.DARK
  },
  selectedNote: {
    backgroundColor: COLORS.ACCENT.BROWN,
  },
});
