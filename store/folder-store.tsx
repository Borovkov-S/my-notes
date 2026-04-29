import { Folder } from "@/types/folder";
import { create } from "zustand";
import { mmkvStorage } from "zustand-mmkv-storage";
import { createJSONStorage, persist } from "zustand/middleware";

type FolderState = {
  folders: Folder[];
  hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
}

const useFolderStore = create<FolderState>()(
  persist(
    (set) => ({
      folders: [],
      hasHydrated: false,
      setHasHydrated: (value) => set({hasHydrated: value})
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

export default useFolderStore;
