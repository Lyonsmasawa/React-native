// In App.js in a new project

import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./app/screens/Home";
import Profile from "./app/screens/Profile";
import Header from "./app/components/Header";
import Constants from "expo-constants";

const Stack = createNativeStackNavigator();

const CUSTOM_THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

function App() {
  return (
    <View style={styles.container}>
      <Header />
      <NavigationContainer theme={CUSTOM_THEME}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: Constants.statusBarHeight,
  },
});

export default App;
