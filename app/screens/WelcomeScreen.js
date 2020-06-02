import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={7}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          color="primary"
          onPress={() => console.log("Login button pressed")}
        >
          Login
        </AppButton>
        <AppButton
          color="secondary"
          onPress={() => console.log("Register button pressed")}
        >
          Register
        </AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    height: 200,
    width: "100%",
    justifyContent: "space-evenly",
    padding: 20,
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    paddingVertical: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
