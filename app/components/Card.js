import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 400,
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 25,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    height: 200,
    width: "100%",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  detailsContainer: {
    flex: 0.3,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
