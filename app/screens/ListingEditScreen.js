import React from "react";
import * as Yup from "yup";

import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const categories = [
  {
    value: 1,
    label: "Furniture",
    icon: {
      name: "floor-lamp",
      color: colors.white,
      backgroundColor: "#fc5c65",
    },
  },
  {
    value: 2,
    label: "Cars",
    icon: { name: "car", color: colors.white, backgroundColor: "#fd9644" },
  },
  {
    value: 3,
    label: "Cameras",
    icon: { name: "camera", color: colors.white, backgroundColor: "#fed330" },
  },
  {
    value: 4,
    label: "Games",
    icon: { name: "cards", color: colors.white, backgroundColor: "#26de81" },
  },
  {
    value: 5,
    label: "Clothing",
    icon: {
      name: "shoe-heel",
      color: colors.white,
      backgroundColor: "#2bcbba",
    },
  },
  {
    value: 6,
    label: "Sports",
    icon: {
      name: "basketball",
      color: colors.white,
      backgroundColor: "#45aaf2",
    },
  },
  {
    value: 7,
    label: "Movies & Music",
    icon: {
      name: "headphones",
      color: colors.white,
      backgroundColor: "#4b7bec",
    },
  },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          viewStyle="grid"
          width={200}
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton style={styles.postButton} title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  postButton: {
    marginTop: 10,
  },
});

export default ListingEditScreen;
