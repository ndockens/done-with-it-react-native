import React, { useState } from "react";
import * as Yup from "yup";

import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  const [error, setError] = useState();
  const auth = useAuth();

  const handleSubmit = async (userInfo) => {
    const response = await usersApi.register(userInfo);

    if (!response.ok) {
      if (response.data) {
        setError(response.data.error);
      } else {
        setError("An unexpected error has occurred.");
        console.log(result);
      }
      return;
    }

    logIn(userInfo.email, userInfo.password);
  };

  const logIn = async (email, password) => {
    const response = await authApi.login(email, password);
    if (!response.ok) return;
    auth.logIn(response.data);
  };

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />
        <FormField
          autoCapitalize="words"
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
          textContentType="name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton style={styles.registerButton} title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  registerButton: {
    marginTop: 10,
  },
});

export default RegisterScreen;
