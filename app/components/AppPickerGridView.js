import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import AppPickerGridViewItem from "./AppPickerGridViewItem";

function AppPickerGridView({ data, keyExtractor, onPress }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal={false}
        numColumns={3}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => (
          <AppPickerGridViewItem
            iconName={item.icon.name}
            iconColor={item.icon.color}
            iconBackgroundColor={item.icon.backgroundColor}
            label={item.label}
            onPress={() => onPress(item)}
          />
        )}
      />
    </View>
    // <View style={styles.container}>
    //   {data.map((item) => (
    //     <AppPickerGridViewItem
    //       key={() => keyExtractor(item)}
    //       label={item.label}
    //       onPress={() => onPress(item)}
    //     />
    //   ))}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default AppPickerGridView;
