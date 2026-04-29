import { COLORS } from "@/constants/ui";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import useNoteStore from "@/store/note-store";

export default function SelectDeadline() {
  const { selectedDeadline, setSelectedDeadline } =
    useNoteStore();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  //Отобржение окна выбора даты
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  //Скрытие окна выбора даты
  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  //Сохранение дэдлайна
  const handleConfirm = (date: Date) => {
    const formattedDate = date.toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    setSelectedDate(date);
    setSelectedDeadline(formattedDate);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Выполнить до:</Text>
      <Pressable style={styles.pressable} onPress={showDatePicker}>
        <TextInput
          placeholder="Указать дату"
          value={selectedDeadline}
          style={styles.textInput}
          editable={false} // блокировка ввода с клавиатуры
        />
        <Ionicons name="calendar" size={24} color={COLORS.ACCENT.ORANGE} />
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
    borderColor: COLORS.GREY.LIGHT,
  },
  text: {
    fontSize: 16,
    color: COLORS.GREY.DARK,
  },
  textInput: {
    color: COLORS.GREY.DARK,
    fontSize: 16,
  },
  pressable: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.GREY.MIDDLE,
    paddingHorizontal: 5,
  },
});
