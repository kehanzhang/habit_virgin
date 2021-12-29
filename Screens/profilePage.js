import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const profilePage = () => {
  const user = auth.currentUser;
  const handleSignOut = () => {
    signOut(auth).catch((error) => {
      alert(error.message);
    });
  };
  return (
    <View>
      <Text>Profile Page</Text>
      <Text onPress={handleSignOut}>sign out</Text>
    </View>
  );
};

export default profilePage;

const styles = StyleSheet.create({});
