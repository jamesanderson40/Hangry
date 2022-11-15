import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PlateScreen from "./PlateScreen";
import FoodScreen from "./FoodScreen";
import FoodItemScreen from "./FoodItemScreen";
const Stack = createStackNavigator();

const FoodNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="🍕 🌮 🌯 🍱">
        {() => <PlateScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Hangry Food Options">
        {() => <FoodScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Hangry Map">
        {() => <FoodItemScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default FoodNavigator;
