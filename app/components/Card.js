import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 400,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  subTitle: {
    fontSize: 16,
    color: "turquoise",
    paddingTop: 10,
  },
  textContainer: {
    flex: 0.3,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
  },
});

export default Card;
