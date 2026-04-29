import { NoteState } from "@/types/note-state.";
import { parseDateToTimestamp } from "@/utils/parseDateToTimestamp";
import { create } from "zustand";
import { mmkvStorage } from "zustand-mmkv-storage";
import { createJSONStorage, persist } from "zustand/middleware";

const useNoteStore = create<NoteState>()(
  persist(
    (set) => ({
      notes: [],
      currentNoteValue: "",
      currentNoteId: null,
      selectedDeadline: "",
      hasHydrated: false,
      editOrCreateFlag: null,
      isSelectionMode: false,
      addNote: (id, content, deadline) =>
        set((s) => ({
          notes: [
            { id, content, deadline, createdAt: String(Date.now()) },
            ...s.notes,
          ],
        })),
      editNote: (id, newValue) =>
        set((s) => {
          const newNotes = s.notes.map((note) => {
            if (note.id === id) {
              note.content = newValue;
              note.deadline = s.selectedDeadline;
            }
            return note;
          });
          return { notes: newNotes };
        }),
      removeNote: (id) =>
        set((s) => ({ notes: s.notes.filter((note) => note.id !== id) })),
      sortNotesByDeadline: () =>
        set((s) => {
          const sortedNotes = s.notes.sort((a, b) => {
            const timestampA = a.deadline
              ? parseDateToTimestamp(a.deadline)
              : Infinity;
            const timestampB = b.deadline
              ? parseDateToTimestamp(b.deadline)
              : Infinity;

            return timestampA - timestampB;
          });
          return { notes: [...sortedNotes] };
        }),
      sortNotesByCreated: (value) =>
        set((s) => {
          const sortedNotes =
            value === "new-first"
              ? s.notes.sort((a, b) => {
                  if (a.createdAt < b.createdAt) {
                    return 1;
                  } else {
                    return -1;
                  }
                })
              : s.notes.sort((a, b) => {
                  if (a.createdAt < b.createdAt) {
                    return -1;
                  } else {
                    return 1;
                  }
                });
          return { notes: [...sortedNotes] };
        }),
      setCurrentNoteValue: (value) => set({ currentNoteValue: value }),
      setCurrentNoteId: (noteId) => set({ currentNoteId: noteId }),
      setSelectedDeadline: (value) => set({ selectedDeadline: value }),
      setEditOrCreateFlag: (value) => set({ editOrCreateFlag: value }),
      setHasHydrated: (value) => set({ hasHydrated: value }),
    }),
    {
      name: "note-storage",
      storage: createJSONStorage(() => mmkvStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHasHydrated(true);
        }
      },
    },
  ),
);

export default useNoteStore;
