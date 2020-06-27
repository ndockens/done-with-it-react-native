import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import AppText from "./AppText";
import Icon from "./Icon";

function AppPickerGridViewItem({
  iconName,
  iconBackgroundColor,
  iconColor,
  label,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon
        backgroundColor={iconBackgroundColor}
        iconColor={iconColor}
        name={iconName}
        size={70}
      />
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 15,
    marginHorizontal: 25,
  },
  text: {
    marginTop: 5,
    textAlign: "center",
    width: 80,
  },
});

export default AppPickerGridViewItem;
