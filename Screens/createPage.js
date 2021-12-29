import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
//import { Header } from "react-native-elements";

const createPage = () => {
  const [habitName, setHabitName] = useState("");
  const [description, setDescription] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Create a new Habit!</Text>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, { marginTop: 10 }]}>Name</Text>
        <TextInput
          value={habitName}
          onChangeText={(text) => setHabitName(text)}
          style={styles.input}
        ></TextInput>
        <Text style={styles.label}>Description</Text>
        <TextInput
          multiline
          value={description}
          onChangeText={(text) => setDescription(text)}
          style={styles.descriptionInput}
        ></TextInput>
      </View>
    </View>
  );
};

export default createPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  descriptionInput: {
    backgroundColor: "white",
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  label: {
    fontSize: 18,
  },
  Title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
