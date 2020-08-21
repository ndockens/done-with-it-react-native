import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/Text";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import Button from "../components/Button";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const { request: loadListings, data: listings, error, loading } = useApi(
    listingsApi.getListings
  );

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText style={styles.errorMessage}>
            There was a problem loading the data
          </AppText>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate("ListingDetails", item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
          />
        )}
        refreshing={refreshing}
        onRefresh={loadListings}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
  errorMessage: {
    margin: 15,
    textAlign: "center",
  },
});

export default ListingsScreen;
