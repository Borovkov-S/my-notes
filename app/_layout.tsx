import { COLORS } from "@/constants/ui";
import useNoteStore from "@/store/note-store";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";

export default function RootLayout() {
  const {
    addNote,
    editNote,
    editOrCreateFlag,
    currentNoteId,
    currentNoteValue,
    selectedDeadline,
    setCurrentNoteValue,
    setSelectedDeadline,
  } = useNoteStore();

  const route = useRouter();

  //Создание новой заметки
  const createNote = () => {
    const noteId = String(Date.now());
    addNote(noteId, currentNoteValue, selectedDeadline);
    setCurrentNoteValue("");
    setSelectedDeadline("");
    route.push("/notes");
  };

  //Изменение существующей заметки
  const editCurrentNote = () => {
    editNote(currentNoteId!, currentNoteValue);
    setSelectedDeadline("");
    route.push("/notes");
  };
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.BACKGROUND,
        },
        headerTintColor: COLORS.GREY.DARK,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="create-edit-note"
        options={{
          headerStyle: {
            backgroundColor: COLORS.BACKGROUND,
          },
          headerTintColor: COLORS.GREY.DARK,
          headerRight: () => (
            <Pressable
              onPress={() => {
                if (editOrCreateFlag === "create") {
                  createNote();
                } else if (editOrCreateFlag === "edit") {
                  editCurrentNote();
                }
              }}
            >
              <Ionicons
                name={"checkmark-sharp"}
                size={36}
                color={COLORS.ACCENT.ORANGE}
              />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="create-folder"
        options={{
          headerStyle: {
            backgroundColor: COLORS.BACKGROUND,
          },
          headerTintColor: COLORS.GREY.DARK,
          headerRight: () => (
            <Pressable
              // onPress={() => {
              //   if (editOrCreateFlag === "create") {
              //     createNote();
              //   } else if (editOrCreateFlag === "edit") {
              //     editCurrentNote();
              //   }
              // }}
            >
              <Ionicons
                name={"checkmark-sharp"}
                size={36}
                color={COLORS.ACCENT.ORANGE}
              />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
