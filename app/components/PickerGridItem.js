import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Text from "./Text";
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
      <Text style={styles.label}>{item.label}</Text>
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
