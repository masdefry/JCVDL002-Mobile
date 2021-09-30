/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Router
import RegisterRouter from './routes/RegisterRouter'
import { useEffect, useState } from 'react/cjs/react.development';
import MainRouter from './routes/MainRouter';

const App = () => {

  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    onGetAsyncStorage()
  }, [])

  const onGetAsyncStorage = () => {
    AsyncStorage.getItem('@idUser')
    .then((result) => {
      if(result !== null) return setIsLogin(true)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <NavigationContainer>
      {
        isLogin?
        <MainRouter />
      :
        <RegisterRouter />
      }
    </NavigationContainer>
  );
};

export default App;

// Tugas : 1. Funciton Validasi Email; 2. Function Validasi Password & Confirm Password (Min. 6 karakter, include number & special karakter)
