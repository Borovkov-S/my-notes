import { Note } from "./note";

export interface NoteState {
  notes: Note[];
  currentNoteValue: string;
  currentNoteId: string | null;
  selectedDeadline: string;
  editOrCreateFlag: "edit" | "create" | null;
  hasHydrated: boolean;
  isSelectionMode: boolean;
  addNote: (id: string, content: string, deadline: string) => void;
  editNote: (id: string, newValue: string) => void;
  removeNote: (id: string) => void;
  sortNotesByDeadline: () => void;
  sortNotesByCreated: (value: "old-first" | "new-first") => void;
  setCurrentNoteValue: (value: string) => void;
  setCurrentNoteId: (noteId: string) => void;
  setSelectedDeadline: (value: string) => void;
  setEditOrCreateFlag: (value: "edit" | "create") => void;
  setHasHydrated: (value: boolean) => void;
}