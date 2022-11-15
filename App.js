import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import FoodNavigator from "./screens/FoodNavigator.js";
import { firebase } from "./config";
// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();
// const Stack = createNativeStackNavigator();

function App() {
  const Tab = createBottomTabNavigator();
  const [foodItems, setFoodItem] = useState([]);
  const [item, setItem] = useState([]);

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [login, setLogin] = useState(false);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user && !login) {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Login" options={{ headerShown: false }}>
            {(props) => {
              return <LoginScreen setLogin={setLogin} {...props} />;
            }}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else if (user && !login) {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Login" options={{ headerShown: false }}>
            {(props) => {
              return <LoginScreen setLogin={setLogin} {...props} />;
            }}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Plate" options={{ headerShown: false }}>
            {(props) => (
              <FoodNavigator
                {...props}
                foodItems={foodItems}
                storeFood={setFoodItem}
                item={item}
                setItem={setItem}
              />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
