import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import firebase from '../database/firebase';

import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

export default function Routes() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  // Cuida da mudança de estado do usuário: logado ou deslogado;
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  // Isso irá bloquear a execução até que a mudança no estado de autenticação seja concluida.
  if (initializing) {
    return null
  }

  // Daria para colocar aqui alguma tela de carregando e utilizar de um state para
  // alterar a exibição dela.

  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}