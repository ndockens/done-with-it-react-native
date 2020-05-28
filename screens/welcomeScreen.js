import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={styles.background}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>Sell What You Don't Need</Text>
        </View>
      </ImageBackground>
      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  logoContainer: {
    top: 70,
    alignItems: "center",
  },
  logoImage: {
    height: 120,
    width: 120,
  },
  logoText: {},
  loginButton: {
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    height: 70,
    backgroundColor: "#4ECDC4",
  },
});
