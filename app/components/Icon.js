import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function Icon({ name, size, color }) {
  return (
    <View style={[styles.icon, { backgroundColor: color }]}>
      <MaterialCommunityIcons name={name} size={size} color={colors.white} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 55,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
});

export default Icon;
