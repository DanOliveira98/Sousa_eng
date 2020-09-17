import React from 'react';
import { StatusBar, Permission } from 'react-native';
import Routes from './src/routes';
import { Header } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage'

export default function App() {
  
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
    <Routes />
    </>
  );
}

