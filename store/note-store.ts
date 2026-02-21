import { Note } from "@/types/note";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { mmkvStorage } from "zustand-mmkv-storage";

interface NoteState {
  notes: Note[];
  createdNote: string;
  hasHydrated: boolean;
  addNote: (id: string, content: string) => void;
  setHasHydrated: (value: boolean) => void;
  setCreatedNote: (value: string) => void
}

const useNoteStore = create<NoteState>()(
  persist(
    (set) => ({
      notes: [],
      createdNote: "",
      hasHydrated: false,
      addNote: (id, content) =>
        set((s) => ({
          notes: [...s.notes, { id, content, createdAt: String(Date.now()) }],
        })),
      setHasHydrated: (value) => set({ hasHydrated: value }),
      setCreatedNote: (value) => set({createdNote: value})
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
