import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";

const HomeStack = createNativeStackNavigator({
  Home: HomeScreen,
});

HomeStack.navagationOptions = {
  tabBarLabel: "Home",
};

const SecondStack = createNativeStackNavigator({
  Home: HomeScreen,
});

SecondStack.navagationOptions = {
  tabBarLabel: "Home",
};

export default createBottomTabNavigator({
  HomeStack,
  SecondStack,
});
