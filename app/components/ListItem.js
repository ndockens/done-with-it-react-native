import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "../components/AppText";

import colors from "../config/colors";

function ListItem({ userName, profileImage, listingCount }) {
  return (
    <View style={styles.container}>
      <Image style={styles.profileImage} source={profileImage} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.userName}>{userName}</AppText>
        <AppText style={styles.listings}>{listingCount} Listings</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
  },
  detailsContainer: {
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  listings: {
    marginTop: 5,
    color: colors.gray,
    fontSize: 16,
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ListItem;
