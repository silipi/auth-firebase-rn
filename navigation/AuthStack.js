import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={LoginScreen} options={{title: 'Login'}} />
      <Stack.Screen name='Signup' component={SignupScreen} options={{title: 'Cadastrar-se'}} />
    </Stack.Navigator>
  );
}