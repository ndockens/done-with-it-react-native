import React, { useState } from "react";
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
import FormImagePicker from "./app/components/forms/FormImagePicker";
import { Form, FormField } from "./app/components/forms";
import * as Yup from "yup";

export default function App() {
  const validationSchema = Yup.object().shape({
    images: Yup.array().required().min(1).label("Images"),
  });

  return (
    <Screen>
      <Form
        initialValues={{
          images: [],
        }}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
      </Form>
    </Screen>
  );
}
