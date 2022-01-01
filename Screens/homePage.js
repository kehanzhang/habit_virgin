//rnfes
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const homePage = ({ navigation }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usersDocRef = doc(db, "users", auth.currentUser.uid);
    async function fetchData() {
      const userSnap = await getDoc(usersDocRef);
      if (userSnap.exists()) {
        console.log("Document data:", userSnap.data());
        setUser(userSnap.data());
        setIsLoaded(true);
      } else {
        console.log("No such document!");
        alert("User information retrival error");
      }
    }
    fetchData();
  }, []);

  return isLoaded ? (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Text>{user.firstName}</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text>loading</Text>
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
