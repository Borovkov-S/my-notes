import { COLORS } from "@/constants/ui";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function SelectDeadline() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [dateText, setDateText] = useState("");

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date: Date) => {
    // Форматируем дату для отображения
    const formattedDate = date.toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setSelectedDate(date);
    setDateText(formattedDate);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Выполнить до:</Text>
      <Pressable style={styles.pressable} onPress={showDatePicker}>
        <TextInput
          placeholder="Указать дату"
          value={dateText}
          style={styles.textInput}
          editable={false} // блокировка ввода с клавиатуры
        />
        <Ionicons name="calendar" size={24} color={COLORS.YELLOW} />
      </Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        locale="ru_RU"
        cancelTextIOS="Отмена"
        confirmTextIOS="Выбрать"
        buttonTextColorIOS="#6200ee"
        date={selectedDate || new Date()}
        minimumDate={new Date()} // Запрет выбора прошедших дат
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.LIGHT_GREY
  },
  text: {
    fontSize: 16,
    color: COLORS.GREY,
  },
  textInput: {
    color: COLORS.GREY,
    fontSize: 16
  },
  pressable: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.GREY,
    paddingHorizontal: 5,
  },
});
