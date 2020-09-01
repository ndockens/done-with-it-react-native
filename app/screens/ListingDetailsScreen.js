import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { Image } from "react-native-expo-image-cache";
import * as Yup from "yup";
import { Notifications } from "expo";

import { Form, FormField, SubmitButton } from "../components/forms";
import ListItem from "../components/ListItem";
import Text from "../components/Text";

import colors from "../config/colors";
import messagesApi from "../api/messages";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  const validationSchema = Yup.object().shape({
    message: Yup.string().required().min(1).label("Message"),
  });

  const handleSendMessage = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();
    const response = await messagesApi.send(message, listing.id);

    if (!response.ok) {
      alert("There was a problem sending your message.");
      return;
    }

    resetForm();

    Notifications.presentLocalNotificationAsync({
      title: "Success",
      body: "Your message has been sent!",
      ios: {
        _displayInForeground: true,
      },
    });
  };

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <ScrollView>
        <Image
          style={styles.image}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          uri={listing.images[0].url}
          tint="light"
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.price}>${listing.price}</Text>
        </View>
        <View style={styles.userContainer}>
          <ListItem
            title="Mosh Hamedani"
            subTitle="5 Listings"
            image={require("../assets/mosh.jpg")}
          />
        </View>
        <View style={styles.contactForm}>
          <Form
            initialValues={{ message: "" }}
            onSubmit={handleSendMessage}
            validationSchema={validationSchema}
          >
            <FormField
              maxLength={255}
              name="message"
              placeholder="Message..."
            />
            <SubmitButton style={styles.contactButton} title="Contact Seller" />
          </Form>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  contactForm: {
    paddingHorizontal: 20,
  },
  contactButton: {
    marginTop: 10,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
