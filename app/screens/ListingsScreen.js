import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, FlatList } from "react-native";

import AppText from "../components/Text";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import Button from "../components/Button";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

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
      <ActivityIndicator size="large" animating={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setListings([
            {
              id: 2,
              title: "Couch in great condition",
              subTitle: "1000",
              image: require("../assets/couch.jpg"),
            },
          ]);
        }}
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
