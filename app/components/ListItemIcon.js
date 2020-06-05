import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ListItemIcon({ icon, size, color }) {
  return (
    <View style={([styles.icon], { backgroundColor: color })}>
      <MaterialCommunityIcons name={icon} size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.primary,
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemIcon;
