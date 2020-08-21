import React from "react";
import { View, StyleSheet } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import AppText from "./Text";
import defaultStyles from "../config/styles";

function OfflineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  else return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.primary,
    justifyContent: "center",
    height: 50,
  },
  text: {
    color: defaultStyles.colors.white,
  },
});

export default OfflineNotice;
