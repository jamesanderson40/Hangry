import React, { useState } from "react";
import {
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import List from "./List.js";

const FoodList = (props) => {
  return (
    <View>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Favorite Foods</Text>
        <View style={styles.items}>
          {props.foodItems.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => props.removeFood(index)}
              >
                <List text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default FoodList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    width: "100%",
  },
  tasksWrapper: {},
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 20,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
    marginLeft: 20,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    marginRight: 20,
  },
  addText: {},
});
