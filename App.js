/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Router
import RegisterRouter from './routes/RegisterRouter'
import { Container, Content, Text } from 'native-base';

const App = () => {
  return (
    <NavigationContainer>
      <RegisterRouter />
    </NavigationContainer>
  );
};

export default App;

// Tugas : 1. Funciton Validasi Email; 2. Function Validasi Password & Confirm Password (Min. 6 karakter, include number & special karakter)
