import { COLORS } from "@/constants/ui";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.BACKGROUND,
        },
        headerTintColor: COLORS.GREY,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="create-task"
        options={{
          title: "Создание задачи",
          headerStyle: {
            backgroundColor: COLORS.BACKGROUND,
          },
          headerTintColor: COLORS.GREY,
          headerRight: () => (
            <Ionicons
              name={"checkmark-sharp"}
              size={36}
              color={COLORS.YELLOW}
            />
          ),
        }}
      />
    </Stack>
  );
}
