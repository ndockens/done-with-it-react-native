import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ children, color, onPress }) {
  const backgroundColor = color ? colors[color] : colors.primary;

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
  },
});

export default AppButton;
