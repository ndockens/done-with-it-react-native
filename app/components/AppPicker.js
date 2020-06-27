import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import Screen from "./Screen";
import defaultStyles from "../config/styles";
import AppPickerListView from "./AppPickerListView";
import AppPickerGridView from "./AppPickerGridView";
import AppPickerItem from "./AppPickerItem";

function AppPicker({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectItem,
  viewStyle = "list",
  width,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          {/* <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <AppPickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          /> */}
          {viewStyle === "list" ? (
            <AppPickerListView
              data={items}
              keyExtractor={(item) => item.value.toString()}
              onPress={(item) => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          ) : (
            <AppPickerGridView
              data={items}
              keyExtractor={(item) => item.value.toString()}
              onPress={(item) => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    width: "100%",
    padding: 15,
    marginVertical: 10,
    borderRadius: 25,
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
