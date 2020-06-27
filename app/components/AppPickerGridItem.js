import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import AppText from "./AppText";
import Icon from "./Icon";

function AppPickerGridItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon
        backgroundColor={item.icon.backgroundColor}
        iconColor={item.icon.color}
        name={item.icon.name}
        size={70}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  label: {
    marginTop: 5,
    textAlign: "center",
    width: 80,
  },
});

export default AppPickerGridItem;
