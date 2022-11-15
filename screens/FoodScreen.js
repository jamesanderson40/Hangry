import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import axios from "axios";
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const FoodScreen = (props) => {
  const [region, setRegion] = useState("");
  const [foodPlaces, setFoodPlaces] = useState("");

  let foodItems = props.foodItems;

  return (
    <View style={styles.container}>
      {foodItems.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => {
              props.setItem([item]);
              props.navigation.setOptions({ item });
              props.navigation.navigate("Hangry Map");
            }}
            key={index}
          >
            <Text style={styles.item}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default FoodScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderBottomColor: "black",
  },
  item: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    margin: 10,
    width: 250,
    backgroundColor: "#FFF",
    borderColor: "#C0C0C0",
    borderRadius: 20,
    borderWidth: 1,
    width: 250,
    marginLeft: 20,
  },
});
