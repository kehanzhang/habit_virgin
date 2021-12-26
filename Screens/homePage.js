//rnfes
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const homePage = ({ navigation }) => {
  const user = auth.currentUser;

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Text>{user.email}</Text>
      <Text onPress={handleSignOut}>sign out</Text>
      <Text>TEST</Text>
    </View>
  );
};

export default homePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
