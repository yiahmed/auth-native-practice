import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { authentication } from "./firebase";
import { useNavigation } from "@react-navigation/core";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import Page2 from "./screens/Page2";
import Contacts from "./screens/Contacts";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={StackNavigator}
      />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Page2" component={Page2} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {authenticated ? <TabNavigator /> : <LoginScreen />}
    </NavigationContainer>
  );
}
