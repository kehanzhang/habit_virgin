import React, { useState } from "react";
import { db, auth } from "../firebase";
import { collection, doc, addDoc } from "firebase/firestore";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
//import { Header } from "react-native-elements";

const createPage = () => {
  const [habitName, setHabitName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    console.log(auth.currentUser.uid);
    async function pushToFirestore() {
      const habitsCollectionsRef = collection(
        db,
        "users",
        auth.currentUser.uid,
        "habits"
      );
      addDoc(habitsCollectionsRef, {
        name: habitName,
        description: description,
        completed_today: true,
      });
      console.log("habit pushed");
    }
    pushToFirestore();
  };

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
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleCreate} style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default createPage;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "red",
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
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  button: {
    backgroundColor: "#0782F9",
    borderColor: "black",
    borderRadius: 20,
    width: "100%",
    padding: 15,
    borderWidth: 1,
    marginVertical: 5,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "700",
    color: "white",
  },
});
