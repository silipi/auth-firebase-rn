import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} options={{title: "Feed de notícias"}} />
      {/* Aqui poderia ter mais telas, por exemplo, para criar postagens, visualizar perfil... */}
    </Stack.Navigator>
  );
}