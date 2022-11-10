import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("dziala register");

        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Zaloguj się</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
          >
            <Text style={styles.textFooter}>E-mail</Text>
            <View style={styles.action}>
              <FontAwesome
                name="user"
                size={20}
                color="black"
                style={styles.icon}
              />
              <TextInput
                onChangeText={(value) => setEmail(value)}
                autoCapitalize="none"
                keybordType="email-address"
                placeholder="E-mail"
                style={styles.textInput}
              />
            </View>

            <Text style={[styles.textFooter, { marginTop: 25 }]}>Hasło</Text>
            <View style={styles.action}>
              <FontAwesome name="lock" size={20} color="black" />
              <TextInput
                autoCapitalize="none"
                placeholder="Hasło"
                style={styles.textInput}
                onChangeText={(value) => setPassword(value)}
                secureTextEntry={passwordVisible}
              />
              <Ionicons
                style={styles.icon}
                name={passwordVisible ? "eye-outline" : "eye-off-outline"}
                onPress={() => setPasswordVisible(!passwordVisible)}
                size={20}
                color="black"
              />
            </View>
          </KeyboardAvoidingView>

          <TouchableOpacity>
            <Text style={{ color: "#162c4a", marginTop: 15 }}>
              Zapomniałem hasła
            </Text>
          </TouchableOpacity>

          <View style={styles.button}>
            <TouchableOpacity onPress={login} style={styles.signIn}>
              <LinearGradient
                colors={["#5db8fe", "#39cff2"]}
                style={styles.signIn}
              >
                <Text style={[styles.textSign, { color: "white" }]}>
                  Zaloguj
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={register}
              style={[
                styles.signIn,
                { borderColor: "#4dc2f8", borderWidth: 1, marginTop: 15 },
              ]}
            >
              <Text style={[styles.textSign, { color: "#5db8fe" }]}>
                Zarejestruj
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={register}
              style={[
                styles.signIn,
                { borderColor: "#4dc2f8", borderWidth: 1, marginTop: 15 },
              ]}
            >
              <LinearGradient
                colors={["#5db8fe", "#39cff2"]}
                style={styles.signIn}
              >
                <Text style={[styles.textSign, { color: "white" }]}>
                  Facebook
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009245",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  textHeader: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  textFooter: {
    color: "black",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    fontSize: 16,
    flex: 1,
    paddingLeft: 10,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    marginTop: 3,
  },
});
