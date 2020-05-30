import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function Button({ children, color }) {
  const backgroundColor = color ? colors[color] : colors.primary;

  return (
    <View style={[styles.button, { backgroundColor }]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
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
