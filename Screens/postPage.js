import React from "react";
import { StyleSheet, Text, View } from "react-native";

const postPage = () => {
  return (
    <View style={styles.container}>
      <Text>Post Page</Text>
    </View>
  );
};

export default postPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
