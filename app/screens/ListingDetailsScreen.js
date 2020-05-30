import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Card from "../components/Card";

function ListingDetailsScreen(props) {
  return (
    <View style={styles.container}>
      <Card
        title="Red jacket for sale!"
        subTitle="$100"
        image={require("../assets/jacket.jpg")}
      />
      <View style={styles.userProfile}>
        <Image
          style={styles.userAvatar}
          source={require("../assets/mosh.jpg")}
        />
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>Mosh Hamedani</Text>
          <Text style={styles.userListings}>5 Listings</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userAvatar: {
    height: 60,
    width: 60,
    resizeMode: "contain",
    borderRadius: 50,
  },
  userInfoContainer: {
    paddingTop: 3,
    paddingLeft: 8,
  },
  userListings: {
    paddingTop: 5,
    color: "gray",
  },
  userName: {
    fontWeight: "bold",
  },
  userProfile: {
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

export default ListingDetailsScreen;
