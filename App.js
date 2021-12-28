import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
//Screens
import HomeScreen from "./Screens/homePage";
import LoginScreen from "./Screens/loginPage";
import RegisterScreen from "./Screens/registerPage";
import ProfileScreen from "./Screens/profilePage";
import SearchScreen from "./Screens/searchPage";
import PostScreen from "./Screens/postPage";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const user = auth.currentUser;
  const [isSignedIn, setIsSignedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log("status: logged in || in App.js");
      setIsSignedIn(true);
    } else {
      console.log("status: not logged in || in App.js");
      setIsSignedIn(false);
    }
  });

  return (
    <NavigationContainer>
      {isSignedIn ? (
        // <Stack.Navigator initialRouteName="Profile">
        //   <Stack.Screen name="Profile" component={ProfileScreen} />
        // </Stack.Navigator>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Post" component={PostScreen} />
          <Tab.Screen name="Seach" component={SearchScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
