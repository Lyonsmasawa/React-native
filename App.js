// In App.js in a new project

import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./app/screens/Home";
import Profile from "./app/screens/Profile";
import Header from "./app/components/Header";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import Search from "./app/screens/Search";
import Notifications from "./app/screens/Notifications";

const Tab = createBottomTabNavigator();
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
        <MyTabs />
      </NavigationContainer>
    </View>
  );
}
const HomeNavigators = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          title: 'Home',
        }}
        name="HomeScreen"
        component={HomeNavigators}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
        }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
        }}
        name="Notifications"
        component={Notifications}
      />
    </Tab.Navigator>
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
