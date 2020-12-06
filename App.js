import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { isLoaded } from "expo-font";
import MealsNavigator from "./navigation/MealsNavigator";

const fetchFont = () => {
  return Font.loadAsync({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  });
};
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!isLoaded) {
    <AppLoading startAsync={fetchFont} onFinish={() => setFontLoaded(true)} />;
  }
  return <MealsNavigator />;
}

const styles = StyleSheet.create({});
