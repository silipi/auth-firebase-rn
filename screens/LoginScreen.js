import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import firebase from '../database/firebase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "" || password === "") {
      ToastAndroid.showWithGravity(
        "Verifique as informações e tente novamente.", 
        ToastAndroid.SHORT, 
        ToastAndroid.TOP
      );
      return;
    }

    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  return (
    <View style={styles.container}>
      <TextInput 
        onChangeText={value => setEmail(value)}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput 
        onChangeText={value => setPassword(value)}
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity
        onPress={handleLogin}
        style={styles.loginButton}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Signup")}
        style={styles.signupButton}
      >
        <Text style={styles.text}>Ainda não tem uma conta? Cadastre-se!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
    width: "90%",
    borderBottomWidth: 1,
    paddingVertical: 5,
    marginBottom: 35,
  },
  loginButton: {
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 50,
    backgroundColor: "#10ac84",
    borderRadius: 5,
    marginBottom: 15,
  },
  signupButton: {
    padding: 5
  }
})