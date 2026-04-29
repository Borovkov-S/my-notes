import { COLORS } from "@/constants/ui";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.BLUE.DARK,
        headerStyle: {
          backgroundColor: COLORS.BACKGROUND,
          height: 80,
        },
        headerTintColor: COLORS.GREY.DARK,
        tabBarStyle: {
          backgroundColor: COLORS.BACKGROUND,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Главная",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notes"
        options={{
          title: "Заметки",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "list-sharp" : "list-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="folders"
        options={{
          title: "Папки",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "folder-sharp" : "folder-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
