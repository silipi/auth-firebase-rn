import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import firebase from '../database/firebase';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (email === "" || password === "") {
      ToastAndroid.showWithGravity(
        "Verifique as informações e tente novamente.", 
        ToastAndroid.SHORT, 
        ToastAndroid.TOP
      );
      return;
    }

    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error)
    }

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
        placeholder="Senha (minimo 6 caracteres)"
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity
        onPress={handleSignup}
        style={styles.signupButton}
      >
        <Text style={styles.text}>Cadastrar-se</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.loginButton}
      >
        <Text style={styles.text}>Já tem uma conta? Faça o login.</Text>
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
  signupButton: {
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 50,
    backgroundColor: "#54a0ff",
    borderRadius: 5,
    marginBottom: 15,
  },
  loginButton: {
    padding: 5
  }
})