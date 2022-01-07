import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";

const loginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        //console.log(user);
        //navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.titleText}>Habit Tracker</Text>
      {/* going to be logo */}
      <View style={styles.inputContainer}>
        <Text style={[styles.label, { marginTop: 10 }]}>Email</Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        ></TextInput>
        <Text style={styles.label}>Password</Text>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        ></TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.registerPrompt}>Don't have an account?</Text>
        <Text
          style={styles.registerText}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default loginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    //backgroundColor: "yellow",
    width: "60%",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
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
  registerPrompt: {
    marginTop: 10,
  },
  registerText: {
    color: "blue",
  },
  buttonContainer: {
    width: "40%",
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
  label: {
    fontSize: 18,
  },
});
