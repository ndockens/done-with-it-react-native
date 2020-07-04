import React from "react";
import * as Yup from "yup";

import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import {
  Form,
  FormField,
  FormImagePicker,
  FormPicker,
  SubmitButton,
} from "../components/forms";
import useLocation from "../hooks/useLocation";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Please select at least one image."),
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
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <FormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          placeholder="Category"
          viewStyle="grid"
          width={200}
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton style={styles.postButton} title="Post" />
      </Form>
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
