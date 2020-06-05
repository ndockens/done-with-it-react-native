import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import colors from "../config/colors";

function AccountScreen(props) {
  const listItems = [
    {
      id: 1,
      title: "My Listings",
      iconName: "format-list-bulleted",
      iconBackgroundColor: colors.primary,
      onPress: () => console.log("My Listings"),
    },
    {
      id: 2,
      title: "My Messages",
      iconName: "email",
      iconBackgroundColor: colors.secondary,
      onPress: () => console.log("My Messages"),
    },
  ];

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.profile}>
          <ListItem
            title="Mosh Hamedani"
            subTitle="programmingwithmosh@gmail.com"
            image={require("../assets/mosh.jpg")}
          />
        </View>
        <View style={styles.list}>
          <FlatList
            data={listItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                ImageComponent={
                  <Icon
                    name={item.iconName}
                    backgroundColor={item.iconBackgroundColor}
                  />
                }
                onPress={item.onPress}
              />
            )}
          />
        </View>
        <View style={styles.logOut}>
          <ListItem
            title="Log Out"
            ImageComponent={
              <Icon name="logout" backgroundColor={colors.yellow} />
            }
            onPress={() => console.log("Log Out")}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  list: {
    backgroundColor: colors.white,
    marginTop: 40,
  },
  logOut: {
    backgroundColor: colors.white,
    marginTop: 30,
  },
  profile: {
    backgroundColor: colors.white,
  },
});

export default AccountScreen;
