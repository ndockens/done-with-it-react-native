import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function Button(props) {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    height: 50,
    width: "100%",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Button;
