import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  ScrollView,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  Keyboard,
  TextInput,
} from "react-native";
import { firebase } from "../config";

const LoginScreen = (props) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      props.setLogin(true);
      props.navigation.navigate("Home");
    } catch (error) {
      alert(error.message);
    }
  };

  const registerUser = async (email, password) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: "https://hangry-88bb5.firebaseapp.com",
          })
          .then(() => {
            alert("Verification email sent");
          })
          .catch((err) => alert.apply(err.message))
          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                email,
              });
          })
          .catch((err) => {
            alert(err.message);
          })
          .catch((err) => {
            alert(err.message);
          });
      });
  };

  const handleSignUp = () => {
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((UserCredentials) => {
    //     const user = UserCredentials.user;
    //     alert(user.email);
    //   })
    //   .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email.toLocaleLowerCase()}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        ></TextInput>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => loginUser(email, password)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => registerUser(email, password)}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
