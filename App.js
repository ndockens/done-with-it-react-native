import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListItem from "./app/components/ListItem";
import Icon from "./app/components/Icon";
import colors from "./app/config/colors";

export default function App() {
  return (
    <SafeAreaView>
      <ListItem
        title="title"
        //subTitle="subtitle"
        //image={require("./app/assets/mosh.jpg")}
        ImageComponent={<Icon name="email" size={35} color={colors.primary} />}
      />
    </SafeAreaView>
  );
}
