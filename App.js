import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#f8f4f4",
          justifyContent: "center",
          alignItems: "center",
          padding: 25,
        }}
      >
        <Card
          title="Red jacket for sale!"
          subTitle="$100"
          image={require("./app/assets/jacket.jpg")}
        />
      </View>
      <View
        style={{
          flex: 1,
        }}
      />
    </View>
  );
}
