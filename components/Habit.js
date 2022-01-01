import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Habit = (props) => {
  const data = props.data;
  const [state, setState] = useState(false);

  //refactor toggle to be component
  const handleToggle = () => {
    setState(!state);
  };

  return (
    <TouchableOpacity onPress={handleToggle}>
      <View style={styles.container}>
        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{data.name}</Text>
          </View>
          <View style={styles.circular}></View>
        </View>
        {state ? (
          <View style={styles.ToggleView}>
            <Text>{data.description}</Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default Habit;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
  ToggleView: {
    paddingTop: 10,
  },
});
