import React from "react";
import { FlatList } from "react-native";

import AppPickerItem from "./AppPickerItem";

function AppPickerListView({ data, keyExtractor, onPress }) {
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => (
        <AppPickerItem label={item.label} onPress={() => onPress(item)} />
      )}
    />
  );
}

export default AppPickerListView;
