import Button from "@/components/button";
import { COLORS } from "@/constants/ui";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type SearchProps = {
  searchedPhrase: string;
  setSearchedPhrase: Dispatch<SetStateAction<string>>;
};

const Search: React.FC<SearchProps> = ({ searchedPhrase, setSearchedPhrase }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        style={styles.icon}
        name={"search"}
        size={24}
        color={COLORS.BLUE.DARK}
      />
      <TextInput
        style={styles.input}
        value={searchedPhrase}
        onChangeText={(text) => {
          setSearchedPhrase(text)
        }}
        placeholder="Поиск..."
        placeholderTextColor={COLORS.BLUE.DARK}
      />
      {searchedPhrase && <Button style={styles.cancelButton} onPress={() => setSearchedPhrase('')}>
        <Text style={styles.buttonText}>Отмена</Text>
      </Button>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.BLUE.MIDDLE,
    backgroundColor: COLORS.BLUE.LIGHT,
    borderRadius: 15,
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 5,
    paddingRight: 10,
  },
  input: {
    flex: 1,
    color: COLORS.GREY.DARK,
  },
  icon: {
    paddingLeft: 10,
  },
  cancelButton: {
    backgroundColor: COLORS.BLUE.MIDDLE,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.BLUE.DARK
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.GREY.DARK
  }
});

export default Search;
