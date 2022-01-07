import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, SectionList } from "react-native";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Habit from "../components/Habit";

const profilePage = () => {
  const [completedHabits, setCompletedHabits] = useState([]);
  const [incompletedHabits, setIncompletedHabits] = useState([]);
  const [allHabits, setAllHabits] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const user = auth.currentUser;
  const handleSignOut = () => {
    signOut(auth).catch((error) => {
      alert(error.message);
    });
  };

  const testButton = () => {
    console.log(" == TEST BUTTON RESULTS == ");
    console.log("all");
    console.log(allHabits);
    console.log("incomplete[0]");
    console.log(incompletedHabits[0]);
  };

  useEffect(() => {
    const habitsCollectionsRef = collection(db, "users", user.uid, "habits");

    async function fetchIncompletedHabits() {
      const queryFalse = query(
        habitsCollectionsRef,
        where("completed_today", "==", false)
      );
      await getDocs(queryFalse).then((snapshot) => {
        setIncompletedHabits(snapshot.docs.map((doc) => doc.data()));
      });
    }
    async function fetchCompletedHabits() {
      const queryTrue = query(
        habitsCollectionsRef,
        where("completed_today", "==", true)
      );
      await getDocs(queryTrue).then((snapshot) => {
        setCompletedHabits(snapshot.docs.map((doc) => doc.data()));
      });
    }
    //refactor to run parellel & have isLoaded status
    async function driver() {
      fetchCompletedHabits();
      fetchIncompletedHabits();
      console.log("test");
      console.log(completedHabits);
      setIsLoaded(true);
    }
    driver();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text>Profile Page</Text>
        <Text onPress={handleSignOut}>sign out</Text>
        <Text onPress={testButton}>test</Text>
      </View>
      <View style={styles.cardsWrapper}>
        {isLoaded ? (
          <View>
            <SectionList
              keyExtractor={(item, index) => item + index}
              sections={[
                {
                  title: "Incomplete",
                  data: incompletedHabits,
                },
                {
                  title: "Complete",
                  data: completedHabits,
                },
              ]}
              renderItem={({ item }) => {
                return <Habit data={item}></Habit>;
              }}
              renderSectionHeader={({ section: { title } }) => (
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionText}>{title}</Text>
                </View>
              )}
            />
          </View>
        ) : (
          <Text>Not loaded</Text>
        )}
      </View>
    </View>
  );
};

export default profilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
    width: "100%",
  },
  cardsWrapper: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  cards: {
    //marginTop: 30,
  },
  sectionHeader: {
    alignItems: "center",
    backgroundColor: "black",
  },
  sectionText: {
    color: "white",
  },
});
