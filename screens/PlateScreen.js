import React, { useState } from "react";
import axios from "axios";
import {
  Image,
  Platform,
  ScrollView,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  Keyboard,
} from "react-native";

import { Header, Input, Button, Divider, Icon } from "@rneui/themed";
import FoodList from "../components/FoodList";

const PlateScreen = (props) => {
  const [foodItems, setFoodItems] = useState([]);
  const [food, setFood] = useState();

  const handleAddFood = () => {
    if (foodItems.length >= 5) {
      setFood("");
      Alert.alert("No more items");
      return;
    }
    Keyboard.dismiss();
    setFoodItems([...foodItems, food]);
    setFood("");
  };

  const removeFood = (index) => {
    let itemsCopy = [...foodItems];
    itemsCopy.splice(index, 1);
    setFoodItems(itemsCopy);
  };

  const goGrabFood = () => {
    props.storeFood([...foodItems]);
    props.navigation.navigate("Hangry Food Options");
  };

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.heading}>Enter 5 of your favorite foods!</Text>
        <Divider
          style={{ width: "80%", margin: 20 }}
          color="#2089dc"
          insetType="left"
          subHeaderStyle={{}}
          width={1}
          orientation="horizontal"
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <Input
            placeholder={"Add food"}
            value={food}
            onChangeText={(text) => setFood(text)}
          />
          <TouchableOpacity onPress={() => handleAddFood()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <FoodList foodItems={foodItems} removeFood={removeFood} />
      </View>
      <View>
        <Button onPress={() => goGrabFood()} style={styles.Button}>
          Let's eat
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    // height: Viewport.height,
  },
  heading: {
    paddingTop: 15,
    fontSize: 20,
  },
  Button: {
    alignSelf: "stretch",
    marginBottom: 10,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    marginRight: 20,
    marginBottom: 35,
  },
  writeTaskWrapper: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textBox: {
    flex: 1,
    fontSize: 30,
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    paddingBottom: 20,
    width: 250,
    backgroundColor: "#FFF",
    borderRadius: 60,
    marginBottom: 10,
    borderColor: "#C0C0C0",

    borderWidth: 1,
    width: 250,
    marginLeft: 20,
  },
});

export default PlateScreen;
