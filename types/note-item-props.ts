import { Note } from "./note";

export type NoteItemProps = {
  item: Note;
  onPress: (
    noteId: string,
    noteDeadline: string,
    setCurrentNoteId: (noteId: string) => void,
    setEditOrCreateFlag: (value: "edit") => void,
  ) => void;
  onLongPress: (noteId: string) => void;
  isSelected: boolean;
};