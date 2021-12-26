import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const homePage = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log("logged In");
    } else {
      console.log("not logged in");
    }
  });

  const user = auth.currentUser;

  return (
    <View>
      <Text>Home Page</Text>
      <Text>Hello {user.email}</Text>
    </View>
  );
};

export default homePage;

const styles = StyleSheet.create({});
