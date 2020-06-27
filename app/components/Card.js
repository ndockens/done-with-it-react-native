import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import Text from "./Text";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={2} style={styles.subTitle}>
          {subTitle}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 300,
    backgroundColor: colors.white,
    borderRadius: 25,
    overflow: "hidden",
    marginVertical: 10,
  },
  image: {
    height: 200,
    width: "100%",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  detailsContainer: {
    padding: 20,
    justifyContent: "center",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
