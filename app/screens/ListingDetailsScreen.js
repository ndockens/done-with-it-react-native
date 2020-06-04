import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale!</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
      <ListItem
        userName="Mosh Hamedani"
        profileImage={require("../assets/mosh.jpg")}
        listingCount={5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});

export default ListingDetailsScreen;
