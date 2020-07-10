import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

function FeedNavigator(props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Listings"
      mode="modal"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
}

export default FeedNavigator;
