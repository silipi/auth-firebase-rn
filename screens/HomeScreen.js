import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import firebase from '../database/firebase';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Tela principal (Home)</Text>
      <Button 
        title="Desconectar-se" 
        onPress={() => firebase.auth().signOut()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})