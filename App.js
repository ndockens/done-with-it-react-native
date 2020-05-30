import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Button from "./app/components/Button";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <Button>LOGIN</Button>
    </View>
  );
}
