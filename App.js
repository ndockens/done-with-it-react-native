import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListItem from "./app/components/ListItem";
import Icon from "./app/components/Icon";
import colors from "./app/config/colors";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import TextInput from "./app/components/TextInput";
import Picker from "./app/components/Picker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import {
  Form,
  FormField,
  FormImagePicker,
  FormPicker,
  SubmitButton,
} from "./app/components/forms";
import * as Yup from "yup";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import jwtDecode from "jwt-decode";
import { AppLoading } from "expo";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();

    if (!token) return;

    setUser(jwtDecode(token));
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreToken} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
