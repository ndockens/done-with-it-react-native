import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ListItemIcon({ name, size, color }) {
  return (
    <View
      style={[styles.icon, { backgroundColor: color ? color : colors.primary }]}
    >
      <MaterialCommunityIcons name={name} size={35} color={colors.white} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
  },
});

export default ListItemIcon;
